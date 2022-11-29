import React from "react";
import PrimaryContainer from "../PrimaryContainer";
import styles from "./style.module.css";
import VendorAuthForm from "../../forms/VendorAuthForm";
import CustomerAuthForm from "../../forms/CustomerAuthForm";
import { useSearchParams } from "react-router-dom";

export default function AuthContainer(props) {
  const [searchParams] = useSearchParams();
  const loginType = searchParams.get("type");
  const renderForm = {
    customer: <CustomerAuthForm login={props.login} />,
    vendor: <VendorAuthForm login={props.login} />,
  };

  return (
    <PrimaryContainer height={`80%`}>
      <div className={styles.flexContainer}>
        <div className={styles.textContainer}>
          {props.login ? (
            <p className={styles.login}>LOG IN</p>
          ) : (
            <p className={styles.login}>SIGN UP</p>
          )}
          <h1>No.1 Diesel Platform</h1>
          <p className={styles.subText}>
            {`${
              props.login ? "Log in" : "Sign up"
            } to see and compare vendors with the best offering in your
            local market.`}
          </p>
        </div>
        <div className={styles.formContainer}>{renderForm[loginType]}</div>
      </div>
    </PrimaryContainer>
  );
}
