import React from "react";
import styles from "./LabeledInput.module.css";

type LabeledInputProps = {
  placeholder: string;
  value: string | number;
  type?: string;
  required?: boolean;
  onChange: (value: string) => void;
};

function LabeledInput({
  placeholder,
  value,
  type,
  required,
  onChange,
}: LabeledInputProps): JSX.Element {
  return (
    <label className={styles.container}>
      <input
        className={styles.container__input}
        placeholder={placeholder}
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

export default LabeledInput;
