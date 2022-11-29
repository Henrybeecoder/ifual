import React from "react";
import styles from "./style.module.css";

export default function Button(props) {
  return (
    <>
      {props.loading && (
        <div>
          <div className={styles.loading}></div>
        </div>
      )}

      <button
        disabled={props.invalid}
        className={`
          ${props.primary ? styles.primaryButton : styles.secondaryButton} ${
          props.className
        } ${styles.Btn}
        `}
        style={{ width: props.width ? props.width : "100%" }}
        onClick={props.onClick}>
        {props.text}
      </button>
    </>
  );
}
