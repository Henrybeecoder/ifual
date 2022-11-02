import React from "react";
import PrimaryContainer from "../PrimaryContainer";
import styles from "./style.module.css";
import AuthForm from "../../forms/AuthForm";

export default function AuthContainer(props) {
  return (
    <PrimaryContainer>
      <div className={styles.flexContainer}>
        <div className={styles.textContainer}>
          {props.login ? <p>LOG IN</p> : <p>SIGN UP</p>}
          <h1>No.1 Diesel Platform</h1>
          <p>
            {`${props.login ? "Log in" : "Sign up"} to see and compare vendors with the best offering in your
            local market.`}
          </p>
        </div>
        <div className={styles.formContainer}>
          <AuthForm login={props.login}/>
        </div>
      </div>
    </PrimaryContainer>
  );
}
