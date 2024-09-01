import React from "react";
import { styles } from "./View.styles";

interface ViewProps {
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
  ID?: string;
}

const View: React.FC<ViewProps> = ({ children, customStyle, ID }) => {
  const combinedStyles = customStyle
    ? { ...styles.view, ...customStyle }
    : styles.view;

  const masterID = ID ? `${ID}-view` : "custom-view";
  return (
    <div style={combinedStyles} id={masterID}>
      {children}
    </div>
  );
};

export default View;
