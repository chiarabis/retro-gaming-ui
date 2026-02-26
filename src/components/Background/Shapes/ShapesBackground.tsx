import { Star, Heart } from "./ShapesBackground.styles";
import { Container } from "../general.styles";

export type ShapesBackgroundProps = {
    count?: number;
    color?: string;
    backgroundColor?: string;
    variant?: "star" | "heart";
    overflow: string;
}


export default function ShapesBackground({ 
    count = 15,
    color = "#F8FF2A",
    backgroundColor,
    variant,
    overflow,
}: ShapesBackgroundProps) {

    const random = (min: number, max: number) => Math.random() * (max - min) + min;

    return (
        
        <Container backgroundColor={backgroundColor} overflow={overflow} position="absolute" height="100vh">
          {Array.from({ length: count }).map((_, index) => {
            const delay = -random(0, 5);
            const duration = random(6, 10);
            const scale = random(0.3, 1);
            const top = random(0, 100);
            
            const left = random(0, 100);

            return (
            variant === "star" ? (
              <Star
                key={index}
                top={top}
                left={left}
                delay={delay}
                duration={duration}
                color={color}
                scale={scale}
              />
            ) : variant==="heart" ? (
              <Heart
                key={index}
                top={top}
                left={left}
                delay={delay}
                duration={duration}
                color={color}
                scale={scale}
              />
            ) : null)
          })}
        </Container>
        
  );
}
