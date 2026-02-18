import styled from "styled-components";

export const Container = styled.div<{ backgroundColor?: string, overflow?: string, position?: string}>`
    position: ${({ position }) => position};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: ${({ overflow }) => overflow};
    
    background-color: ${({ backgroundColor }) => backgroundColor};
    //z-index: -1;
`;
