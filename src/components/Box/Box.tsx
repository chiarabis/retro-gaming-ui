import { BoxWrapper } from "./Box.styles";

type BoxProps = {
    children: React.ReactNode;
    firstColor?: string;
    secondColor?: string;
};

export default function Box({
    children,
    firstColor = "#f7b7d8",
    secondColor = "#ce73a2"
}: BoxProps) {
    return (
        <BoxWrapper firstColor={firstColor} secondColor={secondColor}>
            {children}
        </BoxWrapper>
    )
}