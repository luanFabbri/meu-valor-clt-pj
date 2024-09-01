import React from "react";
import { styles } from "./CustomButton.styles";

interface CustomButtonProps {
  ID?: string;
  customStyle?: React.CSSProperties;
  customLabelStyle?: React.CSSProperties;
  placeholder?: string;
  label?: string;
  text: string;
  onPress?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  ID,
  customStyle,
  customLabelStyle,
  placeholder,
  label,
  text,
  onPress,
}) => {
  const combinedStyles = customStyle
    ? { ...styles.button, ...customStyle }
    : styles.button;

  const combinedLabelStyles = customLabelStyle ? {
    ...styles.label, ...customLabelStyle
  } : styles.label

  const masterID = ID ? `${ID}-button` : "custom-button";

  return (
    <div>
      {label && <label style={combinedLabelStyles} htmlFor={masterID}>{label}</label>}
      <input
        type="button"
        id={masterID}
        style={combinedStyles}
        value={text}
        placeholder={placeholder}
        onClick={onPress}
      />
    </div>
  );
};

export default CustomButton;
