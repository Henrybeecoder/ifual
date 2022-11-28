import React from "react";
import styles from "./style.module.css";
import X from "../../assets/svg/x.svg";

export default function Modal(props) {
  return (
    <>
      {props.openModal && (
        <div className={styles.ErrorBg}>
          <div
            className={styles.outerContainer}
            style={!props.width ? { width: "40%" } : { width: props.width }}>
            {props.closeModal && (
              <button className={styles.closeModalX} onClick={props.closeModal}>
                <img src={X} />
              </button>
            )}

            <div className={styles.ErrorContain}>{props.children}</div>
          </div>
        </div>
      )}
    </>
  );
}
