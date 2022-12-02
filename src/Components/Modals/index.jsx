import React from "react";
import styles from "./style.module.css";
import X from "../../assets/svg/x.svg";

export default function Modal({ children, openModal, closeModal, width }) {
  return (
    <>
      {openModal && (
        <div className={styles.ErrorBg}>
          <div
            className={styles.outerContainer}
            style={!width ? { width: "40%" } : { width }}>
            {closeModal && (
              <button className={styles.closeModalX} onClick={closeModal}>
                <img src={X} />
              </button>
            )}

            <div className={styles.ErrorContain}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
