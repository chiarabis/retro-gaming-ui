import { Star, Mascotte, Item1, Wrapper } from "./ShapesBackground.styles";
import { Container } from "../general.styles";

export type ShapesBackgroundProps = {
    count?: number;
    color?: string;
    border?: string;
    backgroundColor?: string;
    variant: "stars" | "mascotte";
    firstColorItem?: string;
    secondColorItem?: string;
    thirdColorItem?: string;
    showItem?: boolean;
}


export default function ShapesBackground({ 
    count = 15,
    color = "#F8FF2A",
    border = "#000",
    backgroundColor,
    variant = "stars",
    firstColorItem = "#fff",
    secondColorItem = "#28643a",
    thirdColorItem = "#5d9741",
    showItem = false,
}: ShapesBackgroundProps) {
    const MASCOTTE_HEIGHT = 76;
    const MAX_COUNT = 20; // massimo per le mascotte

    const random = (min: number, max: number) => Math.random() * (max - min) + min;
  
    // Applica il massimo solo se la variante è mascotte
    const actualCount = variant === "mascotte" ? Math.min(count, MAX_COUNT) : count;

    return (
        <>
        <Container backgroundColor={backgroundColor}>
          {Array.from({ length: actualCount }).map((_, index) => {
            const delay = -random(0, 5);
            const duration = random(6, 10);
            const scale = variant === "stars" ? random(0.3, 1) : random(0.5, 1);
            const top = variant === "stars" ? random(0, 100) : 100 - (MASCOTTE_HEIGHT * scale / window.innerHeight * 100) - 2;
            
            const left = random(0, 100);



            
            return (
            variant === "stars" ? (
              <Star
                key={index}
                top={top}
                left={left}
                delay={delay}
                duration={duration}
                color={color}
                scale={scale}
              />
            ) : (
              <Wrapper
                key={`wrapper-${index}`}
                top={top}
                left={left}
                scale={scale}
                delay={delay}
                duration={duration}
              >
                <Mascotte
                  color={color}
                  border={border}
                />
                {showItem && (
                  <Item1
                    firstColorItem={firstColorItem}
                    secondColorItem={secondColorItem}
                    thirdColorItem={thirdColorItem}
                    borderItem={border}
                  />
                )}
              </Wrapper>
            ))
          })}
        </Container>
        </>
  );
}
