import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthContainer from "../../containers/AuthContainer";
import StartPage from "../StartPage";

export default function Login() {
  const [searchParams] = useSearchParams();
  const loginType = searchParams.get("type");

  if (loginType !== "customer" && loginType !== "vendor") return <StartPage />;

  return <AuthContainer page='login' />;
}
