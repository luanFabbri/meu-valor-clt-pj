import React, { useState } from "react";
import { styles } from "./CustomSelect.styles";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  ID?: string;
  customStyle?: React.CSSProperties;
  customLabelStyle?: React.CSSProperties;
  options: Option[];
  onChange: (selectedOption: string) => void; // Ajuste para retornar uma única string
  label?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  ID,
  customStyle,
  customLabelStyle,
  options,
  onChange,
  label,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value); // Passa o valor selecionado
  };

  const combinedStyles = customStyle
    ? { ...styles.select, ...customStyle }
    : styles.select;

  const combinedLabelStyles = customLabelStyle
    ? { ...styles.label, ...customLabelStyle }
    : styles.label;

  const masterID = ID ? `${ID}-select` : "custom-select";

  return (
    <div>
      {label && (
        <label style={combinedLabelStyles} htmlFor={masterID}>
          {label}
        </label>
      )}
      <select
        id={masterID}
        style={combinedStyles}
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
