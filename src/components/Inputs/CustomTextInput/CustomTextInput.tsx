import React from "react";
import { styles } from "./CustomTextInput.styles";

interface CustomTextInputProps {
  ID?: string;
  customStyle?: React.CSSProperties;
  placeholder?: string;
  label?: string;
  text?: string;
  type?: "text" | "password" | "email" | "number" | "tel" | "url";
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  ID,
  customStyle,
  placeholder,
  label,
  text,
  type = "text",
}) => {
  const combinedStyles: React.CSSProperties = customStyle
    ? { ...styles.input, ...customStyle }
    : styles.input;

  const masterID = ID ? `${ID}-input` : "custom-input";

  return (
    <div>
      {label && <label htmlFor={masterID}>{label}</label>}
      <input
        type={type}
        id={masterID}
        style={combinedStyles}
        placeholder={placeholder}
        defaultValue={text}
      />
    </div>
  );
};

export default CustomTextInput;
