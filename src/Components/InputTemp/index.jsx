import Select, { StylesConfig } from "react-select";
import styles from "./style.module.css";

// const selectStyles =

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
  isMulti,
  width,
}) => {
  //   const selectRef = useRef(null);
  return (
    <div
      className={`${styles.formHolder} ${marginLeft && styles.marginLeft} ${
        marginRight && styles.marginRight
      }`}
      style={{ width: width ? width : "100%" }}>
      <label>{label}</label>
      <Select
        value={value}
        styles={{
          multiValueLabel: (styles) => ({
            ...styles,
            fontFamily: "Sofia Pro",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "18px",
          }),
          indicatorSeparator: (styles) => ({
            ...styles,
            display: "none",
          }),
          multiValue: (styles) => ({
            ...styles,
            backgroundColor: "transparent",
            // padding: "13px 10px",
          }),
          valueContainer: (styles) => ({
            ...styles,
            height: "45px",
            paddingTop: "0px",
            margin: "0px",
            borderRadius: "8px",
            alignItems: "center",
          }),
          singleValue: (styles) => ({
            ...styles,
            // padding: "13px 10px",
          }),

          container: (styles) => ({
            ...styles,
            // position: "absolute",
          }),
          dropdownIndicator: (styles) => ({
            ...styles,
            // color: "#2F3930",
            strokeWidth: "1px",
            border: "none",
          }),
          placeholder: (styles) => ({
            ...styles,
            fontFamily: "Sofia Pro",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "18px",
            // backgroundColor: "green",
            // padding: "13px 10px",

            // height: "45px",
          }),
          multiValueRemove: (styles) => ({
            ...styles,
            backgroundColor: "transparent",
          }),
          clearIndicator: (styles) => ({
            ...styles,
            backgroundColor: "transparent",
          }),
          //   container: (styles) => ({ ...styles, borderRadius: "8px" }),
        }}
        options={options}
        placeholder={placeholder}
        isMulti={isMulti}
      />
      {children}
    </div>
  );
};
