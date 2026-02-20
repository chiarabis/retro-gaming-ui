import styled from "styled-components";


type ButtonProps = {
    firstColor: string;
    secondColor: string;
};

export const ButtonWrapper = styled.div<ButtonProps>`
  width: fit-content;
  height: 100%;
  padding: 0.5rem;
  box-shadow: -3px -3px 0 0 ${props => props.firstColor}, 3px 3px 0 1px ${props => props.secondColor};
    
  button {
    margin: 0; 
    cursor: pointer;
    padding: 0; 
    border: none; 
    background: none;
    font-family: 'VT323';
    font-size: 1.25rem;
  }

  &:hover {
    transform: scale(0.95);
  }
`;