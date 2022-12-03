import React from "react";
import styles from "./style.module.css";
import PrimaryContainer from "../../containers/PrimaryContainer";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthContainer from "../../containers/AuthContainer";
import StartPage from "../StartPage";

export default function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const loginType = searchParams.get("type");

  // const goBackToStartPage = () => {
  //   navigate("/");
  // };

  if (loginType !== "customer" && loginType !== "vendor") return <StartPage />;

  return <AuthContainer login />;
}
