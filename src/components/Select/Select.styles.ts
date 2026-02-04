import styled from "styled-components";

// interface SelectProps {
//   borderColor: string;
//   bgColor: string;
//   fontColor: string;
//   optionColor: string;
// }


export const SelectContainer = styled.div`
  position: relative;
  width: fit-content;
`;

export const SelectButton = styled.button<{
    borderColor: string;
    bgColor: string;
    fontColor: string;
    optionColor: string;
}>`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  padding: 0.25rem 0.75rem;
  font-size: 1.5rem;
  width: 100%;
  cursor: default;
  font-family: "VT323", monospace;
  color: ${({ fontColor }) => fontColor};
  border: 2px solid ${({ borderColor }) => borderColor};
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 4px 4px 0 ${({ borderColor }) => borderColor};
  transition: transform 0.1s, box-shadow 0.1s;

  &:hover {
    transform: scale(0.98) translate(3px, 1px);
    box-shadow: 2px 2px 0 ${({ borderColor }) => borderColor};
  }
`;

export const OptionsContainer = styled.div<{ fontColor: string}>`
  position: absolute;
  top: 110%;
  right: 0;
  width: 100%;
  border: 1px solid ${({ fontColor }) => fontColor};
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  z-index: 40;
  font-size: 1.125rem;
  margin-top: 0.15rem;
  margin-left: 5px;
`;

export const Option = styled.p<{ optionColor: string }>`
  padding: 0.75rem 0.5rem;
  cursor: default;
  z-index: 10;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-wrap: wrap;

  &:hover {
    background-color: ${({ optionColor }) => optionColor};
  }
`;
