import styled from "styled-components";


type BoxProps = {
    firstColor: string;
    secondColor: string;
};

export const BoxWrapper = styled.div<BoxProps>`
  width: fit-content;
  height: fit-content;
  padding: 0.5rem;
  font-size: 1.5rem;
  box-shadow: -3px -3px 0 0 ${props => props.firstColor}, 2px 2px 0 1px ${props => props.secondColor};
`;

 //box-shadow: -3px -3px 0 0 #f7b7d8, 2px 2px 0 1px #ce73a2;
