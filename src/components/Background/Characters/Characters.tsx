import { Container } from "../general.styles";
import { Wrapper, Ghost, Kawaii, Onion } from "./Characters.styles";
import { Item1, Item2 } from "./Items.styles";


type CharactersProps = {
    count?: number;
    color?: string;
    border?: string;
    backgroundColor?: string;
    showItem?: boolean;
    firstColorItem?: string;
    secondColorItem?: string;
    thirdColorItem?: string;
    variant: "ghost" | "kawaii" | "onion";
    itemVariant?: "knife" | "gun";
}


export default function Characters({
    count = 15,
    color = "#fff",
    border = "#000",
    backgroundColor,
    showItem = false,
    firstColorItem = "#8f8f8f",
    secondColorItem = "#153e6d",
    thirdColorItem = "#5d9741",
    variant,
    itemVariant,
}: CharactersProps) {

    const CHARACTER_HEIGHT = 76;
    const MAX_COUNT = 20;

    const random = (min: number, max: number) => Math.random() * (max - min) + min;
    const actualCount = Math.min(count, MAX_COUNT);


    return (
        <Container backgroundColor={backgroundColor}>
            {Array.from({ length: actualCount }).map((_, index) => {
                const delay = -random(0, 5);
                const duration = random(6, 10);
                const scale = random(0.5, 1);
                const top = 100 - (CHARACTER_HEIGHT * scale / window.innerHeight * 100) - 2;
                
                const left = random(0, 100);

                return (
                <Wrapper
                    key={`wrapper-${index}`}
                    top={top}
                    left={left}
                    scale={scale}
                    delay={delay}
                    duration={duration}>

                    {variant === "ghost" ? 
                    <Ghost color={color} border={border} variant={variant}/>
                    : variant === "kawaii" ?
                    <Kawaii color={color} border={border} variant={variant}/>
                    :
                    <Onion color={color} border={border} variant={variant}/>
                    }

                    {showItem && (
                        itemVariant === "knife" ? (
                        <Item1
                        firstColorItem={firstColorItem}
                        secondColorItem={secondColorItem}
                        thirdColorItem={thirdColorItem}
                        borderItem={border}
                        />
                        ) : (
                        <Item2
                        firstColorItem={firstColorItem}
                        secondColorItem={secondColorItem}
                        thirdColorItem={thirdColorItem}
                        borderItem={border}
                        />
                        ))
                    }
                </Wrapper>
            )})}
        </Container>
    )
}