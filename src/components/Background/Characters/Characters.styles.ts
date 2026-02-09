import styled, {keyframes} from "styled-components";




const move = keyframes`
  0% {
    transform: translateX(40px) translateY(0);
  }
  25% {
    transform: translateX(0) translateY(0);
  }
  40% {
    transform: translateX(60px) translateY(0);
  }
  45% {
    transform: translateX(60px) translateY(-20px);
  }
  50% {
    transform: translateX(60px) translateY(0);
  }
  75% {
    transform: translateX(80px) translateY(0);
  }
  100% {
    transform: translateX(40px) translateY(0);
  }
`;


//wrapper per personaggio + item
type WrapperAttrs = {
  top: number;
  left: number;
  scale: number;
  delay: number;
  duration: number; 
};

export const Wrapper = styled.div.attrs<WrapperAttrs>(
  ({ top, left, scale, delay, duration }) => ({
    style: {
      top: `${top}%`,
      left: `${left}%`,
      scale: scale,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
    },
  })
)`
  position: absolute;
  top: 0;
  animation: ${move} ease-in-out infinite;
`;



//personaggi
type CharactersAttrs = {
  color: string;
  border: string;
  variant: "ghost" | "kawaii" | "onion";
};

export const Ghost = styled.div<CharactersAttrs>`
    position: relative;
    height: 4px;
    width: 4px;

    image-rendering: pixelated;
    image-rendering: crisp-edges;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    will-change: transform;

    pointer-events: none;

    box-shadow: 24px 4px 0 0 ${({border}) => border}, 28px 4px 0 0 ${({border}) => border}, 32px 4px 0 0 ${({border}) => border}, 36px 4px 0 0 ${({border}) => border}, 
    40px 4px 0 0 ${({border}) => border}, 44px 4px 0 0 ${({border}) => border}, 48px 4px 0 0 ${({border}) => border}, 52px 4px 0 0 ${({border}) => border}, 
    56px 4px 0 0 ${({border}) => border}, 60px 4px 0 0 ${({border}) => border}, 16px 8px 0 0 ${({border}) => border}, 20px 8px 0 0 ${({border}) => border}, 
    24px 8px 0 0 ${({color}) => color}, 28px 8px 0 0 ${({color}) => color}, 32px 8px 0 0 ${({color}) => color}, 36px 8px 0 0 ${({color}) => color}, 
    40px 8px 0 0 ${({color}) => color}, 44px 8px 0 0 ${({color}) => color}, 48px 8px 0 0 ${({color}) => color}, 52px 8px 0 0 ${({color}) => color}, 
    56px 8px 0 0 ${({color}) => color}, 60px 8px 0 0 ${({color}) => color}, 64px 8px 0 0 ${({border}) => border}, 68px 8px 0 0 ${({border}) => border}, 
    12px 12px 0 0 ${({border}) => border}, 16px 12px 0 0 ${({color}) => color}, 20px 12px 0 0 ${({color}) => color}, 24px 12px 0 0 ${({color}) => color}, 
    28px 12px 0 0 ${({color}) => color}, 32px 12px 0 0 ${({color}) => color}, 36px 12px 0 0 ${({color}) => color}, 40px 12px 0 0 ${({color}) => color}, 
    44px 12px 0 0 ${({color}) => color}, 48px 12px 0 0 ${({color}) => color}, 52px 12px 0 0 ${({color}) => color}, 56px 12px 0 0 ${({color}) => color}, 
    60px 12px 0 0 ${({color}) => color}, 64px 12px 0 0 ${({color}) => color}, 68px 12px 0 0 ${({color}) => color}, 72px 12px 0 0 ${({border}) => border}, 
    8px 16px 0 0 ${({border}) => border}, 12px 16px 0 0 ${({color}) => color}, 16px 16px 0 0 ${({color}) => color}, 20px 16px 0 0 ${({color}) => color}, 
    24px 16px 0 0 ${({color}) => color}, 28px 16px 0 0 ${({color}) => color}, 32px 16px 0 0 ${({color}) => color}, 36px 16px 0 0 ${({color}) => color}, 
    40px 16px 0 0 ${({color}) => color}, 44px 16px 0 0 ${({color}) => color}, 48px 16px 0 0 ${({color}) => color}, 52px 16px 0 0 ${({color}) => color}, 
    56px 16px 0 0 ${({color}) => color}, 60px 16px 0 0 ${({color}) => color}, 64px 16px 0 0 ${({color}) => color}, 68px 16px 0 0 ${({color}) => color}, 
    72px 16px 0 0 ${({color}) => color}, 76px 16px 0 0 ${({border}) => border}, 8px 20px 0 0 ${({border}) => border}, 12px 20px 0 0 ${({color}) => color}, 
    16px 20px 0 0 ${({color}) => color}, 20px 20px 0 0 ${({color}) => color}, 24px 20px 0 0 ${({color}) => color}, 28px 20px 0 0 ${({color}) => color}, 
    32px 20px 0 0 ${({color}) => color}, 36px 20px 0 0 ${({color}) => color}, 40px 20px 0 0 ${({color}) => color}, 44px 20px 0 0 ${({color}) => color}, 
    48px 20px 0 0 ${({color}) => color}, 52px 20px 0 0 ${({color}) => color}, 56px 20px 0 0 ${({color}) => color}, 60px 20px 0 0 ${({color}) => color}, 
    64px 20px 0 0 ${({color}) => color}, 68px 20px 0 0 ${({color}) => color}, 72px 20px 0 0 ${({color}) => color}, 76px 20px 0 0 ${({border}) => border}, 
    8px 24px 0 0 ${({border}) => border}, 12px 24px 0 0 ${({color}) => color}, 16px 24px 0 0 ${({color}) => color}, 20px 24px 0 0 ${({color}) => color}, 
    24px 24px 0 0 ${({color}) => color}, 28px 24px 0 0 ${({border}) => border}, 32px 24px 0 0 ${({border}) => border}, 36px 24px 0 0 ${({color}) => color}, 
    40px 24px 0 0 ${({color}) => color}, 44px 24px 0 0 ${({color}) => color}, 48px 24px 0 0 ${({color}) => color}, 52px 24px 0 0 ${({border}) => border}, 
    56px 24px 0 0 ${({border}) => border}, 60px 24px 0 0 ${({color}) => color}, 64px 24px 0 0 ${({color}) => color}, 68px 24px 0 0 ${({color}) => color}, 
    72px 24px 0 0 ${({color}) => color}, 76px 24px 0 0 ${({border}) => border}, 8px 28px 0 0 ${({border}) => border}, 12px 28px 0 0 ${({color}) => color}, 
    16px 28px 0 0 ${({color}) => color}, 20px 28px 0 0 ${({color}) => color}, 24px 28px 0 0 ${({border}) => border}, 28px 28px 0 0 ${({color}) => color}, 
    32px 28px 0 0 ${({color}) => color}, 36px 28px 0 0 ${({border}) => border}, 40px 28px 0 0 ${({color}) => color}, 44px 28px 0 0 ${({color}) => color}, 
    48px 28px 0 0 ${({border}) => border}, 52px 28px 0 0 ${({color}) => color}, 56px 28px 0 0 ${({color}) => color}, 60px 28px 0 0 ${({border}) => border}, 
    64px 28px 0 0 ${({color}) => color}, 68px 28px 0 0 ${({color}) => color}, 72px 28px 0 0 ${({color}) => color}, 76px 28px 0 0 ${({border}) => border}, 
    8px 32px 0 0 ${({border}) => border}, 12px 32px 0 0 ${({color}) => color}, 16px 32px 0 0 ${({color}) => color}, 20px 32px 0 0 ${({color}) => color}, 
    24px 32px 0 0 ${({color}) => color}, 28px 32px 0 0 ${({color}) => color}, 32px 32px 0 0 ${({color}) => color}, 36px 32px 0 0 ${({color}) => color}, 
    40px 32px 0 0 ${({color}) => color}, 44px 32px 0 0 ${({color}) => color}, 48px 32px 0 0 ${({color}) => color}, 52px 32px 0 0 ${({color}) => color}, 
    56px 32px 0 0 ${({color}) => color}, 60px 32px 0 0 ${({color}) => color}, 64px 32px 0 0 ${({color}) => color}, 68px 32px 0 0 ${({color}) => color}, 
    72px 32px 0 0 ${({color}) => color}, 76px 32px 0 0 ${({border}) => border}, 8px 36px 0 0 ${({border}) => border}, 12px 36px 0 0 ${({color}) => color}, 
    16px 36px 0 0 ${({color}) => color}, 20px 36px 0 0 rgba(244,169,176,1), 24px 36px 0 0 rgba(244,169,176,1), 28px 36px 0 0 ${({color}) => color}, 
    32px 36px 0 0 ${({color}) => color}, 36px 36px 0 0 ${({color}) => color}, 40px 36px 0 0 ${({color}) => color}, 44px 36px 0 0 ${({color}) => color}, 
    48px 36px 0 0 ${({color}) => color}, 52px 36px 0 0 ${({color}) => color}, 56px 36px 0 0 ${({color}) => color}, 60px 36px 0 0 rgba(244,169,176,1), 
    64px 36px 0 0 rgba(244,169,176,1), 68px 36px 0 0 ${({color}) => color}, 72px 36px 0 0 ${({color}) => color}, 76px 36px 0 0 ${({border}) => border}, 
    8px 40px 0 0 ${({border}) => border}, 12px 40px 0 0 ${({color}) => color}, 16px 40px 0 0 ${({color}) => color}, 20px 40px 0 0 ${({color}) => color}, 
    24px 40px 0 0 ${({color}) => color}, 28px 40px 0 0 ${({color}) => color}, 32px 40px 0 0 ${({color}) => color}, 36px 40px 0 0 ${({color}) => color}, 
    40px 40px 0 0 ${({color}) => color}, 44px 40px 0 0 ${({color}) => color}, 48px 40px 0 0 ${({color}) => color}, 52px 40px 0 0 ${({color}) => color}, 
    56px 40px 0 0 ${({color}) => color}, 60px 40px 0 0 ${({color}) => color}, 64px 40px 0 0 ${({color}) => color}, 68px 40px 0 0 ${({color}) => color}, 
    72px 40px 0 0 ${({color}) => color}, 76px 40px 0 0 ${({border}) => border}, 8px 44px 0 0 ${({border}) => border}, 12px 44px 0 0 ${({color}) => color}, 
    16px 44px 0 0 ${({color}) => color}, 20px 44px 0 0 ${({color}) => color}, 24px 44px 0 0 ${({color}) => color}, 28px 44px 0 0 ${({color}) => color}, 
    32px 44px 0 0 ${({color}) => color}, 36px 44px 0 0 ${({color}) => color}, 40px 44px 0 0 ${({color}) => color}, 44px 44px 0 0 ${({color}) => color}, 
    48px 44px 0 0 ${({color}) => color}, 52px 44px 0 0 ${({color}) => color}, 56px 44px 0 0 ${({color}) => color}, 60px 44px 0 0 ${({color}) => color}, 
    64px 44px 0 0 ${({color}) => color}, 68px 44px 0 0 ${({color}) => color}, 72px 44px 0 0 ${({color}) => color}, 76px 44px 0 0 ${({border}) => border}, 
    8px 48px 0 0 ${({border}) => border}, 12px 48px 0 0 ${({color}) => color}, 16px 48px 0 0 ${({color}) => color}, 20px 48px 0 0 ${({color}) => color}, 
    24px 48px 0 0 ${({color}) => color}, 28px 48px 0 0 ${({color}) => color}, 32px 48px 0 0 ${({color}) => color}, 36px 48px 0 0 ${({color}) => color}, 
    40px 48px 0 0 ${({color}) => color}, 44px 48px 0 0 ${({color}) => color}, 48px 48px 0 0 ${({color}) => color}, 52px 48px 0 0 ${({color}) => color}, 
    56px 48px 0 0 ${({color}) => color}, 60px 48px 0 0 ${({color}) => color}, 64px 48px 0 0 ${({color}) => color}, 68px 48px 0 0 ${({color}) => color}, 
    72px 48px 0 0 ${({color}) => color}, 76px 48px 0 0 ${({border}) => border}, 8px 52px 0 0 ${({border}) => border}, 12px 52px 0 0 ${({color}) => color}, 
    16px 52px 0 0 ${({color}) => color}, 20px 52px 0 0 ${({color}) => color}, 24px 52px 0 0 ${({color}) => color}, 28px 52px 0 0 ${({color}) => color}, 
    32px 52px 0 0 ${({color}) => color}, 36px 52px 0 0 ${({color}) => color}, 40px 52px 0 0 ${({color}) => color}, 44px 52px 0 0 ${({color}) => color}, 
    48px 52px 0 0 ${({color}) => color}, 52px 52px 0 0 ${({color}) => color}, 56px 52px 0 0 ${({color}) => color}, 60px 52px 0 0 ${({color}) => color}, 
    64px 52px 0 0 ${({color}) => color}, 68px 52px 0 0 ${({color}) => color}, 72px 52px 0 0 ${({color}) => color}, 76px 52px 0 0 ${({border}) => border}, 
    8px 56px 0 0 ${({border}) => border}, 12px 56px 0 0 ${({color}) => color}, 16px 56px 0 0 ${({color}) => color}, 20px 56px 0 0 ${({color}) => color}, 
    24px 56px 0 0 ${({color}) => color}, 28px 56px 0 0 ${({color}) => color}, 32px 56px 0 0 ${({color}) => color}, 36px 56px 0 0 ${({color}) => color}, 
    40px 56px 0 0 ${({color}) => color}, 44px 56px 0 0 ${({color}) => color}, 48px 56px 0 0 ${({color}) => color}, 52px 56px 0 0 ${({color}) => color}, 
    56px 56px 0 0 ${({color}) => color}, 60px 56px 0 0 ${({color}) => color}, 64px 56px 0 0 ${({color}) => color}, 68px 56px 0 0 ${({color}) => color}, 
    72px 56px 0 0 ${({color}) => color}, 76px 56px 0 0 ${({border}) => border}, 8px 60px 0 0 ${({border}) => border}, 12px 60px 0 0 ${({color}) => color}, 
    16px 60px 0 0 ${({color}) => color}, 20px 60px 0 0 ${({color}) => color}, 24px 60px 0 0 ${({color}) => color}, 28px 60px 0 0 ${({color}) => color}, 
    32px 60px 0 0 ${({color}) => color}, 36px 60px 0 0 ${({color}) => color}, 40px 60px 0 0 ${({color}) => color}, 44px 60px 0 0 ${({color}) => color}, 
    48px 60px 0 0 ${({color}) => color}, 52px 60px 0 0 ${({color}) => color}, 56px 60px 0 0 ${({color}) => color}, 60px 60px 0 0 ${({color}) => color}, 
    64px 60px 0 0 ${({color}) => color}, 68px 60px 0 0 ${({color}) => color}, 72px 60px 0 0 ${({color}) => color}, 76px 60px 0 0 ${({border}) => border}, 
    8px 64px 0 0 ${({border}) => border}, 12px 64px 0 0 ${({color}) => color}, 16px 64px 0 0 ${({color}) => color}, 20px 64px 0 0 ${({color}) => color}, 
    24px 64px 0 0 ${({color}) => color}, 28px 64px 0 0 ${({color}) => color}, 32px 64px 0 0 ${({color}) => color}, 36px 64px 0 0 ${({color}) => color}, 
    40px 64px 0 0 ${({color}) => color}, 44px 64px 0 0 ${({color}) => color}, 48px 64px 0 0 ${({color}) => color}, 52px 64px 0 0 ${({color}) => color}, 
    56px 64px 0 0 ${({color}) => color}, 60px 64px 0 0 ${({color}) => color}, 64px 64px 0 0 ${({color}) => color}, 68px 64px 0 0 ${({color}) => color}, 
    72px 64px 0 0 ${({color}) => color}, 76px 64px 0 0 ${({border}) => border}, 8px 68px 0 0 ${({border}) => border}, 12px 68px 0 0 ${({color}) => color}, 
    16px 68px 0 0 ${({color}) => color}, 20px 68px 0 0 ${({color}) => color}, 24px 68px 0 0 ${({color}) => color}, 28px 68px 0 0 ${({border}) => border}, 
    32px 68px 0 0 ${({border}) => border}, 36px 68px 0 0 ${({color}) => color}, 40px 68px 0 0 ${({color}) => color}, 44px 68px 0 0 ${({color}) => color}, 
    48px 68px 0 0 ${({color}) => color}, 52px 68px 0 0 ${({border}) => border}, 56px 68px 0 0 ${({border}) => border}, 60px 68px 0 0 ${({color}) => color}, 
    64px 68px 0 0 ${({color}) => color}, 68px 68px 0 0 ${({color}) => color}, 72px 68px 0 0 ${({color}) => color}, 76px 68px 0 0 ${({border}) => border}, 
    8px 72px 0 0 ${({border}) => border}, 12px 72px 0 0 ${({color}) => color}, 16px 72px 0 0 ${({color}) => color}, 20px 72px 0 0 ${({color}) => color}, 
    24px 72px 0 0 ${({border}) => border}, 36px 72px 0 0 ${({border}) => border}, 40px 72px 0 0 ${({color}) => color}, 44px 72px 0 0 ${({color}) => color}, 
    48px 72px 0 0 ${({border}) => border}, 60px 72px 0 0 ${({border}) => border}, 64px 72px 0 0 ${({color}) => color}, 68px 72px 0 0 ${({color}) => color}, 
    72px 72px 0 0 ${({color}) => color}, 76px 72px 0 0 ${({border}) => border}, 12px 76px 0 0 ${({border}) => border}, 16px 76px 0 0 ${({border}) => border}, 
    20px 76px 0 0 ${({border}) => border}, 36px 76px 0 0 ${({border}) => border}, 40px 76px 0 0 ${({border}) => border}, 44px 76px 0 0 ${({border}) => border}, 
    48px 76px 0 0 ${({border}) => border}, 64px 76px 0 0 ${({border}) => border}, 68px 76px 0 0 ${({border}) => border}, 72px 76px 0 0 ${({border}) => border};

`;

