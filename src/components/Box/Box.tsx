import { BoxWrapper } from "./Box.styles";
import React from "react";

type BoxProps = {
    content?: React.ReactNode;
    primaryColor?: string;
    secondaryColor?: string;
    backgroundColor?: string;
}

export default function Box ({ 
    content,
    primaryColor,
    secondaryColor,
    backgroundColor
}: BoxProps) {
    return (
        <BoxWrapper 
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            backgroundColor={backgroundColor}
        >
            {content}
        </BoxWrapper>
    )
}