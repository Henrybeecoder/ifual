import React from "react";
import styles from "./style.module.css";

export default function Button({
  loading,
  invalid,
  primary,
  onClick,
  width,
  className,
  text,
}) {
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
