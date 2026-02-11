
import ParticlesBackground from "./components/Background/Particles/ParticlesBackground";
import ShapesBackground from "./components/Background/Shapes/ShapesBackground";
import Button from "./components/Button/Button";
import Navbar from "./components/Navbar/Navbar";
import Select from "./components/Select/Select";
import Box from "./components/Box/Box";
import CardWrapper from "./components/Card/CardWrapper";
import Home from "./components/Home/Home";

function App() {



  return (
    <>
      <div style={{ 
        backgroundColor: "#94a9dd",  
        fontFamily: "vt323", 
        height: "100%",
      }}>

        
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
          backgroundColor="#000"
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

              <Box 
                content="Retro gaming UI is thought for nostalgic guys who love pixel art, retro games, vintage vibes, Y2K and 8-bit aesthetics."
                primaryColor="#0f172b"
                secondaryColor="#515969"
                backgroundColor="#fff"
              />

              {/* <CardWrapper/> */}
              

              <Button
                titleButton="► Click Me!"
                firstColor="#0f172b"
                secondColor="#F8FF2A"
                thirdColor="#e60076"
                backgroundColor="#F9A8D4"
              />

              <Select
                optionsList={["Option 1", "Option 2", "Option 3"]}
                borderColor="#e60076"
                bgColor = "#F8FF2A"
                fontColor = "#0f172b"
                optionColor = "#F8FF2A"
                placeholder = "Choose Something"
              />

            
        </main>
      </div>
    </>
  )
}

export default App;