export const Kawaii = styled.div<CharactersAttrs>`
    position: relative;
    height: 4px;
    width: 4px;

    image-rendering: pixelated;
    image-rendering: crisp-edges;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    will-change: transform;

    pointer-events: none;

    box-shadow: 24px 12px 0 0 ${({border}) => border}, 28px 12px 0 0 ${({border}) => border}, 60px 12px 0 0 ${({border}) => border}, 64px 12px 0 0 ${({border}) => border}, 
    20px 16px 0 0 ${({border}) => border}, 24px 16px 0 0 ${({color}) => color}, 28px 16px 0 0 ${({color}) => color}, 32px 16px 0 0 ${({border}) => border}, 
    56px 16px 0 0 ${({border}) => border}, 60px 16px 0 0 ${({color}) => color}, 64px 16px 0 0 ${({color}) => color}, 68px 16px 0 0 ${({border}) => border}, 
    16px 20px 0 0 ${({border}) => border}, 20px 20px 0 0 ${({color}) => color}, 24px 20px 0 0 ${({color}) => color}, 28px 20px 0 0 ${({color}) => color}, 
    32px 20px 0 0 ${({color}) => color}, 36px 20px 0 0 ${({border}) => border}, 52px 20px 0 0 ${({border}) => border}, 56px 20px 0 0 ${({color}) => color}, 
    60px 20px 0 0 ${({color}) => color}, 64px 20px 0 0 ${({color}) => color}, 68px 20px 0 0 ${({color}) => color}, 72px 20px 0 0 ${({border}) => border}, 
    16px 24px 0 0 ${({border}) => border}, 20px 24px 0 0 ${({color}) => color}, 24px 24px 0 0 ${({color}) => color}, 28px 24px 0 0 ${({color}) => color}, 
    32px 24px 0 0 ${({color}) => color}, 36px 24px 0 0 ${({border}) => border}, 52px 24px 0 0 ${({border}) => border}, 56px 24px 0 0 ${({color}) => color}, 
    60px 24px 0 0 ${({color}) => color}, 64px 24px 0 0 ${({color}) => color}, 68px 24px 0 0 ${({color}) => color}, 72px 24px 0 0 ${({border}) => border}, 
    16px 28px 0 0 ${({border}) => border}, 20px 28px 0 0 ${({color}) => color}, 24px 28px 0 0 ${({color}) => color}, 28px 28px 0 0 ${({color}) => color}, 
    32px 28px 0 0 ${({color}) => color}, 36px 28px 0 0 ${({border}) => border}, 40px 28px 0 0 ${({border}) => border}, 44px 28px 0 0 ${({border}) => border}, 
    48px 28px 0 0 ${({border}) => border}, 52px 28px 0 0 ${({border}) => border}, 56px 28px 0 0 ${({color}) => color}, 60px 28px 0 0 ${({color}) => color}, 
    64px 28px 0 0 ${({color}) => color}, 68px 28px 0 0 ${({color}) => color}, 72px 28px 0 0 ${({border}) => border}, 12px 32px 0 0 ${({border}) => border}, 
    16px 32px 0 0 ${({color}) => color}, 20px 32px 0 0 ${({color}) => color}, 24px 32px 0 0 ${({color}) => color}, 28px 32px 0 0 ${({color}) => color}, 
    32px 32px 0 0 ${({color}) => color}, 36px 32px 0 0 ${({color}) => color}, 40px 32px 0 0 ${({color}) => color}, 44px 32px 0 0 ${({color}) => color}, 
    48px 32px 0 0 ${({color}) => color}, 52px 32px 0 0 ${({color}) => color}, 56px 32px 0 0 ${({color}) => color}, 60px 32px 0 0 ${({color}) => color}, 
    64px 32px 0 0 ${({color}) => color}, 68px 32px 0 0 ${({color}) => color}, 72px 32px 0 0 ${({color}) => color}, 76px 32px 0 0 ${({border}) => border}, 
    8px 36px 0 0 ${({border}) => border}, 12px 36px 0 0 ${({color}) => color}, 16px 36px 0 0 ${({color}) => color}, 20px 36px 0 0 ${({color}) => color}, 
    24px 36px 0 0 ${({color}) => color}, 28px 36px 0 0 ${({color}) => color}, 32px 36px 0 0 ${({color}) => color}, 36px 36px 0 0 ${({color}) => color}, 
    40px 36px 0 0 ${({color}) => color}, 44px 36px 0 0 ${({color}) => color}, 48px 36px 0 0 ${({color}) => color}, 52px 36px 0 0 ${({color}) => color}, 
    56px 36px 0 0 ${({color}) => color}, 60px 36px 0 0 ${({color}) => color}, 64px 36px 0 0 ${({color}) => color}, 68px 36px 0 0 ${({color}) => color}, 
    72px 36px 0 0 ${({color}) => color}, 76px 36px 0 0 ${({color}) => color}, 80px 36px 0 0 ${({border}) => border}, 8px 40px 0 0 ${({border}) => border}, 
    12px 40px 0 0 ${({color}) => color}, 16px 40px 0 0 ${({color}) => color}, 20px 40px 0 0 ${({color}) => color}, 24px 40px 0 0 ${({color}) => color}, 
    28px 40px 0 0 ${({color}) => color}, 32px 40px 0 0 ${({color}) => color}, 36px 40px 0 0 ${({color}) => color}, 40px 40px 0 0 ${({color}) => color}, 
    44px 40px 0 0 ${({color}) => color}, 48px 40px 0 0 ${({color}) => color}, 52px 40px 0 0 ${({color}) => color}, 56px 40px 0 0 ${({color}) => color}, 
    60px 40px 0 0 ${({color}) => color}, 64px 40px 0 0 ${({color}) => color}, 68px 40px 0 0 ${({color}) => color}, 72px 40px 0 0 ${({color}) => color}, 
    76px 40px 0 0 ${({color}) => color}, 80px 40px 0 0 ${({border}) => border}, 8px 44px 0 0 ${({border}) => border}, 12px 44px 0 0 ${({color}) => color}, 
    16px 44px 0 0 ${({color}) => color}, 20px 44px 0 0 ${({color}) => color}, 24px 44px 0 0 ${({color}) => color}, 28px 44px 0 0 ${({border}) => border}, 
    32px 44px 0 0 ${({border}) => border}, 36px 44px 0 0 ${({color}) => color}, 40px 44px 0 0 ${({color}) => color}, 44px 44px 0 0 ${({color}) => color}, 
    48px 44px 0 0 ${({color}) => color}, 52px 44px 0 0 ${({color}) => color}, 56px 44px 0 0 ${({border}) => border}, 60px 44px 0 0 ${({border}) => border}, 
    64px 44px 0 0 ${({color}) => color}, 68px 44px 0 0 ${({color}) => color}, 72px 44px 0 0 ${({color}) => color}, 76px 44px 0 0 ${({color}) => color}, 
    80px 44px 0 0 ${({border}) => border}, 8px 48px 0 0 ${({border}) => border}, 12px 48px 0 0 ${({color}) => color}, 16px 48px 0 0 ${({color}) => color}, 
    20px 48px 0 0 ${({color}) => color}, 24px 48px 0 0 ${({color}) => color}, 28px 48px 0 0 ${({border}) => border}, 32px 48px 0 0 ${({border}) => border}, 
    36px 48px 0 0 ${({color}) => color}, 40px 48px 0 0 ${({color}) => color}, 44px 48px 0 0 ${({color}) => color}, 48px 48px 0 0 ${({color}) => color}, 
    52px 48px 0 0 ${({color}) => color}, 56px 48px 0 0 ${({border}) => border}, 60px 48px 0 0 ${({border}) => border}, 64px 48px 0 0 ${({color}) => color}, 
    68px 48px 0 0 ${({color}) => color}, 72px 48px 0 0 ${({color}) => color}, 76px 48px 0 0 ${({color}) => color}, 80px 48px 0 0 ${({border}) => border}, 
    8px 52px 0 0 ${({border}) => border}, 12px 52px 0 0 ${({color}) => color}, 16px 52px 0 0 ${({color}) => color}, 20px 52px 0 0 rgba(244,169,176,1), 
    24px 52px 0 0 rgba(244,169,176,1), 28px 52px 0 0 ${({color}) => color}, 32px 52px 0 0 ${({color}) => color}, 36px 52px 0 0 ${({color}) => color}, 
    40px 52px 0 0 ${({color}) => color}, 44px 52px 0 0 ${({color}) => color}, 48px 52px 0 0 ${({color}) => color}, 52px 52px 0 0 ${({color}) => color}, 
    56px 52px 0 0 ${({color}) => color}, 60px 52px 0 0 ${({color}) => color}, 64px 52px 0 0 rgba(244,169,176,1), 68px 52px 0 0 rgba(244,169,176,1), 
    72px 52px 0 0 ${({color}) => color}, 76px 52px 0 0 ${({color}) => color}, 80px 52px 0 0 ${({border}) => border}, 8px 56px 0 0 ${({border}) => border}, 
    12px 56px 0 0 ${({color}) => color}, 16px 56px 0 0 ${({color}) => color}, 20px 56px 0 0 ${({color}) => color}, 24px 56px 0 0 ${({color}) => color}, 
    28px 56px 0 0 ${({color}) => color}, 32px 56px 0 0 ${({color}) => color}, 36px 56px 0 0 ${({border}) => border}, 40px 56px 0 0 ${({border}) => border}, 
    44px 56px 0 0 ${({border}) => border}, 48px 56px 0 0 ${({border}) => border}, 52px 56px 0 0 ${({border}) => border}, 56px 56px 0 0 ${({color}) => color}, 
    60px 56px 0 0 ${({color}) => color}, 64px 56px 0 0 ${({color}) => color}, 68px 56px 0 0 ${({color}) => color}, 72px 56px 0 0 ${({color}) => color}, 
    76px 56px 0 0 ${({color}) => color}, 80px 56px 0 0 ${({border}) => border}, 8px 60px 0 0 ${({border}) => border}, 12px 60px 0 0 ${({color}) => color}, 
    16px 60px 0 0 ${({color}) => color}, 20px 60px 0 0 ${({color}) => color}, 24px 60px 0 0 ${({color}) => color}, 28px 60px 0 0 ${({color}) => color}, 
    32px 60px 0 0 ${({color}) => color}, 36px 60px 0 0 ${({border}) => border}, 40px 60px 0 0 rgba(255, 255, 255, 1), 44px 60px 0 0 rgba(255, 255, 255, 1), 
    48px 60px 0 0 rgba(255, 255, 255, 1), 52px 60px 0 0 ${({border}) => border}, 56px 60px 0 0 ${({color}) => color}, 60px 60px 0 0 ${({color}) => color}, 
    64px 60px 0 0 ${({color}) => color}, 68px 60px 0 0 ${({color}) => color}, 72px 60px 0 0 ${({color}) => color}, 76px 60px 0 0 ${({color}) => color}, 
    80px 60px 0 0 ${({border}) => border}, 12px 64px 0 0 ${({border}) => border}, 16px 64px 0 0 ${({color}) => color}, 20px 64px 0 0 ${({color}) => color}, 
    24px 64px 0 0 ${({color}) => color}, 28px 64px 0 0 ${({color}) => color}, 32px 64px 0 0 ${({color}) => color}, 36px 64px 0 0 ${({color}) => color}, 
    40px 64px 0 0 ${({border}) => border}, 44px 64px 0 0 ${({border}) => border}, 48px 64px 0 0 ${({border}) => border}, 52px 64px 0 0 ${({color}) => color}, 
    56px 64px 0 0 ${({color}) => color}, 60px 64px 0 0 ${({color}) => color}, 64px 64px 0 0 ${({color}) => color}, 68px 64px 0 0 ${({color}) => color}, 
    72px 64px 0 0 ${({color}) => color}, 76px 64px 0 0 ${({border}) => border}, 12px 68px 0 0 ${({border}) => border}, 16px 68px 0 0 ${({color}) => color}, 
    20px 68px 0 0 ${({color}) => color}, 24px 68px 0 0 ${({color}) => color}, 28px 68px 0 0 ${({color}) => color}, 32px 68px 0 0 ${({color}) => color}, 
    36px 68px 0 0 ${({color}) => color}, 40px 68px 0 0 ${({color}) => color}, 44px 68px 0 0 ${({color}) => color}, 48px 68px 0 0 ${({color}) => color}, 
    52px 68px 0 0 ${({color}) => color}, 56px 68px 0 0 ${({color}) => color}, 60px 68px 0 0 ${({color}) => color}, 64px 68px 0 0 ${({color}) => color}, 
    68px 68px 0 0 ${({color}) => color}, 72px 68px 0 0 ${({color}) => color}, 76px 68px 0 0 ${({border}) => border}, 16px 72px 0 0 ${({border}) => border}, 
    20px 72px 0 0 ${({color}) => color}, 24px 72px 0 0 ${({color}) => color}, 28px 72px 0 0 ${({color}) => color}, 32px 72px 0 0 ${({color}) => color}, 
    36px 72px 0 0 ${({color}) => color}, 40px 72px 0 0 ${({color}) => color}, 44px 72px 0 0 ${({color}) => color}, 48px 72px 0 0 ${({color}) => color}, 
    52px 72px 0 0 ${({color}) => color}, 56px 72px 0 0 ${({color}) => color}, 60px 72px 0 0 ${({color}) => color}, 64px 72px 0 0 ${({color}) => color}, 
    68px 72px 0 0 ${({color}) => color}, 72px 72px 0 0 ${({border}) => border}, 20px 76px 0 0 ${({border}) => border}, 24px 76px 0 0 ${({border}) => border}, 
    28px 76px 0 0 ${({color}) => color}, 32px 76px 0 0 ${({color}) => color}, 36px 76px 0 0 ${({color}) => color}, 40px 76px 0 0 ${({color}) => color}, 
    44px 76px 0 0 ${({color}) => color}, 48px 76px 0 0 ${({color}) => color}, 52px 76px 0 0 ${({color}) => color}, 56px 76px 0 0 ${({color}) => color}, 
    60px 76px 0 0 ${({color}) => color}, 64px 76px 0 0 ${({border}) => border}, 68px 76px 0 0 ${({border}) => border}, 28px 80px 0 0 ${({border}) => border}, 
    32px 80px 0 0 ${({border}) => border}, 36px 80px 0 0 ${({border}) => border}, 40px 80px 0 0 ${({border}) => border}, 44px 80px 0 0 ${({border}) => border}, 
    48px 80px 0 0 ${({border}) => border}, 52px 80px 0 0 ${({border}) => border}, 56px 80px 0 0 ${({border}) => border}, 60px 80px 0 0 ${({border}) => border};

`


