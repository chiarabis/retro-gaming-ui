import { ButtonWrap, Typing } from "./Button.styles";

type ButtonProps = {
  titleButton: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  backgroundColor?: string;
  border?: "solid" | "dashed" | "dotted" ;

};

export default function Button({
  titleButton,
  firstColor,
  secondColor,
  thirdColor,
  backgroundColor,
  border,
}: ButtonProps) {
  const widthChars = titleButton.length;
  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <ButtonWrap 
    firstColor={firstColor} 
    secondColor={secondColor} 
    thirdColor={thirdColor} 
    backgroundColor={backgroundColor} 
    border={border as "solid" | "dashed" | "dotted" }
    widthChars={widthChars}
    >
      <button onClick={handleButtonClick}>
        <Typing>{titleButton}</Typing>
      </button>
    </ButtonWrap>
  );
}
