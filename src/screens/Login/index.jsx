import React from "react";
import styles from "./style.module.css";
import PrimaryContainer from "../../containers/PrimaryContainer";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthContainer from "../../containers/AuthContainer";

export default function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const loginType = searchParams.get("type");

  const goBackToStartPage = () => {
    navigate("/");
  };

  if (loginType !== "customer" && loginType !== "vendor")
    return (
      <div className={styles.container}>
        <p>please select a user type</p>
        <button className={styles.btnBack} onClick={goBackToStartPage}>
          Back
        </button>
      </div>
    );

  return <AuthContainer login />;
}
