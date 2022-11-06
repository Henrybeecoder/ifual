import React, { useState } from "react";
import styles from "./style.module.css";
import emoji from "../../assets/svg/emoji.svg";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;

export default function AuthForm(props) {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
    email: "",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const navigate = useNavigate();
  const navigateToSignup = () => {
    navigate("/signup");
  };
  const navigateToForgotPassword = () => {
    navigate("/forgot-password");
  };
  return (
    <div className={styles.holder}>
      <div className={styles.container}>
        {props.login ? (
          <form>
            <div className={styles.formHolder}>
              <label>EMAIL ADDRESS</label>
              <input placeholder="email@host.co.." type="email" />
            </div>
            <div className={styles.formHolder}>
              <label>PASSWORD</label>
              <div className={styles.passWrapper}>
                <input
                  placeholder="Enter password"
                  name="password"
                  type={passwordShown ? "text" : "password"}
                />
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? <Visibility /> : <VisibilityOff />}
                </i>
              </div>
            </div>
          </form>
        ) : (
          "Sign Up Auth Form"
        )}
        <div
          className={styles.forgotPassword}
          onClick={navigateToForgotPassword}
        >
          <p>Forgot Password</p>
        </div>
        <div className={styles.rememberMe}>
          <input type="CheckBox" />
          <p>Remember me</p>
        </div>
        <div className={styles.footer}>
          <button>{props.login ? "Login in" : "Register"}</button>
          <p>
            {props.login ? (
              <div className={styles.signUp}>
                Don’t have an account?{" "}
                <span onClick={navigateToSignup}>Sign up</span>
              </div>
            ) : (
              "Already have an account? Log in"
            )}
          </p>
        </div>
      </div>
      <img src={emoji} alt="" className={styles.emoji} />
    </div>
  );
}
