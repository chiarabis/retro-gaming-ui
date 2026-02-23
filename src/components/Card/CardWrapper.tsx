import { useState, useEffect } from "react";
//import Select from "../Select/Select";
import Card from "./Card";
import type { Pokemon } from "./Card"
import type { Evolution } from "./Slider"
import { RadioBtn } from "./Card.styles"
import Select from "../Select/Select"




export default function CardWrapper({ limit }: { limit: number }) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [types, setTypes] = useState<string[]>([])
  const [selectedType, setSelectedType] = useState("")
  const [selectedGender, setSelectedGender] = useState<"male" | "female" | "genderless">("male")

  

    /* -------------------- FETCH TYPES -------------------- */
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/type")
        .then((response) => response.json())
        .then((data) => setTypes(data.results.map((t: any) => t.name)))
    }, [])

    /* -------------------- EVOLUTIONS -------------------- */
    const getEvolutions = async (id: number): Promise<Evolution[]> => {
        const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        const speciesData = await speciesRes.json()

        const evoRes = await fetch(speciesData.evolution_chain.url)
        const evoData = await evoRes.json()

        const evolutions: Evolution[] = []
        let current = evoData.chain


        while (current) {
        const name = current.species.name
        const pokeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const pokeData = await pokeRes.json()

        evolutions.push({
            name,
            image: pokeData.sprites.front_default,
        })

        current = current.evolves_to[0]
        }

        return evolutions
    }


    /* -------------------- BUILD POKEMON -------------------- */
    const buildPokemon = async (url: string): Promise<Pokemon> => {
        const data = await fetch(url).then((response) => response.json())
        const evolutions = await getEvolutions(data.id)

        return {
        ...data,
        evolutions: evolutions.filter((e) => e.name !== data.name),
        }
    }

    /* -------------------- DEFAULT -------------------- */
    const fetchDefaultPokemons = async () => {
        const promises = Array.from({ length: 9 }, (_, i) =>
            buildPokemon(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
        )
        setPokemons(await Promise.all(promises))
    }
    useEffect(() => {
        fetchDefaultPokemons()
    }, [])
    


    /* -------------------- APPLY FILTERS -------------------- */
    const genderToId = {
        female: 1,
        male: 2,
        genderless: 3,
    }

    const applyFilters = async (type: string, gender: "male" | "female" | "genderless") => {
        const genderId = genderToId[gender]        
        const genderRes = await fetch(`https://pokeapi.co/api/v2/gender/${genderId}`)
        const genderData = await genderRes.json()
        const genderPokemonNames = genderData.pokemon_species_details.map((p: any) => p.pokemon_species.name)
  

        if (type) {
            const typeRes = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
            const typeData = await typeRes.json()
            const filteredNames = typeData.pokemon
            .map((p: any) => p.pokemon.name)
            .filter((name: string) => genderPokemonNames.includes(name))
            //.slice(0, 9)

            const promises = filteredNames.map((name: string) =>
                buildPokemon(`https://pokeapi.co/api/v2/pokemon/${name}`)
            )
            setPokemons(await Promise.all(promises))
            return
        }


        const filtered = genderPokemonNames.slice(0, 9)
        const promises = filtered.map((name: string) =>
            buildPokemon(`https://pokeapi.co/api/v2/pokemon/${name}`)
        )
        setPokemons(await Promise.all(promises))
    }



    


    //limita card visibili
    const visibleCards = limit ? pokemons.slice(0, limit) : pokemons;
    //const visibleCards = pokemons.slice(0, limit || pokemons.length);

    // if (loading) {
    //     return <div style={{display: "flex", flexDirection: 'row', justifyContent: "center", gap: "0.75rem", width: '100%'}}>
    //         <div className="pokeball"></div>
    //     </div>;
    // }



  return (
    <div style={{padding: "1.5rem", overflow: "visible", zIndex: 10, width: "100%" }}>
        <h1 style={{ fontSize: "1.75rem", margin: '0 0 1rem 0', fontWeight: 300 }}>
            Pokédex
        </h1>

        <div style={{ display: "flex", gap: "2rem", justifyContent: "start", alignItems: "center"}}>
            <Select
                optionsList={types}
                placeholder="All types"
                onChange={(selectedType) => {
                    // setSelectedType(selectedType)
                    // fetchPokemonsByType(selectedType)
                    const type = selectedType === "All types" ? "" : selectedType
                        setSelectedType(type)
                        applyFilters(type, selectedGender)
                    }}/>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem"}}>
            <p style={{ margin: "0" }}>Genre</p>
                <div style={{ display: "flex", flexDirection: "row", gap: "1rem"}}>
                    <RadioBtn>
                        <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={selectedGender === "male"}
                        onChange={() => {
                            const gender = "male"
                            setSelectedGender(gender)
                            applyFilters(selectedType, gender)
                        }}
                        />
                        <span className="custom-radio"/>
                        <span>Male</span>
                    </RadioBtn>

                    <RadioBtn>
                        <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={selectedGender === "female"}
                        onChange={() => {
                            const gender = "female"
                            setSelectedGender(gender)
                            applyFilters(selectedType, gender)
                        }}
                        />
                        <span className="custom-radio"/>
                        <span>Female</span>
                    </RadioBtn>

                    <RadioBtn>
                        <input
                            type="radio"
                            name="gender"
                            value="genderless"
                            checked={selectedGender === "genderless"}
                            onChange={() => {
                                const gender = "genderless"
                                setSelectedGender(gender)
                                applyFilters(selectedType, gender)
                            }}
                        />
                        <span className="custom-radio"/>
                        <span>Genderless</span>
                    </RadioBtn>
                </div>
            </div>
        </div>
    



      {/* CARDS */}
      <div
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fill, minmax(16rem, 1fr))",
          alignItems: "stretch",
          marginTop: "1.5rem",
        }}
        >
        {/* {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} selectedGender={selectedGender}  />
        ))} */}
        
        
        {visibleCards.map((pokemon) => (
          <Card key={pokemon.id || pokemon.name} pokemon={pokemon} selectedGender={selectedGender}  />
        ))}
        
        
      </div>
    </div>
  )
}
