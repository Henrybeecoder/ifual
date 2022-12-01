import { useRef } from "react";
import styles from "./style.module.css";

export const InputTemp = ({
  label,
  name,
  inputType,
  placeholder,
  value,
  onValueChange,
  children,
  visibilityPadding,
  marginRight,
  marginLeft,
}) => {
  return (
    <div
      className={`${styles.formHolder} ${marginLeft && styles.marginLeft} ${
        marginRight && styles.marginRight
      }`}>
      <label>{label}</label>
      <input
        placeholder={placeholder}
        type={inputType}
        name={name}
        value={value}
        style={{ paddingRight: visibilityPadding ? "48px" : "7px" }}
        onChange={(e) => onValueChange(e.target.value)}
      />
      {children}
    </div>
  );
};

export const SelectTemp = ({
  label,
  name,
  placeholder,
  value,
  onValueChange,
  children,
  visibilityPadding,
  options,
  marginLeft,
  marginRight,
}) => {
  //   const selectRef = useRef(null);
  return (
    <div
      className={`${styles.formHolder} ${marginLeft && styles.marginLeft} ${
        marginRight && styles.marginRight
      }`}>
      <label>{label}</label>
      {/* <button
        className={styles.selectBox}
        onClick={() => {
          if (selectRef.current) selectRef.current?.focus();
        }}>
        <p>{placeholder}</p>
      </button> */}
      <select>
        <option value={value}>{placeholder}</option>
        {options?.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      {children}
    </div>
  );
};
