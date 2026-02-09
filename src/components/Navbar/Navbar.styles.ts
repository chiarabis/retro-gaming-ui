import styled, { keyframes } from "styled-components";


export const sparkleAnimation = keyframes`
0%, 100% { opacity: 0; }
25% { opacity: 0.5;}
50% { opacity: 1; }
`;



//animation: `${sparkleAnimation} 0.8s ease-in-out infinite`;

// .delay-100 { animation-delay: 0.1s; }
// .delay-200 { animation-delay: 0.2s; }
// .delay-300  { animation-delay: 0.3s;}


// const delay100 = keyframes`
//   animation-delay: 0.1s;
// `;

// const delay200 = keyframes`
//   animation-delay: 0.2s;
// `;







export const GridContainer = styled.div<{
    gridColor: string;
}>`
    position: absolute;
    top: 0;
    width: 100%;
    height: fit-content;
    z-index: 0;
    background: transparent;
    background-image: linear-gradient(to right, ${({ gridColor }) => gridColor} 1px, transparent 1px),
        linear-gradient(to bottom, ${({ gridColor }) => gridColor} 1px, transparent 1px);

    background-size: 20px 20px;

    -webkit-mask-image: linear-gradient(
        to bottom,
        white 70%,
        transparent 100%
    );
    mask-image: linear-gradient(
        to bottom,
        white 70%,
        transparent 100%
    );
`

export const NavbarContent = styled.div<{
    textColor: string;
    gap?: number;
    fontSize?: number;
}>`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 1rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    gap: ${({ gap }) => `${gap}rem`};
    font-size: ${({ fontSize }) => `${fontSize}rem`};

    color: ${({ textColor }) => textColor};
`;

export const Sparkle = styled.span<{ 
    width: number,
    height: number,
    background: string,
    top: number,
    left: number,
    right: number,
    rotate: number,
    delay: number,
}>`
    position: absolute;
    top: ${({ top }) => `${top}px`};
    left: ${({ left }) => `${left}px`};
    right: ${({ right }) => `${right}px`};
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
    background: ${({ background }) => background};
    transform: ${({rotate}) => `rotate(${rotate}deg)`};

    animation: ${sparkleAnimation} 0.7s ease-in-out infinite;
    animation-delay: ${({delay}) => `${delay}s`};
`;


