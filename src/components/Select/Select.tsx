import { useState, useRef, useEffect } from "react";
import {
  SelectContainer,
  SelectButton,
  OptionsContainer,
  Option,
} from "./Select.styles";

export type SelectProps = {
  optionsList: string[];
  borderColor?: string;
  bgColor?: string;
  fontColor?: string;
  optionColor?: string;
  placeholder?: string;
}

export default function Select({
  optionsList,
  borderColor = "#e60076",
  bgColor = "#F8FF2A",
  fontColor = "#0f172b",
  optionColor = "#F8FF2A",
  placeholder = "Choose Something",
}: SelectProps) {
  const [showSelect, setShowSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState(placeholder);
  const selectRef = useRef<HTMLDivElement | null>(null);


  const handleSelect = () => {
    setShowSelect((prev) => !prev);
  };
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setShowSelect(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setShowSelect(false);
        //setSelectedOption(option);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  

  return (
    <SelectContainer ref={selectRef}>
      <SelectButton
        onClick={handleSelect}
        borderColor={borderColor}
        bgColor={bgColor}
        fontColor={fontColor}
        optionColor={optionColor}
      >
        {selectedOption}
        {showSelect ? (
          <span className="yarndings-12-regular text-pink-600">-</span>
        ) : (
          <span className="yarndings-12-regular text-pink-600">_</span>
        )}
      </SelectButton>

      {showSelect && (
        <OptionsContainer fontColor={fontColor}>
          {optionsList.map((option, index) => (
            <Option key={index} onClick={() => handleOptionSelect(option)} optionColor={optionColor}>
              {option}
            </Option>
          ))}
        </OptionsContainer>
      )}
    </SelectContainer>

    // <div className="relative" ref={selectRef}>
    //         <button className="text-2xl flex flex-row gap-x-3 px-3 py-1 pixel-border-3 w-full cursor-default" onClick={handleSelect}>
    //             {selectedOption}
    //             {showSelect ? 
    //                 <span className="yarndings-12-regular text-pink-600">-</span> : 
    //                 <span className="yarndings-12-regular text-pink-600">_</span>
    //             }
                
    //         </button>

    //         <div className={`${showSelect ? "absolute top-[110%] bg-white w-full left-0 z-40 text-lg" : "hidden"}` }>
    //             {optionsList.map((optionList, index) => (
    //                 <p key={index} className="hover:bg-[#F8FF2A] px-2 py-1 cursor-default z-10" onClick={() => handleOptionSelect(optionList)}>{optionList}</p>
    //             ))}
    //         </div>
    //     </div>
  );
}
