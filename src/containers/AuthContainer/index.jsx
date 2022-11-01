import React from "react";
import PrimaryContainer from "../PrimaryContainer";
import styles from "./style.module.css";
import AuthForm from "../../forms/AuthForm";

export default function AuthContainer({ login }) {
  return (
    <PrimaryContainer>
      <div className={styles.flexContainer}>
        <div className={styles.textContainer}>
          {login ? <p>LOG IN</p> : <p>SIGN UP</p>}
          <h1>No.1 Diesel Platform</h1>
          <p>
            {`${login ? "Log in" : "Sign up"} to see and compare vendors with the best offering in your
            local market.`}
          </p>
        </div>
        <div className={styles.formContainer}>
          <AuthForm login={login}/>
        </div>
      </div>
    </PrimaryContainer>
  );
}
