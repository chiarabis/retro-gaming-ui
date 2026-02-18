import { Wrap, Typing } from "./Text.styles";


type TextProps = {
  title: string;
  firstColor?: string;
  cursorSize: number;
  fontSize?: number;
};

export default function TypingText({
  title,
  firstColor,
  cursorSize,
  fontSize,
}: TextProps) {

const widthText = title.length + 1;



  return (
    <Wrap 
    firstColor={firstColor} 
    widthChars={widthText}
    fontSize={fontSize}
    >
      
      <Typing widthChars={widthText} cursorSize={cursorSize}>{title}</Typing>
      
    </Wrap>
  );
}
