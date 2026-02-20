import { useEffect, useState } from "react";
import CatError from "./CatError";


export default function CatWindow() {
  const [gif, setGif] = useState<string | null>(null);
  const [errorStatus, setErrorStatus] = useState<number | null>(null);

  useEffect(() => {
    const loadGif = async () => {
      try {
        const response = await fetch("https://cataas.com/cat/gif/says/Follow%20me%20on%20GitHub?position=center&font=Impact&fontSize=20&fontColor=%23fff&fontBackground=none");

        if (!response.ok) { 
          //throw new Error(`HTTP error! status: ${response.status}`);
          setErrorStatus(response.status);
          return
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setGif(url);

      } catch (error) {
        console.error(error);
        setErrorStatus(errorStatus);
      }
    };

    loadGif();
  }, []);



  const renderError = () => {
    switch (errorStatus) {
      case 404:
        return (
        <div style={{ display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: '1.25rem' }}>
              <img src="./catsad.gif" alt="cat" style={{width: '260px', height: 'auto'}}/>
                <img src="./alert.png" alt="error" style={{ width: '60px', height: '60px' }} />
                <h1 style={{ fontWeight: 'lighter', margin: 0 }} className="card-link glitch-anim">Error 404</h1>
                <span>Ups! Cat.exe not found ❌</span>
                <CatError/>
            </div>
        );
      case 500:
        return (
            <div style={{ display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: 'center',
            margin: '1rem',
            gap: '1.25rem',
             }}>
                <img src="./catworking.gif" alt="cat" style={{width: '260px', height: 'auto'}}/>
                <img src="./alert.png" alt="error" style={{ width: '60px', height: '60px' }} />
                <h1 style={{ fontWeight: 'lighter', margin: 0 }}>Error 500</h1>
                <span>Internal server error. Please try again later.<br/>Cat is fixing up 🛠️</span>
                <CatError/>
            </div>
        );
      default:
        return (
            <div style={{ display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: 'center',
            margin: '1rem',
            gap: '1.25rem'}}>
                <img src="./catloading1.gif" alt="cat" style={{width: '200px', height: 'auto'}} />
                <img src="./alert.png" alt="error" style={{ width: '60px', height: '60px' }} />
                
                <h1 style={{ fontWeight: 'lighter', margin: 0 }}>Undefined Error</h1>
                <span>I'm sorry, something went wrong. <br/>Go Back. 🔙</span>
                <CatError/>
            </div>
        );
    }
  };




  return (
    <>
        <div style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '1rem' }}>
            {gif ? 
              <>
                <img src={gif} alt="gif" style={{ borderRadius: '10px' }} />
                <a style={{ marginTop: '2rem', textDecoration: 'none', color: '#0f172b', cursor: 'pointer', fontSize: '1.25rem' }} className="card-link glitch-anim" data-text="View Repo onGitHub" href="https://github.com/chiarabis" target="_blank">
                View Repo on GitHub
                </a>
              </>
            : renderError()}
        </div>

        {/* <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1rem', marginTop: '1rem', borderTop: '2px solid #0f172b' }}>
            <a style={{ margin: 0, textDecoration: 'none', color: '#0f172b', cursor: 'pointer'}} className="card-link glitch-anim" data-text="GitHub" href="https://github.com/chiarabis" target="_blank">GitHub</a>
            <a href="" target="_blank" style={{ margin: 0, textDecoration: 'none', color: '#0f172b', cursor: 'pointer', }} className="card-link glitch-anim" data-text="Pokemon API">Contact</a>
        </div> */}
    </>
);
}
