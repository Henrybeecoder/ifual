import { ChangeEventHandler, HTMLInputTypeAttribute, ReactNode } from "react";
import Select, {
  ActionMeta,
  GroupBase,
  MultiValue,
  OptionsOrGroups,
  SingleValue,
} from "react-select";
import styles from "./style.module.css";

interface TextareaTempProps extends Omit<InputTempProps, "onChange"> {
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  rows?: number;
}

interface InputTempProps {
  label?: string;
  name?: string;
  id?: string;
  inputType?: HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  value?: string;
  children?: ReactNode;
  visibilityPadding?: boolean;
  marginRight?: boolean;
  marginLeft?: boolean;
  marginLeftSm?: boolean;
  marginRightSm?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const InputTemp = ({
  name,
  id,
  label,
  inputType,
  placeholder,
  value,
  onChange,
  children,
  visibilityPadding,
  marginRight,
  marginLeft,
  marginLeftSm,
  marginRightSm,
}: InputTempProps) => {
  return (
    <div
      className={`${styles.formHolder} ${
        marginLeftSm ? styles.marginLeftSm : marginLeft && styles.marginLeft
      } ${
        marginRightSm ? styles.marginRightSm : marginRight && styles.marginRight
      }`}>
      <label>{label}</label>
      <div className={styles.relative}>
        <input
          placeholder={placeholder}
          type={inputType}
          id={id}
          name={name}
          value={value}
          style={{ paddingRight: visibilityPadding ? "48px" : "7px" }}
          onChange={onChange}
        />
        {children}
      </div>
    </div>
  );
};

interface SelectTempProps {
  label?: string;
  name?: string;
  inputType?: HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  value?: any;
  onValueChange?: (
    newValue: MultiValue<string> | SingleValue<string>,
    actionMeta: ActionMeta<string>
  ) => void;
  children?: ReactNode;
  visibilityPadding?: string;
  marginRight?: boolean;
  marginLeft?: boolean;
  marginLeftSm?: boolean;
  marginRightSm?: boolean;
  options?: any[];
  isMulti?: boolean;
  width?: string | number;
}

export const SelectTemp = ({
  label,
  name,
  placeholder,
  value,
  onValueChange,
  children,
  visibilityPadding,
  options = [],
  marginLeft,
  marginRight,
  marginLeftSm,
  marginRightSm,
  isMulti,
  width,
}: SelectTempProps) => {
  //   const selectRef = useRef(null);
  return (
    <div
      className={`${styles.formHolder} ${
        marginLeftSm ? styles.marginLeftSm : marginLeft && styles.marginLeft
      } ${
        marginRightSm ? styles.marginRightSm : marginRight && styles.marginRight
      }`}
      style={{ width: width ? width : "100%" }}>
      <label>{label}</label>
      <Select
        value={value}
        onChange={onValueChange}
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

export const TextareaTemp = ({
  name,
  id,
  label,
  rows,
  placeholder,
  value,
  onChange,
  children,
  visibilityPadding,
  marginRight,
  marginLeft,
  marginLeftSm,
  marginRightSm,
}: TextareaTempProps) => {
  return (
    <div
      className={`${styles.formHolder} ${
        marginLeftSm ? styles.marginLeftSm : marginLeft && styles.marginLeft
      } ${
        marginRightSm ? styles.marginRightSm : marginRight && styles.marginRight
      }`}>
      <label>{label}</label>
      <div className={styles.relative}>
        <textarea
          placeholder={placeholder}
          id={id}
          name={name}
          value={value}
          rows={rows}
          style={{ paddingRight: visibilityPadding ? "48px" : "7px" }}
          onChange={onChange}
        />
        {children}
      </div>
    </div>
  );
};
