import React from "react";
import PrimaryContainer from "../PrimaryContainer";
import styles from "./style.module.css";
import VendorAuthForm from "../../forms/AuthForms/Vendor";
import CustomerAuthForm from "../../forms/AuthForms/Customer";
import { useSearchParams } from "react-router-dom";
import { AuthContainerProps, RenderPageProps } from "@type/shared";

export default function AuthContainer(props: AuthContainerProps) {
  const [searchParams] = useSearchParams();
  const loginType = searchParams.get("type");

  const renderForm: RenderPageProps = {
    customer: <CustomerAuthForm page={props.page} />,
    vendor: <VendorAuthForm page={props.page} />,
  };

  return (
    <PrimaryContainer height={`80%`}>
      <div className={styles.flexContainer}>
        <div className={styles.textContainer}>
          {props.page === "login" ? (
            <p className={styles.login}>LOG IN</p>
          ) : (
            <p className={styles.login}>SIGN UP</p>
          )}
          <h1>No.1 Diesel Platform</h1>
          <p className={styles.subText}>
            {`${
              props.page === "login" ? "Log in" : "Sign up"
            } to see and compare vendors with the best offering in your
            local market.`}
          </p>
        </div>
        <div className={styles.formContainer}>
          {loginType ? renderForm[loginType] : null}
        </div>
      </div>
    </PrimaryContainer>
  );
}
