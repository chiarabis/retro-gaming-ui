import { BoxWrapper } from "./Box.styles";
import React from "react";

type BoxProps = {
    content?: React.ReactNode;
    primaryColor?: string;
    secondaryColor?: string;
}

export default function Box ({ 
    content,
    primaryColor,
    secondaryColor
}: BoxProps) {
    return (
        <BoxWrapper 
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
        >
            {content}
        </BoxWrapper>
    )
}