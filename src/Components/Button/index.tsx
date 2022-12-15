import React from "react";
import styles from "./style.module.css";

interface ButtonProps {
  invalid?: boolean;
  primary?: boolean;
  onClick?: () => void;
  width?: string;
  className?: string;
  text: string;
  type?: "submit" | "button" | "reset";
}

export default function Button({
  invalid,
  primary,
  onClick,
  width,
  className,
  type,
  text,
}: ButtonProps) {
  return (
    <button
      disabled={invalid}
      className={`
          ${
            primary ? styles.primaryButton : styles.secondaryButton
          } ${className} ${styles.Btn}
        `}
      style={{ width: width ? width : "100%" }}
      onClick={onClick}
      type={type}>
      {text}
    </button>
  );
}
