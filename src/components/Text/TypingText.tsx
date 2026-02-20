import { Wrap, Typing } from "./Text.styles";


type TextProps = {
  title: string;
  firstColor?: string;
  cursorSize: number;
  fontSize?: number;
  extraClass?: string;
};

export default function TypingText({
  title,
  firstColor,
  cursorSize,
  fontSize,
  extraClass,
}: TextProps) {

const widthText = title.length + 1;



  return (
    <Wrap 
    widthChars={widthText}
    fontSize={fontSize}
    extraClass={extraClass || ""}
    >
      
      <Typing firstColor={firstColor} widthChars={widthText} cursorSize={cursorSize}>{title}</Typing>
      
    </Wrap>
  );
}
