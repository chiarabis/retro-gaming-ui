
// import ParticlesBackground from "./components/Background/Particles/ParticlesBackground";
import ShapesBackground from "./components/Background/Shapes/ShapesBackground";
import TypingText from "./components/Text/TypingText";
import Navbar from "./components/Navbar/Navbar";
import Select from "./components/Select/Select";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Loader from "./components/Loader/Loader";
import { useState, useEffect } from "react";

function App() {

/* simulazione loader caricamento pagina */
const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 5000);
  return () => clearTimeout(timer);
}, []);

  return (
    <>
      {loading ? (
        <div className={`loader-wrapper`}>
          <Loader 
            border="#000"
            firstColor="#ce73a2" 
            secondColor="#f1b8d5"
            cloudColor="#ffffff"
            treeColor="#24832c"
          />
        </div>

        ) : (

        <div style={{ 
          backgroundColor: "#94a9dd",  
          fontFamily: "vt323", 
          height: "100%",
          minHeight: "100vh",
          }}
          className={`content`}>
            
          {/* <ParticlesBackground 
            count={20} 
            colors={["#00ffff", "#e60076", "#F8FF2A"]}
            variant="pois"
            backgroundColor="transparent"
            overflow="scroll"
          />
          */}
          <ShapesBackground 
            count={15}
            color="#F8FF2A"
            backgroundColor="transparent"
            variant="star"
            overflow="scroll"
          />
      
      

      
            <main style={{ 
              zIndex: 1,  display: "flex", 
              flexDirection: "column", 
              alignItems: "center", 
              justifyContent: "center",
              height: "100%",
              width: "100%", 
              gap: "2.5rem",
              position: "relative",
              }}>

              <Navbar
                gridColor="#96cce7"
                gap={6}
                fontSize={2}
                links={[
                  { label: "Home", href: "#" },
                  { label: "About", href: "#" },
                  { label: "Contact", href: "#" },
                ]}
                textColor="#0f172b"
                backgroundColor="transparent"
              />
 
              <Home/>

              

              <TypingText
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
              />

              <Footer/>
            </main>
          </div>
        )}
    </>
  )
}

export default App;
