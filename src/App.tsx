
import ParticlesBackground from "./components/Background/Particles/ParticlesBackground";
import Button from "./components/Button/Button";
import Navbar from "./components/Navbar/Navbar";
import Select from "./components/Select/Select";
import Box from "./components/Box/Box";

function App() {



  return (
    <>
      <div style={{ 
        backgroundColor: "#94a9dd", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        height: "100vh", 
        width: "100vw", 
        fontFamily: "vt323", 
        overflow: "hidden", 
        gap: "2.5rem", 
        position: "relative" 
      }}>
      
        <ParticlesBackground 
          count={10} 
          colors={["#00ffff", "#e60076", "#F8FF2A"]}
          variant="pois"
          //backgroundColor="#000"
        />
      
        {/* <ShapesBackground 
          count={15}
          color="#F8FF2A"
          backgroundColor="#000"
          variant="star"
        /> */}
      
      

      

      <Navbar
        gridColor="#a2e7dcff"
        gap={6}
        fontSize={2}
        links={[
          { label: "Home", href: "#" },
          { label: "About", href: "#" },
          { label: "Contact", href: "#" },
        ]}
        textColor="#1188d8"
        //backgroundColor="#000"
      />
      
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

      <Box 
        content="Retro gaming UI is thought for nostalgic guys who love pixel art, retro games, vintage vibes, Y2K and 8-bit aesthetics."
        primaryColor="#0f172b"
        secondaryColor="#515969"
        backgroundColor="#fff"
      />

      </div>
    </>
  )
}

export default App;
