import styled, { keyframes } from "styled-components";




const typingLoop = (widthChars: number) => keyframes`
  0%, 20%  { width: 0; }
  60%, 80% { width: ${widthChars}ch; }
  100%     { width: 0; }
`;

const blinkingCursor = keyframes`
  50% { border-color: transparent; }
`;

// const buttonPulse = keyframes`
//   0%, 50%, 100% { transform: scale(1); }
//   25% { transform: scale(1.02); }
//   75% { transform: scale(0.98); }
// `;

// const buttonFloat = keyframes`
//   0%, 100% { transform: translateY(0px) translateX(0px) rotateX(0deg); }
//   50% { transform: translateY(-8px) translateX(-4px) rotateX(5deg); }
// `;

interface TextProps {
  firstColor?: string;
  widthChars: number;
  fontSize?: number;
  cursorSize?: number;
}

export const Wrap = styled.div<TextProps>`
  min-width: ${({ widthChars }) => `${widthChars}ch`};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  text-align: center;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "VT323", monospace;
  
`;

  // &:hover {
  //   transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  //   animation: ${buttonPulse} 2s ease-in-out infinite, ${buttonFloat} 2s ease-in-out infinite;
  // }

   // background-color: ${({ backgroundColor = "#F9A8D4" }) => backgroundColor};
  // border: ${({ firstColor = "#0f172b", border = "dashed" }) => `4px ${border} ${firstColor}`};
  // box-shadow:
  //   ${({ secondColor = "#F8FF2A"}) => `4px 4px 0 ${secondColor}`},
  //   ${({ thirdColor = "#e60076"}) => `8px 8px 0 ${thirdColor}`};



export const Typing = styled.span<{cursorSize: number, firstColor?: string, widthChars: number}>`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: ${props => props.cursorSize || 2}px solid ${props => props.firstColor};
  font-family: "VT323", monospace;

  animation: ${({ widthChars }) => typingLoop(widthChars)} 4s steps(${props => props.widthChars}) infinite, ${blinkingCursor} 500ms step-end infinite;
  
`;
//animation: ${typingLoop(props => props.widthChars)} 4s steps(${props => props.widthChars}) infinite, ${blinkingCursor} 500ms step-end infinite;
  
  // ${({ widthChars }) => `
  //     ${typingLoop(widthChars)} 4s steps(${widthChars}) infinite,
  //     ${blinkingCursor} 0.5s step-end infinite;
  // `}

  //animation: ${({ widthChars }) => typingLoop(widthChars)} 4s steps(${props => props.widthChars}) infinite, ${blinkingCursor} 500ms step-end infinite;