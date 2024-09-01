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
  onSelect: (selectedOptions: string[]) => void;
  label?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  ID,
  customStyle,
  options,
  onSelect,
  label,
  customLabelStyle
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(selectedValues);
    onSelect(selectedValues);
  };

  const combinedStyles = customStyle
    ? { ...styles.select, ...customStyle }
    : styles.select;

    const combinedLabelStyles = customLabelStyle ? {
      ...styles.label, ...customLabelStyle
    } : styles.label

  const masterID = ID ? `${ID}-select` : "custom-select";

  return (
    <div>
      {label && <label style={combinedLabelStyles} htmlFor={masterID}>{label}</label>}
      <select
        id={masterID}
        style={combinedStyles}
        multiple
        value={selectedOptions}
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
