
import { ButtonWrapper } from './Button.styles'

export default function Button({ 
    title,
    onClick
}: { 
    title: string,
    onClick: () => void
}) {


    return (
        <ButtonWrapper 
        firstColor="#f1b8d5" 
        secondColor="#ce73a2">
            <button onClick={onClick}>{title}</button>
        </ButtonWrapper>
    )
}
