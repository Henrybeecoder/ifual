import React from "react";
import styles from "./style.module.css";

interface ButtonProps{
  loading?:string
  invalid?:boolean
  primary?:boolean
  onClick?:()=>void
  width?:string
  className?:string
  text:string
}

export default function Button({
  loading,
  invalid,
  primary,
  onClick,
  width,
  className,
  text,
}:ButtonProps) {
  return (
    <>
      {loading && (
        <div>
          <div className={styles.loading}></div>
        </div>
      )}

      <button
        disabled={invalid}
        className={`
          ${
            primary ? styles.primaryButton : styles.secondaryButton
          } ${className} ${styles.Btn}
        `}
        style={{ width: width ? width : "100%" }}
        onClick={onClick}>
        {text}
      </button>
    </>
  );
}
