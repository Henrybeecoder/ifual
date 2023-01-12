import React from "react";
import styles from "./style.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthContainer from "../../containers/AuthContainer";

export default function SignUp() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const signUpType = searchParams.get("type");

  const goBackToStartPage = () => {
    navigate("/");
  };

  if (signUpType !== "customer" && signUpType !== "vendor")
    return (
      <div className={styles.container}>
        <p>please select a user type</p>
        <button className={styles.btnBack} onClick={goBackToStartPage}>
          Back
        </button>
      </div>
    );
  return (
    <div>
      <AuthContainer page='register' />
    </div>
  );
}
