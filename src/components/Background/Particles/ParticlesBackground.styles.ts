import styled, {keyframes} from "styled-components";


const float = keyframes`
    0% {
        transform: translateY(1000px) rotate(0deg) scale(0);
        opacity: 0;
    }
    10% {
        opacity: 1;
        transform: translateY(900px) rotate(36deg) scale(1);
    }
    90% {
        opacity: 1;
        transform: translateY(-100px) rotate(324deg) scale(1);
    }
    100% {
        transform: translateY(-200px) rotate(360deg) scale(0);
        opacity: 0;
    }
`;


type ParticleAttrs = {
  left: number;
  delay: number;
  duration: number;
  color: string;
  variant?: "pois" | "bubble";
  size?: number;
};


//opacità minore per bubble
const getAlpha = (variant?: "pois" | "bubble") => variant === "bubble" ? 0.35 : 1;

// export const Container = styled.div<{ backgroundColor?: string}>`
//     position: absolute;
//     top:0;
//     left:0;
//     width: 100%;
//     height: 100vh;
//     overflow: hidden;
//     pointer-events: none;
//     background-color: ${({ backgroundColor }) => backgroundColor};
//     z-index: -1;
// `;


export const Particle = styled.div.attrs<ParticleAttrs>(
  ({ left, delay, duration }) => ({
    style: {
      left: `${left}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`
    },
  })
)`
  position: absolute;

  width: ${({ size, variant }) => variant === "bubble" ? `${size}px` : "4px"};
  height: ${({ size, variant }) => variant === "bubble" ? `${size}px` : "4px"};

  border-radius: 50%;

  background: ${({ color, variant }) =>
    `rgba(${parseInt(color.slice(1, 3), 16)},
          ${parseInt(color.slice(3, 5), 16)},
          ${parseInt(color.slice(5, 7), 16)},
          ${getAlpha(variant)})`};

  box-shadow: ${({ color, variant }) =>
    `0 0 8px rgba(${parseInt(color.slice(1, 3), 16)},
                 ${parseInt(color.slice(3, 5), 16)},
                 ${parseInt(color.slice(5, 7), 16)},
                 ${getAlpha(variant)})`};

  animation: ${float} linear infinite;
`;