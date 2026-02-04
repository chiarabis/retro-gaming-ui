
import ParticlesBackground from "./components/Background/Particles/ParticlesBackground";
import Button from "./components/Button/Button";
import ElementBackground from "./components/Background/Shapes/ShapesBackground";
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
    <>
       
      <ParticlesBackground 
        count={10} 
        colors={["#00ffff", "#e60076", "#F8FF2A"]}
        variant="pois"
        backgroundColor="#000"
      />

      <ElementBackground
        variant="stars"
        color="#F8FF2A"
        count={15}
      />

      <Navbar
        gridColor="#a2e7dcff"
        gap={10}
        fontSize={16}
        links={[
          { label: "Home", href: "#" },
          { label: "About", href: "#" },
          { label: "Contact", href: "#" },
        ]}
        textColor="#1188d8ff"
      />
      
      <Button
        titleButton="► Click Me!"
        firstColor="#0f172b"
        secondColor="#F8FF2A"
        thirdColor="#e60076"
        backgroundColor="#F9A8D4"
      />
    </>
  )
}

export default App;
