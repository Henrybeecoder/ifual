import React from "react";
import styles from "./style.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthContainer from "../../containers/AuthContainer";
import StartPage from "../../screens/StartPage";
import { SignUpForm as Vendor } from "../../forms/AuthForms/Vendor";
import { SignUpForm as Customer } from "../../forms/AuthForms/Customer";
import { RenderPageProps } from "../../types/shared";

export default function SignUp() {
  const [searchParams] = useSearchParams();
  const signupType = searchParams.get("type");

  const renderPage: RenderPageProps = {
    customer: <Customer />,
    vendor: <Vendor />,
  };

  if (signupType !== "customer" && signupType !== "vendor")
    return <StartPage />;
  return (
    <div>
      <AuthContainer page='register'>{renderPage[signupType]}</AuthContainer>
    </div>
  );
}