export const Onion = styled.div<CharactersAttrs>`
  position: relative;
  height: 4px;
  width: 4px;

  image-rendering: pixelated;
  image-rendering: crisp-edges;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  will-change: transform;

  pointer-events: none;

  box-shadow: 32px 4px 0 0 ${({border}) => border}, 40px 4px 0 0 ${({border}) => border}, 48px 4px 0 0 ${({border}) => border}, 36px 8px 0 0 ${({border}) => border}, 
  44px 8px 0 0 ${({border}) => border}, 40px 12px 0 0 ${({border}) => border}, 40px 16px 0 0 ${({border}) => border}, 36px 20px 0 0 ${({border}) => border}, 
  40px 20px 0 0 ${({color}) => color}, 44px 20px 0 0 ${({border}) => border}, 32px 24px 0 0 ${({border}) => border}, 36px 24px 0 0 ${({color}) => color}, 
  40px 24px 0 0 ${({color}) => color}, 44px 24px 0 0 ${({color}) => color}, 48px 24px 0 0 ${({border}) => border}, 24px 28px 0 0 ${({border}) => border}, 
  28px 28px 0 0 ${({border}) => border}, 32px 28px 0 0 ${({color}) => color}, 36px 28px 0 0 ${({color}) => color}, 40px 28px 0 0 ${({color}) => color}, 
  44px 28px 0 0 ${({color}) => color}, 48px 28px 0 0 ${({color}) => color}, 52px 28px 0 0 ${({border}) => border}, 56px 28px 0 0 ${({border}) => border}, 
  16px 32px 0 0 ${({border}) => border}, 20px 32px 0 0 ${({border}) => border}, 24px 32px 0 0 ${({color}) => color}, 28px 32px 0 0 ${({color}) => color}, 
  32px 32px 0 0 ${({color}) => color}, 36px 32px 0 0 ${({color}) => color}, 40px 32px 0 0 ${({color}) => color}, 44px 32px 0 0 ${({color}) => color}, 
  48px 32px 0 0 ${({color}) => color}, 52px 32px 0 0 ${({color}) => color}, 56px 32px 0 0 ${({color}) => color}, 60px 32px 0 0 ${({border}) => border}, 
  64px 32px 0 0 ${({border}) => border}, 12px 36px 0 0 ${({border}) => border}, 16px 36px 0 0 ${({color}) => color}, 20px 36px 0 0 ${({color}) => color}, 
  24px 36px 0 0 ${({color}) => color}, 28px 36px 0 0 ${({color}) => color}, 32px 36px 0 0 ${({color}) => color}, 36px 36px 0 0 ${({color}) => color}, 
  40px 36px 0 0 ${({color}) => color}, 44px 36px 0 0 ${({color}) => color}, 48px 36px 0 0 ${({color}) => color}, 52px 36px 0 0 ${({color}) => color}, 
  56px 36px 0 0 ${({color}) => color}, 60px 36px 0 0 ${({color}) => color}, 64px 36px 0 0 ${({color}) => color}, 68px 36px 0 0 ${({border}) => border}, 
  8px 40px 0 0 ${({border}) => border}, 12px 40px 0 0 ${({color}) => color}, 16px 40px 0 0 ${({color}) => color}, 20px 40px 0 0 ${({color}) => color}, 
  24px 40px 0 0 ${({border}) => border}, 28px 40px 0 0 ${({border}) => border}, 32px 40px 0 0 ${({border}) => border}, 36px 40px 0 0 ${({color}) => color}, 
  40px 40px 0 0 ${({color}) => color}, 44px 40px 0 0 ${({color}) => color}, 48px 40px 0 0 ${({border}) => border}, 52px 40px 0 0 ${({border}) => border}, 
  56px 40px 0 0 ${({border}) => border}, 60px 40px 0 0 ${({color}) => color}, 64px 40px 0 0 ${({color}) => color}, 68px 40px 0 0 ${({color}) => color}, 
  72px 40px 0 0 ${({border}) => border}, 8px 44px 0 0 ${({border}) => border}, 12px 44px 0 0 ${({color}) => color}, 16px 44px 0 0 ${({color}) => color}, 
  20px 44px 0 0 ${({color}) => color}, 24px 44px 0 0 ${({color}) => color}, 28px 44px 0 0 ${({color}) => color}, 32px 44px 0 0 ${({border}) => border}, 
  36px 44px 0 0 ${({color}) => color}, 40px 44px 0 0 ${({color}) => color}, 44px 44px 0 0 ${({color}) => color}, 48px 44px 0 0 ${({color}) => color}, 
  52px 44px 0 0 ${({color}) => color}, 56px 44px 0 0 ${({border}) => border}, 60px 44px 0 0 ${({color}) => color}, 64px 44px 0 0 ${({color}) => color}, 
  68px 44px 0 0 ${({color}) => color}, 72px 44px 0 0 ${({border}) => border}, 4px 48px 0 0 ${({border}) => border}, 8px 48px 0 0 ${({color}) => color}, 
  12px 48px 0 0 ${({color}) => color}, 16px 48px 0 0 ${({color}) => color}, 20px 48px 0 0 ${({color}) => color}, 24px 48px 0 0 ${({color}) => color}, 
  28px 48px 0 0 ${({color}) => color}, 32px 48px 0 0 ${({color}) => color}, 36px 48px 0 0 ${({color}) => color}, 40px 48px 0 0 ${({color}) => color}, 
  44px 48px 0 0 ${({color}) => color}, 48px 48px 0 0 ${({color}) => color}, 52px 48px 0 0 ${({color}) => color}, 56px 48px 0 0 ${({color}) => color}, 
  60px 48px 0 0 ${({color}) => color}, 64px 48px 0 0 ${({color}) => color}, 68px 48px 0 0 ${({color}) => color}, 72px 48px 0 0 ${({color}) => color}, 
  76px 48px 0 0 ${({border}) => border}, 4px 52px 0 0 ${({border}) => border}, 8px 52px 0 0 ${({color}) => color}, 12px 52px 0 0 ${({color}) => color}, 
  16px 52px 0 0 rgba(255, 205, 210, 1), 20px 52px 0 0 rgba(255, 205, 210, 1), 24px 52px 0 0 ${({color}) => color}, 28px 52px 0 0 ${({color}) => color}, 
  32px 52px 0 0 ${({color}) => color}, 36px 52px 0 0 ${({color}) => color}, 40px 52px 0 0 ${({color}) => color}, 44px 52px 0 0 ${({color}) => color}, 
  48px 52px 0 0 ${({color}) => color}, 52px 52px 0 0 ${({color}) => color}, 56px 52px 0 0 ${({color}) => color}, 60px 52px 0 0 rgba(255, 205, 210, 1), 
  64px 52px 0 0 rgba(255, 205, 210, 1), 68px 52px 0 0 ${({color}) => color}, 72px 52px 0 0 ${({color}) => color}, 76px 52px 0 0 ${({border}) => border}, 
  4px 56px 0 0 ${({border}) => border}, 8px 56px 0 0 ${({color}) => color}, 12px 56px 0 0 ${({color}) => color}, 16px 56px 0 0 ${({color}) => color}, 
  20px 56px 0 0 ${({color}) => color}, 24px 56px 0 0 ${({color}) => color}, 28px 56px 0 0 ${({color}) => color}, 32px 56px 0 0 ${({color}) => color}, 
  36px 56px 0 0 ${({color}) => color}, 40px 56px 0 0 ${({color}) => color}, 44px 56px 0 0 ${({color}) => color}, 48px 56px 0 0 ${({color}) => color}, 
  52px 56px 0 0 ${({color}) => color}, 56px 56px 0 0 ${({color}) => color}, 60px 56px 0 0 ${({color}) => color}, 64px 56px 0 0 ${({color}) => color}, 
  68px 56px 0 0 ${({color}) => color}, 72px 56px 0 0 ${({color}) => color}, 76px 56px 0 0 ${({border}) => border}, 4px 60px 0 0 ${({border}) => border}, 
  8px 60px 0 0 ${({color}) => color}, 12px 60px 0 0 ${({color}) => color}, 16px 60px 0 0 ${({color}) => color}, 20px 60px 0 0 ${({color}) => color}, 
  24px 60px 0 0 ${({color}) => color}, 28px 60px 0 0 ${({color}) => color}, 32px 60px 0 0 ${({color}) => color}, 36px 60px 0 0 ${({color}) => color}, 
  40px 60px 0 0 ${({color}) => color}, 44px 60px 0 0 ${({color}) => color}, 48px 60px 0 0 ${({color}) => color}, 52px 60px 0 0 ${({color}) => color}, 
  56px 60px 0 0 ${({border}) => border}, 60px 60px 0 0 ${({color}) => color}, 64px 60px 0 0 ${({color}) => color}, 68px 60px 0 0 ${({color}) => color}, 
  72px 60px 0 0 ${({color}) => color}, 76px 60px 0 0 ${({border}) => border}, 8px 64px 0 0 ${({border}) => border}, 12px 64px 0 0 ${({color}) => color}, 
  16px 64px 0 0 ${({color}) => color}, 20px 64px 0 0 ${({color}) => color}, 24px 64px 0 0 ${({color}) => color}, 28px 64px 0 0 ${({color}) => color}, 
  32px 64px 0 0 ${({color}) => color}, 36px 64px 0 0 ${({color}) => color}, 40px 64px 0 0 ${({color}) => color}, 44px 64px 0 0 ${({color}) => color}, 
  48px 64px 0 0 ${({border}) => border}, 52px 64px 0 0 ${({border}) => border}, 56px 64px 0 0 ${({color}) => color}, 60px 64px 0 0 ${({color}) => color}, 
  64px 64px 0 0 ${({color}) => color}, 68px 64px 0 0 ${({color}) => color}, 72px 64px 0 0 ${({border}) => border}, 12px 68px 0 0 ${({border}) => border}, 
  16px 68px 0 0 ${({color}) => color}, 20px 68px 0 0 ${({color}) => color}, 24px 68px 0 0 ${({color}) => color}, 28px 68px 0 0 ${({color}) => color}, 
  32px 68px 0 0 ${({color}) => color}, 36px 68px 0 0 ${({color}) => color}, 40px 68px 0 0 ${({color}) => color}, 44px 68px 0 0 ${({color}) => color}, 
  48px 68px 0 0 ${({color}) => color}, 52px 68px 0 0 ${({color}) => color}, 56px 68px 0 0 ${({color}) => color}, 60px 68px 0 0 ${({color}) => color}, 
  64px 68px 0 0 ${({color}) => color}, 68px 68px 0 0 ${({border}) => border}, 16px 72px 0 0 ${({border}) => border}, 20px 72px 0 0 ${({color}) => color}, 
  24px 72px 0 0 ${({color}) => color}, 28px 72px 0 0 ${({color}) => color}, 32px 72px 0 0 ${({color}) => color}, 36px 72px 0 0 ${({color}) => color}, 
  40px 72px 0 0 ${({color}) => color}, 44px 72px 0 0 ${({color}) => color}, 48px 72px 0 0 ${({color}) => color}, 52px 72px 0 0 ${({color}) => color}, 
  56px 72px 0 0 ${({color}) => color}, 60px 72px 0 0 ${({color}) => color}, 64px 72px 0 0 ${({border}) => border}, 20px 76px 0 0 ${({border}) => border}, 
  24px 76px 0 0 ${({border}) => border}, 28px 76px 0 0 ${({color}) => color}, 32px 76px 0 0 ${({color}) => color}, 36px 76px 0 0 ${({color}) => color}, 
  40px 76px 0 0 ${({color}) => color}, 44px 76px 0 0 ${({color}) => color}, 48px 76px 0 0 ${({color}) => color}, 52px 76px 0 0 ${({color}) => color}, 
  56px 76px 0 0 ${({border}) => border}, 60px 76px 0 0 ${({border}) => border}, 28px 80px 0 0 ${({border}) => border}, 32px 80px 0 0 ${({border}) => border}, 
  36px 80px 0 0 ${({border}) => border}, 40px 80px 0 0 ${({border}) => border}, 44px 80px 0 0 ${({border}) => border}, 48px 80px 0 0 ${({border}) => border}, 
  52px 80px 0 0 ${({border}) => border};

`;

