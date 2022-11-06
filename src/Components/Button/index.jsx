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

      {props.invalid ? (
        <button
          className={styles.invalidButton}
          style={props.width ? { width: props.width } : { width: "100%" }}
          disabled
        >
          {props.text}
        </button>
      ) : (
        <button
          className={
            props.primary
              ? `${props.className} ${styles.primaryButton}`
              : `${styles.secondaryButton}`
          }
          style={props.width ? { width: props.width } : { width: "100%" }}
          onClick={props.onClick}
        >
          {props.text}
        </button>
      )}
    </>
  );
}
