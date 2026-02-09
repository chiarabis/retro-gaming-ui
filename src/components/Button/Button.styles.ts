import styled, { keyframes } from "styled-components";


const typingLoop = keyframes`
  0%, 20%  { width: 0; }
  60%, 80%  { width: 12ch; }
  100%  { width: 0; }
`;

const blinkingCursor = keyframes`
  50% { border-color: transparent; }
`;

const buttonPulse = keyframes`
  0%, 50%, 100% { transform: scale(1); }
  25% { transform: scale(1.02); }
  75% { transform: scale(0.98); }
`;

const buttonFloat = keyframes`
  0%, 100% { transform: translateY(0px) translateX(0px) rotateX(0deg); }
  50% { transform: translateY(-8px) translateX(-4px) rotateX(5deg); }
`;


export const ButtonWrap = styled.div<{
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  backgroundColor?: string;
  border?: "solid" | "dashed" | "dotted";
  widthChars: number;
}>`
  display: inline-block;
  position: relative;
  transform-style: preserve-3d;
  background-color: ${({ backgroundColor = "#F9A8D4" }) => backgroundColor};
  border: ${({ firstColor = "#0f172b", border = "dashed" }) => `4px ${border} ${firstColor}`};
  box-shadow:
    ${({ secondColor = "#F8FF2A"}) => `4px 4px 0 ${secondColor}`},
    ${({ thirdColor = "#e60076"}) => `8px 8px 0 ${thirdColor}`};
  padding: 0.5rem;
  margin: 1rem;

  &:hover {
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    animation: ${buttonPulse} 2s ease-in-out infinite, ${buttonFloat} 2s ease-in-out infinite;
  }

  button {
    width: ${({ widthChars }) => (widthChars ? `${widthChars}ch` : "100%")};
    font-size: 30px;
    text-align: center;
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    transform-style: preserve-3d;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Typing = styled.span`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  font-family: "VT323", monospace;
  border-right: 2px solid rgba(255,255,255,0.75);
  animation: ${typingLoop} 6s steps(12) infinite, ${blinkingCursor} 500ms step-end infinite;
`;
// width: 11.5ch;