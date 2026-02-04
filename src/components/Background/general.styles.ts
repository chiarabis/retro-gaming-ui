import styled from "styled-components";
export const Container = styled.div<{ backgroundColor?: string}>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    pointer-events: none;
    background-color: ${({ backgroundColor }) => backgroundColor};
    z-index: -1;
`;
