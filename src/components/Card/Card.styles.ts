import styled from "styled-components";

export const RadioBtn = styled.label`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 0.3rem 0;

  input[type="radio"] {
    width: 0;
    height: 0;
    opacity: 0;
    position: absolute;
  }

  .custom-radio {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border: 2px solid #0f172b;
    position: relative;
    box-sizing: border-box;
    transition: all 0.2s ease;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0.5rem;
      height: 0.5rem;
      background-color: #f059a7;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.2s ease;
    }
  }

  input[type="radio"]:checked + .custom-radio::after {
    transform: translate(-50%, -50%) scale(1);
  }

  &:hover .custom-radio {
    border-color: #f059a7;
  }

  
`;


// .powers {
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
// }

// .power-bar-container {
//   display: flex;
//   align-items: center;
// }

// .power-label {
//   width: 70px; 
//   text-align: left;
//   text-shadow: 0 1px 2px #0f172b;
//   font-size: 0.875rem;
//   text-transform: uppercase;
//   color: #00ffff;
// }

// .bar-value {
//   flex: 1;           
//   height: 12px;
//   background-color: rgba(255,255,255,0.5);
//   overflow: hidden;
//   position: relative;
// }

// .bar-value::after {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 0%;
//   background-color: #e60076;
//   transition: width 1s ease;
// }
// .power-bar-container:hover .bar-value::after {
//   width: var(--fill);
// }

