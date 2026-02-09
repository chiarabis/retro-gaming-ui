import {Dino, Pacman} from "./Loader.styles";


type LoaderProps = {
    border: string;
    firstColor: string;
    secondColor: string;
    variant: "dino" | "pacman";
}




export default function Loader({
    border = "#000",
    firstColor = "#35978f", 
    secondColor = "#df1e1e", 
    variant = "dino",
}: LoaderProps) {

    return (
        variant === "dino" ? 
        <Dino border={border} firstColor={firstColor} secondColor={secondColor} variant={variant} />
        :
        <div>
            <Pacman border={border} firstColor={firstColor} secondColor={secondColor} variant={variant} />
            
        </div>
    );
}