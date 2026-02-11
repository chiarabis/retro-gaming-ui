import { Particle } from "./ParticlesBackground.styles";
import { Container } from "../general.styles";

export type ParticlesBackgroundProps = {
    count?: number;
    color1?: string;
    color2?: string;
    color3?: string;
    colors?: string[];
    backgroundColor?: string;
    variant?: "pois" | "bubble";
    overflow: string;
}


export default function ParticlesBackground({ 
    count = 15,
    colors = ["#00ffff", "#e60076", "#F8FF2A"],
    backgroundColor = "transparent",
    variant,
    overflow,
}: ParticlesBackgroundProps) {
    const random = (min: number, max: number) => Math.random() * (max - min) + min;
    const bubbleSizes = [12, 18, 24, 30, 36];

    return (
    <Container backgroundColor={backgroundColor} overflow={overflow}>
      {Array.from({ length: count }).map((_, index) => {
        const left = (index / count) * 100;
        const delay = -random(0, 5);
        const duration = random(6, 10);
        const color = colors[Math.floor(Math.random() * colors.length)];
        //const size = variant === "bubble" ? Math.floor(random(12, 26, 32)) : 4;
        const size = variant === "bubble"
            ? bubbleSizes[Math.floor(Math.random() * bubbleSizes.length)]
            : 4;

        return (
          <Particle
            key={index}
            left={left}
            delay={delay}
            duration={duration}
            color={color}
            variant={variant}
            size={size}
          />
        );
      })}
    </Container>
  );
}