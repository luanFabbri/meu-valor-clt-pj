import React, { useState } from "react";
import { styles } from "./CustomTextInput.styles";

interface CustomTextInputProps {
  ID?: string;
  customStyle?: React.CSSProperties;
  customLabelStyle?: React.CSSProperties;
  placeholder?: string;
  label?: string;
  text?: string;
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "tel"
    | "url"
    | "currency-brl";
  onChange?: (value: string) => void; // Adicionando a prop onChange
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  ID,
  customStyle,
  customLabelStyle,
  placeholder,
  label,
  text,
  type = "text",
  onChange, // Recebendo a prop onChange
}) => {
  const [inputValue, setInputValue] = useState(text || "");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;

    if (type === "currency-brl") {
      // Remove todos os caracteres não numéricos
      value = value.replace(/\D/g, "");
      // Formata como moeda BRL
      const formattedValue = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(parseFloat(value) / 100);
      setInputValue(formattedValue);
      if (onChange) onChange(formattedValue); // Chamando onChange com o valor formatado
    } else {
      setInputValue(value);
      if (onChange) onChange(value); // Chamando onChange com o valor atualizado
    }
  };

  const combinedStyles: React.CSSProperties = customStyle
    ? { ...styles.input, ...customStyle }
    : styles.input;

  const combinedLabelStyles = customLabelStyle
    ? { ...styles.label, ...customLabelStyle }
    : styles.label;

  const masterID = ID ? `${ID}-input` : "custom-input";

  return (
    <div>
      {label && (
        <label style={combinedLabelStyles} htmlFor={masterID}>
          {label}
        </label>
      )}
      <input
        type={type === "currency-brl" ? "text" : type}
        id={masterID}
        style={combinedStyles}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default CustomTextInput;
