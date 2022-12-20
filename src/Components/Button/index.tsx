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

export default function Button({
  invalid,
  onClick,
  width = "100%",
  height = "52px",
  className,
  type,
  text,
  style,
  variant = "outline",
}: ButtonProps) {
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
}
