
// import ParticlesBackground from "./components/Background/Particles/ParticlesBackground";
import ShapesBackground from "./components/Background/Shapes/ShapesBackground";
import Home from "./components/Home/Home";
import Loader from "./components/Loader/Loader";
import { useState, useEffect } from "react";
import PixelTrail from "./components/CursorTrail/PixelTrail";
import Backgrounds from "./components/Background/Backgrounds";
import ParticlesBackground from "./components/Background/Particles/ParticlesBackground";

function App() {

  /* simulazione loader caricamento pagina */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);


  const [background, setBackground] = useState<string | null>(null);

  const renderBackground = () => {
    switch (background) {
      case "Stars":
        return <ShapesBackground 
          count={15}
          color="#F8FF2A"
          backgroundColor="transparent"
          variant="star"
          overflow="hidden" />;
      case "Hearts":
        return <ShapesBackground
          count={15}
          color="#F8FF2A"
          backgroundColor="transparent"
          variant="heart"
          overflow="hidden" />;
      case "Bubbles":
        return <ParticlesBackground
          count={15}
          colors={["#00ffff", "#e60076", "#F8FF2A"]}
          backgroundColor="transparent"
          variant="bubble"
          overflow="hidden" />;
      case "Pois":
        return <ParticlesBackground
          count={15}
          colors={["#00ffff", "#e60076", "#F8FF2A"]}
          backgroundColor="transparent"
          variant="pois"
          overflow="hidden" />;
      default:
        return null;
    }
  };
  

  return (
    <>
        <div style={{ fontFamily: "vt323", height: "100%", minHeight: "100vh" }}>
          <PixelTrail />
          {loading ? (
            <Loader 
              border="#000"
              firstColor="#ce73a2" 
              secondColor="#f1b8d5"
              cloudColor="#ffffff"
              treeColor="#24832c"
            />

            ) : (

            <div style={{ height: "100%", minHeight: "100vh", background: "#96cce7",}}>
              <div className={`content`}>
                {/* <ShapesBackground 
                  count={15}
                  color="#F8FF2A"
                  backgroundColor="transparent"
                  variant="star"
                  overflow="scroll"
                /> */}
                {/* <ParticlesBackground
                  count={15}
                  colors={["#00ffff", "#e60076", "#F8FF2A"]}
                  backgroundColor="transparent"
                  variant="bubble"
                  overflow="scroll"
                /> */}

                <Backgrounds onChange={setBackground}/>
                {renderBackground()}
        
                <main style={{ 
                  zIndex: 1,
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center", 
                  justifyContent: "center",
                  height: "100vh",
                  width: "100%", 
                  gap: "2.5rem",
                  position: "relative",
                  overflowY: 'hidden'
                  }}>

  
                
                  <Home/>

                
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
