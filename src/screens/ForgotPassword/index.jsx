import React from "react";
import PrimaryContainer from "../../containers/PrimaryContainer";
import styles from "./style.module.css";
import Button from "../../Components/Button";

export default function ForgotPassword() {
  return (
    <PrimaryContainer droplet height="70%">
      <div className={styles.container}>
        <p className={styles.ForgotPassword}>Forgot Password?</p>
        <p className={styles.subText}>Please enter your registered email address</p>
        <input placeholder="email@host.co.. " />
        <div className={styles.flexButton}>
          <Button text={`Back`} className={styles.backButton} width="40%"/>
          <Button text={`Submit`} primary className={styles.submitButton} width="60%"/>
        </div>
      </div>
    </PrimaryContainer>
  );
}
