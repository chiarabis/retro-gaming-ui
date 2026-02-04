import styled from "styled-components";
//import React from "react";

type BoxProps = {
    primaryColor?: string;
    secondaryColor?: string;
};

export const BoxWrapper = styled.div<BoxProps>`
    padding: 1.25rem;
    width: fit-content;
    height: auto;
    display: flex;
    gap: 0.5rem;
    border: 4px solid ${({ primaryColor }) => primaryColor};

  box-shadow:
    4px 4px 0 ${({ secondaryColor }) => secondaryColor},
    8px 8px 0 ${({ primaryColor }) => primaryColor};
`;