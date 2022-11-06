import React from "react";
import styles from "./style.module.css";

export default function Modal(props) {
  return (
    <>
      {props.openModal && (
        <div className={styles.ErrorBg} onClick={props.closeModal}>
          <div
            className={styles.ErrorContain}
            style={!props.width ? { width: "40%" } : { width: props.width }}
          >
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
