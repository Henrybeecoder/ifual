import React, { ReactNode } from "react";
import styles from "./style.module.css";
import X from "../../assets/svg/x.svg";

interface ModalProps {
  name?: string;
  children?: ReactNode;
  openModal?: boolean;
  closeModal?: () => void;
  width?: "lg" | "md" | "sm" | "xl";
  variant?: "default" | "unstyled";
}

export default function Modal({
  children,
  openModal,
  closeModal,
  width = "lg",
  variant = "default",
}: ModalProps) {
  return (
    <>
      {openModal && (
        <div className={styles.overlay}>
          <div className={`${styles.outerContainer} ${styles[width]}`}>
            {closeModal && (
              <button className={styles.closeModalX} onClick={closeModal}>
                <img src={X} />
              </button>
            )}

            <div className={`${styles.modal} ${styles[variant]}`}>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
