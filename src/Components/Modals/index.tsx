import React, { ReactNode } from "react";
import styles from "./style.module.css";
import X from "../../assets/svg/x.svg";

interface ModalProps {
  name?: string;
  children?: ReactNode;
  openModal?: boolean;
  closeModal?: () => void;
  width?: string | number;
}

export default function Modal({
  children,
  openModal,
  closeModal,
  width,
}: ModalProps) {
  return (
    <>
      {openModal && (
        <div className={styles.overlay}>
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
