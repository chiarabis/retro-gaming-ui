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
  onChange?: (value: string) => void;
}

export default function Select({
  optionsList,
  borderColor = "#f059a7",
  bgColor = "#fff",
  fontColor = "#0f172b",
  optionColor = "#ec99c4",
  placeholder,
  onChange,
}: SelectProps) {
  const [showSelect, setShowSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState(placeholder);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const capitalizeFirstLetter = (str: string) => {
    if (!str) return ""
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const handleSelect = () => {
    setShowSelect((prev) => !prev);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setShowSelect(false);

    if (onChange) {
      onChange(option);
    }
  };


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setShowSelect(false);
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

        {capitalizeFirstLetter(selectedOption || "")}

        {showSelect ? (
          <span className="pixelarticons--chevron-up"></span>
        ) : (
          <span className="pixelarticons--chevron-down"></span>
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
  );
}
