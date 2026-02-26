import styled from "styled-components";

export const Container = styled.div<{ backgroundColor?: string, overflow?: string, position?: string, height?: string}>`
    position: ${({ position }) => position};
    top: 0;
    left: 0;
    width: 100%;
    //height: 100%;
    height: ${({ height }) => height};
    overflow-y: ${({ overflow }) => overflow};
    
    background-color: ${({ backgroundColor }) => backgroundColor};
    //z-index: -1;
`;
