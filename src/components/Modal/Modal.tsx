import CardWrapper from "../Card/CardWrapper";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
//import "../Loader/style.css";
import CatWindow from "../CatWindow/CatWindow";
import { ImageLoop } from "../ImageLoop";
import Box from "../Box/Box";



type ModalItem = {
  name: string;
  content: React.ReactNode;
};






export const modals: ModalItem[] = [
    { 
        name: 'About', 
        content: (
            <>
                <div style={{margin: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
                    <ImageLoop/>

                    <div style={{ textAlign: 'justify', display: 'flex', flexDirection: 'column', gap: '0.2rem'}}>
                        <p style={{ margin: '0.75rem 0', textAlign: 'center'}}>Welcome!</p>
                        <p style={{ margin: 0, }}>I'm Chiara 👋 A web developer.</p>
                        <p style={{ margin: 0, }}>I love retro gaming aesthetic, pixel art, retro wave, Y2K vibes and 80-90's anime and manga.
                        So I created this template! 🎮</p>
                        <p style={{ margin: 0, }}>You can use it for your projects and customize it as you like.</p>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1rem', marginTop: '1rem', borderTop: '2px solid #0f172b' }}>
                    <a style={{ margin: 0, textDecoration: 'none', color: '#0f172b', cursor: 'pointer'}} className="card-link glitch-anim" data-text="GitHub" href="https://github.com/chiarabis" target="_blank">GitHub</a>
                    <a style={{ margin: 0, textDecoration: 'none', color: '#0f172b', cursor: 'pointer', }} className="card-link glitch-anim" data-text="Contact" href="mailto:chiarabis@gmail.com">Contact</a>
                </div>
            </>
        )
    },
  { 
    name: 'Pokemon cards', 
    content: (
        <>
            <div style={{margin: '1rem', height: 'fit-content', maxHeight: 'calc(100vh - 20rem)', overflow: 'auto'}}>
                
                <CardWrapper limit={1}/>
                
                {/* <Card 
                pokemon={{
                    id: 1, 
                    name: 'Bulbasaur', 
                    sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'}, 
                    types: [{type: {name: 'grass'}}, {type: {name: 'poison'}}], 
                    evolutions: [{name: 'Ivysaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}, {name: 'Venusaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'}], 
                    abilities: [{ability: {name: 'Overgrow'}}, {ability: {name: 'Chlorophyll'}}]
                }}
                selectedGender="male"/> */}
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
            <p>Free pixel icons</p>
            <p>You can copy and paste them directly into your code</p>

            <div>
                <img src="./pixel-icons.png" style={{ width: '100%' }} />
            </div>
        </div>
    )
  },
  { 
    name: 'Contact', 
    content: ( 
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '1rem', gap: '1rem', position: 'relative'}}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%'}}>
                <p style={{ textAlign: 'start'}}>Get in touch!</p>
                {/* <p style={{ margin: 0, textAlign: 'justify'}}>GitHub:</p> */}
                <textarea style={{ border: '2px solid #0f172b', width: '100%', height: '120px', padding: '0.25rem' }} placeholder="Your message..." />
                <Box>Send</Box>
            </div>

            <div style={{ position: 'absolute', bottom: '25%', right: '1rem' }}>
                <div style={{position: 'absolute', bottom: '50%', right: '0', transition: 'transform 0.2s', animation: 'bounce 1s infinite ease-in-out' }}>
                    <img src="./ghost.png" style={{ width: '40px' }} />
                </div>
                <div style={{ position: 'absolute', bottom: '18px', right: 0, animation: 'beat 1s infinite ease-in-out' }}>
                    <img src="./cuoricino.png" style={{ width: '40px' }} />
                </div>
            </div>
            
        </div>
    )
  },
  {
    name: 'GitHub',
    content: (
        <CatWindow/>
    )
  },
  {
    name: 'Inspiration',
    content: (
        <div style={{ margin: '1rem', width: "380px", display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <div>These are some libraries that inspired this project:</div>
            <ul style={{display: 'flex', gap: '0.3rem', flexDirection: 'column', alignItems: 'flex-start', margin: 0, padding: 0, listStylePosition: 'inside', color: '#0f172b',
                fontFamily: "VT323" }}>      
                <li style={{ textDecoration: 'none', margin: '0 0.5rem', background: 'none', border: 'none' }}>
                    React 95
                </li>
                <li style={{ textDecoration: 'none', margin: '0 0.5rem', background: 'none', border: 'none' }}>
                    Magic UI
                </li>
            </ul>
        </div>
    )
  },
  {
    name: 'Credits',
    content: (
        <div style={{ margin: '1rem', width: "380px"}}>
            <div>Cat GIF on Cataas API</div>
            <div>Pokemon Card data on Pokemon API</div>

        </div>
    )
  }
];


export default function Modal({
    closeWindow,
    children,
    modalName
}: {
    closeWindow: () => void;
    children?: React.ReactNode;
    modalName?: string;
}) {




    return (
            <div style={{ backgroundColor: '#fffdfd', width: 'auto', minWidth: '400px', height: 'fit-content', position: 'absolute',
                left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: '9999' }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #0f172b' }}>

                    
                    <h2 style={{ margin: '0.5rem 1rem', fontWeight: 'normal', textAlign: 'center'}}>{modalName}</h2>
                     

                    <div style={{ alignItems: 'center', display: 'flex'}}>
                        <div style={{ cursor: 'grab', padding: '0.1rem 0.5rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3H3v2h2zm14 4h2v6h-2V9H9v10h4v2H7V7zM7 3h2v2H7zM5 7H3v2h2zm-2 4h2v2H3zm2 4H3v2h2zm6-12h2v2h-2zm6 0h-2v2h2zm-2 14v-2h6v2h-2v2h-2v2h-2zm4 2v2h2v-2z"/></svg>
                        </div>

                        <button type="button" onClick={closeWindow} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.1rem 0.5rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                <path fill="#0f172b" 
                                d="M5 5h2v2H5zm4 4H7V7h2zm2 2H9V9h2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2zm2-2v2h-2V9zm2-2v2h-2V7zm0 0V5h2v2z"/>
                            </svg>
                        </button>
                    </div>
                    
                </div>

                {children}
                  
            </div>
        
    );
}