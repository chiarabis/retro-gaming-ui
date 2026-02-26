
// import ParticlesBackground from "./components/Background/Particles/ParticlesBackground";
import ShapesBackground from "./components/Background/Shapes/ShapesBackground";
import Home from "./components/Home/Home";
import Loader from "./components/Loader/Loader";
import { useState, useEffect } from "react";
import { WindowManagerProvider } from "./context/WindowManagerContext";

function App() {

  /* simulazione loader caricamento pagina */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);


  /* checkbox per cambiare background */
  

  return (
    <>
        <div style={{ fontFamily: "vt323", height: "100%", minHeight: "100vh" }}>
          {loading ? (
            <Loader 
              border="#000"
              firstColor="#ce73a2" 
              secondColor="#f1b8d5"
              cloudColor="#ffffff"
              treeColor="#24832c"
            />

            ) : (

            <div style={{ height: "100%", minHeight: "100vh", background: "#96cce7" }}>
              <div className={`content`}>
                <ShapesBackground 
                  count={15}
                  color="#F8FF2A"
                  backgroundColor="transparent"
                  variant="star"
                  overflow="scroll"
                />

                {/* <div>
                  <label>Star
                    <input type="checkbox" onChange={toggleBg} />
                  </label>
                  
                  <label>Pois
                    <input type="checkbox" onChange={toggleBg} />
                  </label>

                  <label>Bubble
                    <input type="checkbox" onChange={toggleBg} />
                  </label>

                  <label>Heart
                    <input type="checkbox" onChange={toggleBg} />
                  </label>
                </div> */}
        
                <main style={{ 
                  zIndex: 1,  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center", 
                  justifyContent: "center",
                  height: "100vh",
                  width: "100%", 
                  gap: "2.5rem",
                  position: "relative",
                  overflowY: 'hidden'
                  }}>

                
  
                <WindowManagerProvider>
                  <Home/>
                </WindowManagerProvider>

              

                {/* <TypingText
                  title="Click me!"
                  firstColor="#3b65cfff"
                  cursorSize={10}
                  fontSize={24}
                />

                <Select
                  optionsList={["Option 1", "Option 2", "Option 3"]}
                  borderColor="#e60076"
                  bgColor = "#F8FF2A"
                  fontColor = "#0f172b"
                  optionColor = "#F8FF2A"
                  placeholder = "Choose Something"
                /> */}

                
                </main>
              </div>
            </div>
          )}
          </div>

        {/* )} */}
    </>
  )
}

export default App;
