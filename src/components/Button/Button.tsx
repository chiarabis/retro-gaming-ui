
import { ButtonWrapper } from './Button.styles'

export default function Button({ title }: { title: string }) {
    
    const handleClick = () => {
        console.log("Button clicked");
    }

    return (
        <ButtonWrapper 
        firstColor="#f1b8d5" 
        secondColor="#ce73a2">
            <button onClick={() => {handleClick()}}>{title}</button>
        </ButtonWrapper>
    )
}
