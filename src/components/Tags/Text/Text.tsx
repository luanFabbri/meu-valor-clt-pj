import React from "react";
import { styles } from "./Text.styles";

interface TextProps {
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
  ID?: string;
}

const Text: React.FC<TextProps> = ({ children, customStyle, ID }) => {
  const combinedStyles = customStyle
    ? { ...styles.text, ...customStyle }
    : styles.text;

  const masterID = ID ? `${ID}-view` : "custom-view";

  return (
    <p style={combinedStyles} id={masterID}>
      {children}
    </p>
  );
};

export default Text;
