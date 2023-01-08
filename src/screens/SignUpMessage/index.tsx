import React from "react";
import PrimaryContainer from "../../containers/PrimaryContainer";
import styles from "./style.module.css";

const SignUpMessage = () => {
  return (
    <div>
      <PrimaryContainer droplet>
        <div className={styles.container}>
          <p className={styles.message}>
            A password reset mail has been sent to ***@gmail.com
          </p>
          <p>
            Kindly ckeck your email and click the link provided to reset your
            password.
          </p>
        </div>
      </PrimaryContainer>
    </div>
  );
};

export default SignUpMessage;
