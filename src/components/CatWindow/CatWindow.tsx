import { useEffect, useState } from "react";
import CatError from "./CatError";


//   name,
//   errorStatus,
// } : {
//   name: string;
//   errorStatus: number;

export default function CatWindow() {
  const [gif, setGif] = useState<string | null>(null);
  const [errorStatus, setErrorStatus] = useState<number | null>(null);


  //const {closeWindow} = useWindowManager();

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
                {/* <Button title="OK" onClick={() => closeWindow(name)}/> */}
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
                {/* <Button title="OK" onClick={() => closeWindow(name)}/> */}
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
                {/* <Button title="OK" onClick={() => closeWindow(name)}/> */}
                <CatError/>
            </div>
        );
    }
  };

  const [tag, setTag] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });


  return (
    <>
        <div style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '1rem' }}>

            {gif ? 
              <>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <a href="https://cataas.com/doc.html" target="_blank">
                    <img
                      src={gif}
                      alt="gif"
                      style={{ borderRadius: "10px" }}
                      onMouseEnter={() => setTag(true)}
                      onMouseLeave={() => setTag(true)}
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setPosition({
                          x: e.clientX - rect.left,
                          y: e.clientY - rect.top,
                        });
                      }}
                    />
                  </a>

                  {tag && (
                    <p
                      style={{
                        position: "absolute",
                        top: position.y,
                        left: position.x,
                        pointerEvents: "none",
                        transform: "translate(-50%, -120%)",
                        background: "#fff",
                        color: "#0f172b",
                        padding: "2px 4px",
                        fontSize: "0.85rem",
                      }}>Cat gif by CATAAS API</p>
                  )}
                </div>

                
                <a style={{ textDecoration: 'none', color: '#0f172b', cursor: 'pointer', fontSize: '1.25rem' }} className="card-link glitch-anim" data-text="View Repo onGitHub" href="https://github.com/chiarabis" target="_blank">
                View Repo on GitHub
                </a>
              
              </> : renderError()
            }
        </div>
    </>
);
}
