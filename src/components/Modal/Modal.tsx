import Card from "../Card/Card";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
//import "../Loader/style.css";




type ModalItem = {
  name: string;
  content: React.ReactNode;
};




export const modals: ModalItem[] = [
    { 
        name: 'About', 
        content: (
            <>
                <div style={{margin: '1rem'}}>
                    <p style={{ margin: '0.75rem 0', textAlign: 'center'}}>Welcome!</p>
                    <p style={{ margin: 0, textAlign: 'justify'}}>I'm Chiara 👋 A web developer.</p>
                    <p style={{ margin: 0, textAlign: 'justify'}}>I love retro gaming aesthetic, pixel art,Y2K vibes, 80-90's anime and manga.<br/> So I created this template! 🎮</p>
                    <p style={{ margin: 0, textAlign: 'justify'}}>You can use it for your projects and customize it as you like.</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1rem', marginTop: '1rem', borderTop: '2px solid #0f172b' }}>
                    <a style={{ margin: 0, textDecoration: 'none', color: '#0f172b', cursor: 'pointer'}} className="card-link glitch-anim" data-text="GitHub" href="https://github.com/chiarabis" target="_blank">GitHub</a>
                    <a href="https://pokeapi.co/" target="_blank" style={{ margin: 0, textDecoration: 'none', color: '#0f172b', cursor: 'pointer', }} className="card-link glitch-anim" data-text="Pokemon API">Contact</a>
                </div>
            </>
        )
    },
  { 
    name: 'Pokemon cards', 
    content: (
        <>
            <div style={{margin: '1rem', height: 'fit-content'}}>
                <div style={{ display: 'flex', flexDirection: 'column', margin: '1rem 0', gap: '0.5rem'}}>
                    <h2 style={{ margin: 0, fontWeight: 'normal'}}>Pokédex</h2>
                    <span>Card example:</span>
                </div>
                <Card 
                pokemon={{
                    id: 1, 
                    name: 'Bulbasaur', 
                    sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'}, 
                    types: [{type: {name: 'grass'}}, {type: {name: 'poison'}}], 
                    evolutions: [{name: 'Ivysaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}, {name: 'Venusaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'}], 
                    abilities: [{ability: {name: 'Overgrow'}}, {ability: {name: 'Chlorophyll'}}]
                }}
                selectedGender="male"/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1rem', marginTop: '1rem', borderTop: '2px solid #0f172b' }}>
                <a style={{ margin: 0, textDecoration: 'none', color: '#0f172b', cursor: 'pointer'}} className="card-link glitch-anim" data-text="View project">View project</a>
                <a href="https://pokeapi.co/" target="_blank" style={{ margin: 0, textDecoration: 'none', color: '#0f172b', cursor: 'pointer', }} className="card-link glitch-anim" data-text="Pokemon API">Pokemon API</a>
            </div>
        </>
    )
  },
  { 
    name: 'Music Player', 
    content: (
        <div style={{ margin: '1rem', width: "380px"}}>
            <MusicPlayer/>
        </div>
    )
  },
  { 
    name: 'Pixel Icons', 
    content: (
        <div style={{ margin: '1rem', width: "380px"}}>
            <p>pixel icons</p>
        </div>
    )
  },
  { 
    name: 'Contact', 
    content: ( 
        <div style={{ display: 'flex', flexDirection: 'row', margin: '1rem', gap: '1rem'}}>
            <div>
                <p style={{ margin: '0 0 0.75rem 0', textAlign: 'start'}}>Contact me</p>
                <p style={{ margin: 0, textAlign: 'justify'}}>email@gmail.kz</p>
                <p style={{ margin: 0, textAlign: 'justify'}}>+39 12345678</p>
            </div>
            <div style={{ float: 'right', alignSelf: 'end', transition: 'transform 0.2s', animation: 'bounce 1s infinite ease-in-out' }}>
                <img src="./laibdwee.png" style={{ width: '40px' }} />
            </div>
        </div>
    )
  },
];


export default function Modal({
    closeWindow,
    children,
}: {
    closeWindow: () => void;
    children?: React.ReactNode;
}) {

    // const [connected, setConnected] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setConnected(false);
    //     }, 4000);
    //     return () => clearTimeout(timer);
    // }, []);

//     const [size, setSize] = useState<{ width: number; height: number } | null>(null);
// const [measured, setMeasured] = useState(false);
// const contentRef = useRef<HTMLDivElement>(null);

// useLayoutEffect(() => {
//   if (contentRef.current) {
//     const rect = contentRef.current.getBoundingClientRect();
//     setSize({ width: rect.width, height: rect.height });
//     setMeasured(true);
//   }
// }, [children]);

    


    return (

        
            <div style={{ backgroundColor: '#fffdfd', width: 'auto', height: 'fit-content', position: 'absolute', 
                left: '50%', top: '50%', transform: 'translate(-50%)', zIndex: '9999' }}>
                
                <div style={{ display: 'flex', justifyContent: 'end', borderBottom: '2px solid #0f172b' }}>

                    <div style={{ cursor: 'grab', width: '100%', textAlign: 'end', padding: '0.1rem 0.5rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3H3v2h2zm14 4h2v6h-2V9H9v10h4v2H7V7zM7 3h2v2H7zM5 7H3v2h2zm-2 4h2v2H3zm2 4H3v2h2zm6-12h2v2h-2zm6 0h-2v2h2zm-2 14v-2h6v2h-2v2h-2v2h-2zm4 2v2h2v-2z"/></svg>
                    </div>

                    <button type="button" onClick={closeWindow} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.1rem 0.5rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                            <path fill="#0f172b" 
                            d="M5 5h2v2H5zm4 4H7V7h2zm2 2H9V9h2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2zm2-2v2h-2V9zm2-2v2h-2V7zm0 0V5h2v2z"/>
                        </svg>
                    </button>
                    
                </div>

                {children}


                {/* {connected && <Connection barColor="#4171eb" border="#0f172b"/>} */}

               {/* <div style={{ width: size?.width, height: size?.height, position: 'relative', padding: '1rem'}}>
                    {!measured && (
                        <div ref={contentRef} style={{ visibility: 'hidden', position: 'absolute' }}>
                            {children}
                        </div>
                    )}
                    {measured && connected && <Connection barColor="#4171eb" border="#0f172b"/>}
                    {measured && !connected && children}
                </div> */}

                
                
                
                  
            </div>
        
    );
}