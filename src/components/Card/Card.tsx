//import type { Pokemon } from "./CardWrapper";
import Slider from "./Slider";
import type { Evolution } from "./Slider";

export interface Pokemon {
  id: number
  name: string
  sprites: {
    front_default: string
  }
  types: {
    type: {
      name: string
    }
  }[]
  evolutions: Evolution[]
  abilities: {
    ability: {
      name: string
    }
  }[]
  // base_stat: number;
  // stat: {
  //   name: string;
  // };
}

interface CardProps {
  pokemon: Pokemon
  selectedGender: "male" | "female" | "genderless"
}


const typeColors: Record<string, string> = {
  grass: "#78C850",
  fire: "#F08030",
  water: "#66bffa",
  electric: "#f8f530",
  ice: "#bdf3f3",
  fighting: "#C03028",
  poison: "#c749c7",
  ground: "#E0C068",
  flying: "#ffe5c4",
  psychic: "#c77990",
  bug: "#93a110",
  rock: "#96715b",
  ghost: "#705898",
  dark: "#564e68",
  dragon: "#3a72ec",
  steel: "#9a9aad",
  fairy: "#EE99AC",
  normal: "#ccc",
}

const MAX_STAT = 255;

export default function Card({pokemon, selectedGender}: CardProps) {
  return (
    <div
      style={{
        width: "auto",
        height: "fit-content",
        background: "linear-gradient(50deg,rgba(240, 89, 167, 1) 0%, rgba(170, 242, 237, 1) 25%, rgba(253, 255, 192, 1) 49%, rgba(250, 175, 214, 1) 75%, rgba(150, 204, 231, 1) 100%)",
        //backdropFilter: "blur(0.5px)",
        //boxShadow: "4px 4px 0px 0px #8b8b8b, 8px 8px 0px 0px rgba(44, 44, 44, 1)",
        boxShadow: "4px 4px 0 0 rgba(15, 23, 43, 0.7)",
        borderRadius: "14px",
        border: "1px solid #0f172b",
        padding: "1rem",
      }}>

      {/* TYPES */}
      <div style={{
          display: "flex",
          gap: "0.5rem",
          justifyContent: "center",
          marginBottom: "0.5rem",
        }}>
        {pokemon.types.map((t) => (
          <span
            key={t.type.name}
            style={{
              fontSize: "0.8rem",
              padding: "0.25rem 0.5rem",
              borderRadius: "9999px",
              backgroundColor: typeColors[t.type.name],
              textTransform: "capitalize",
            }}>
            {t.type.name}
          </span>
        ))}
      </div>

      {/* MAIN */}
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        style={{ display: "block", margin: "0 auto" }}
      />
      <div style={{ display: "flex", flexDirection: "row", gap: "0.25rem"}}>
        {/* {pokemon.stats.map((statObj: any) => {
            const percent = Math.min(
              Math.round((statObj.base_stat / MAX_STAT) * 100),
              100
            );

            return (
              <div key={statObj.stat.name}>
                <div>{statObj.stat.name.toUpperCase()}</div>
                <div>
                  <div style={{ width: `${percent}%` }} />
                </div>
                <span>{statObj.base_stat}</span>
              </div>
            );
        })} */}
      </div>

      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "0.5rem",
          textTransform: "capitalize",
          color: `${selectedGender === "female" ? "#f059a7" : selectedGender === "male" ? "#309dd3" : "#0f172b"}`,
          textShadow: `2px 3px 0px ${selectedGender === "female" ? "#96cce7" : selectedGender === "male" ? "#f796c8" : "#b9b9b9"}`,
        }}>
        {pokemon.name}
      </h2>

      {/* ABILITIES */}
      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap", marginTop: "0.5rem" }}>
        {pokemon.abilities.map((a) => (
            <span
            key={a.ability.name}
            style={{
                fontSize: "0.75rem",
                padding: "0.25rem 0.5rem",
                //borderRadius: "9999px",
                margin: "0.5rem",
                border: "1px solid #0f172b",
                boxShadow: "2px 2px 0px #0f172b",
                backgroundColor: "transparent",
                textTransform: "capitalize",
            }}
            >
            {a.ability.name}
            </span>
        ))}
      </div>

        


      {/* SLIDER */}
      {pokemon.evolutions.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "0.5rem",
            }}>
            {pokemon.evolutions.length > 0 && (
                <Slider evolutions={pokemon.evolutions} />
            )}

        </div>
      )}
    </div>
  )
}