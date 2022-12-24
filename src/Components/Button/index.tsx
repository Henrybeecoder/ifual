import { CSSProperties } from "react";
import styles from "./style.module.css";

interface ButtonProps {
  variant?: "primary" | "outline" | "danger" | "dark" | "danger-outline";
  invalid?: boolean;
  onClick?: () => void;
  width?: string;
  height?: string;
  className?: string;
  style?: CSSProperties;
  text: string;
  type?: "submit" | "button" | "reset";
}

// const applyStyles = {}

const Button = ({
  invalid,
  onClick,
  width = "100%",
  height = "45px",
  className,
  type,
  text,
  style,
  variant = "outline",
}: ButtonProps) => {
  return (
    <button
      disabled={invalid}
      className={`${styles.btn} ${variant ? styles[variant] : ""} ${
        className || ""
      } 
        `}
      style={{ width, height, ...style }}
      onClick={onClick}
      type={type}>
      {text}
    </button>
  );
};

export default Button;

interface LinkButtonProps {
  variant?: "primary" | "default" | "danger";
  invalid?: boolean;
  onClick?: () => void;
  width?: string;
  height?: string;
  className?: string;
  style?: CSSProperties;
  text: string;
  type?: "submit" | "button" | "reset";
}

export const LinkButton = ({
  text,
  variant,
  className,
  style,
  invalid,
  onClick,
  type = "button",
  width = "fit-content",
}: LinkButtonProps) => {
  return (
    <button
      disabled={invalid}
      className={`${styles.linkBtn} ${
        variant ? styles[`link-${variant}`] : ""
      } ${className || ""} 
        `}
      style={{ width, ...style }}
      onClick={onClick}
      type={type}>
      {text}
    </button>
  );
};
