import React, { useState } from "react";
import styles from "./style.module.css";
import emoji from "../../assets/svg/emoji.svg";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { states } from "../../utils/state";
import useMediaQuery from "../../Custom hooks/useMediaQuery";
import Button from "../../Components/Button";
import SignUpMessage from "../../screens/SignUpMessage";

const eye = <FontAwesomeIcon icon={faEye} />;

export default function AuthForm(props) {
  const matches = useMediaQuery("(min-width: 800px)");
  const [btnLoading, setBtnLoading] = useState(false);
  const [selectState, setSelectState] = useState("");
  const [firstPhase, setFirstPhase] = useState(true);
  const [secondPhase, setSecondPhase] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginPasswordShown, setLoginPasswordShown] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpPasswordShown, setSignUpPasswordShown] = useState("");
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");
  const [signUpConfirmPasswordShown, setSignUpConfirmPasswordShown] =
    useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [signupsuccess, setSignUpSucess] = useState(false);
  const toggleLoginPasswordVisiblity = () => {
    setLoginPasswordShown(loginPasswordShown ? false : true);
  };
  const toggleSignUpPasswordVisiblity = () => {
    setSignUpPasswordShown(signUpPasswordShown ? false : true);
  };
  const toggleSignUpConfirmPasswordVisiblity = () => {
    setSignUpPasswordShown(signUpConfirmPasswordShown ? false : true);
  };
  const handleStateChange = (event) => {
    setSelectState(event.target.value);
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const navigate = useNavigate();
  const navigateToSignup = () => {
    navigate({ pathname: "/signup", search: "type=vendor" });
  };
  const navigateToLogin = () => {
    navigate({ pathname: "/login", search: "type=vendor" });
  };
  const navigateToForgotPassword = () => {
    navigate({ pathname: "/forgot-password", search: "type=vendor" });
  };

  const switchToSecondPhase = () => {
    setFirstPhase(false);
    setSecondPhase(true);
  };

  //The data

  const SubmitLogin = () => {
    setBtnLoading(true);
    setTimeout(() => navigate("/vendor/dashboard"), 5000);
  };

  const SubmitSignup = () => {
    setBtnLoading(true);
    setTimeout(() => navigate("/sign-up-message"), 5000);
  };
  return (
    <div className={styles.holder}>
      <div className={styles.container}>
        {props.login ? (
          <>
            <div className={styles.formHolder}>
              <label>EMAIL ADDRESS</label>
              <input
                placeholder='email@host.co..'
                type='email'
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className={styles.formHolder}>
              <label>PASSWORD</label>
              <div className={styles.passWrapper}>
                <input
                  placeholder='Enter password'
                  name='password'
                  type={loginPasswordShown ? "text" : "password"}
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                <i onClick={toggleLoginPasswordVisiblity}>
                  {passwordShown ? <Visibility /> : <VisibilityOff />}
                </i>
              </div>
            </div>
            {props.login && (
              <div
                className={styles.forgotPassword}
                onClick={navigateToForgotPassword}>
                <p>Forgot Password</p>
              </div>
            )}
            {props.login && (
              <div className={styles.rememberMe}>
                <input type='CheckBox' />
                {props.login ? (
                  <p>Remember me</p>
                ) : (
                  <p>
                    I accept the <span>Terms and Conditions</span>
                  </p>
                )}
              </div>
            )}
            {props.login && (
              <div className={styles.footer}>
                <Button
                  text={"Login in"}
                  primary
                  invalid={
                    loginEmail?.length > 0 && loginPassword?.length > 0
                      ? false
                      : true
                  }
                  loading={btnLoading}
                  onClick={SubmitLogin}
                />
                <p>
                  <div className={styles.signUp}>
                    Don’t have an account?{" "}
                    <span onClick={navigateToSignup}>Sign up</span>
                  </div>
                </p>
              </div>
            )}
          </>
        ) : (
          <>
            {matches && (
              <>
                <form>
                  <div className={styles.formHolder}>
                    <label>COMPANY NAME</label>
                    <input
                      placeholder='Enter name'
                      type='text'
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                  <div className={styles.flexForm}>
                    <div className={styles.formHolder}>
                      <label>PHONE NUMBER </label>
                      <input
                        placeholder='+234  708 ...'
                        type='text'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div className={styles.formHolder}>
                      <label>EMAIL ADDRESS</label>
                      <input
                        placeholder='email@host.co..'
                        type='email'
                        value={signUpEmail}
                        onChange={(e) => setSignUpEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className={styles.formHolder}>
                    <label>COMPANY ADDRESS</label>
                    <input placeholder='Enter address' type='text' />
                  </div>
                  <div className={styles.formHolder}>
                    <label>SELECT STATE</label>
                    <select value={selectState} onChange={handleStateChange}>
                      <option value=''>Select state</option>
                      {states.map((state) => {
                        return (
                          <option key={state.code} value={state.name}>
                            {state.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className={styles.formHolder}>
                    <label>PASSWORD</label>
                    <div className={styles.passWrapper}>
                      <input
                        placeholder='Enter Preferred Password'
                        name='password'
                        type={signUpPasswordShown ? "text" : "password"}
                        value={signUpPassword}
                        onChange={(e) => setSignUpPassword(e.target.value)}
                      />
                      <i onClick={toggleSignUpPasswordVisiblity}>
                        {signUpPasswordShown ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </i>
                    </div>
                  </div>
                  <div className={styles.formHolder}>
                    <label>RECONFIRM PASSWORD</label>
                    <div className={styles.passWrapper}>
                      <input
                        placeholder='Enter Preferred Password'
                        name='password'
                        type={signUpConfirmPasswordShown ? "text" : "password"}
                        value={signUpConfirmPassword}
                        onChange={(e) =>
                          setSignUpConfirmPassword(e.target.value)
                        }
                      />
                      <i onClick={togglePasswordVisiblity}>
                        {signUpConfirmPasswordShown ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </i>
                    </div>
                  </div>
                </form>
              </>
            )}
            <form>
              {firstPhase && !matches ? (
                <>
                  <div className={styles.formHolder}>
                    <label>COMPANY NAME</label>
                    <input
                      placeholder='Enter name'
                      type='text'
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                  <div className={styles.flexForm}>
                    <div className={styles.formHolder}>
                      <label>PHONE NUMBER </label>
                      <input
                        placeholder='+234  708 ...'
                        type='text'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div className={styles.formHolder}>
                      <label>EMAIL ADDRESS</label>
                      <input
                        placeholder='email@host.co..'
                        type='email'
                        value={signUpEmail}
                        onChange={(e) => setSignUpEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className={styles.buttonContainer}>
                    <Button
                      text='Next'
                      primary
                      invalid={
                        companyName?.length > 0 &&
                        phoneNumber?.length > 0 &&
                        signUpEmail?.length > 0
                          ? false
                          : true
                      }
                      onClick={switchToSecondPhase}
                    />
                  </div>
                </>
              ) : null}
              {secondPhase && !matches ? (
                <>
                  <div className={styles.formHolder}>
                    <label>COMPANY ADDRESS</label>
                    <input
                      placeholder='Enter address'
                      type='text'
                      value={companyAddress}
                      onChange={(e) => setCompanyAddress(e.target.value)}
                    />
                  </div>
                  <div className={styles.formHolder}>
                    <label>SELECT STATE</label>
                    <select value={selectState} onChange={handleStateChange}>
                      <option value=''>Select state</option>
                      {states.map((state) => {
                        return (
                          <option key={state.code} value={state.name}>
                            {state.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className={styles.formHolder}>
                    <label>PASSWORD</label>
                    <div className={styles.passWrapper}>
                      <input
                        placeholder='Enter Preferred Password'
                        name='password'
                        type={signUpPasswordShown ? "text" : "password"}
                        value={signUpPassword}
                        onChange={(e) => setSignUpPassword(e.target.value)}
                      />
                      <i onClick={toggleSignUpPasswordVisiblity}>
                        {signUpPasswordShown ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </i>
                    </div>
                  </div>
                  <div className={styles.formHolder}>
                    <label>RECONFIRM PASSWORD</label>
                    <div className={styles.passWrapper}>
                      <input
                        placeholder='Enter Preferred Password'
                        name='password'
                        type={signUpConfirmPasswordShown ? "text" : "password"}
                      />
                      <i onClick={togglePasswordVisiblity}>
                        {signUpConfirmPasswordShown ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </i>
                    </div>
                  </div>
                  {!props.login && (
                    <div className={styles.rememberMe}>
                      <input type='CheckBox' />
                      {props.login ? (
                        <p>Remember me</p>
                      ) : (
                        <p>
                          I accept the <span>Terms and Conditions</span>
                        </p>
                      )}
                    </div>
                  )}
                  {!props.login && (
                    <div className={styles.footer}>
                      <button onClick={SubmitSignup}>
                        {props.login ? "Login in" : "Register"}
                      </button>
                      <p>
                        {props.login ? (
                          <div className={styles.signUp}>
                            Don’t have an account?{" "}
                            <span onClick={navigateToSignup}>Sign up</span>
                          </div>
                        ) : (
                          <div className={styles.signUp}>
                            Already have an account?{" "}
                            <span onClick={navigateToLogin}>Log in</span>
                          </div>
                        )}
                      </p>
                    </div>
                  )}
                </>
              ) : null}
            </form>
          </>
        )}

        {matches && !props.login ? (
          <div className={styles.rememberMe}>
            <input type='CheckBox' />
            {props.login ? (
              <p>Remember me</p>
            ) : (
              <p>
                I accept the <span>Terms and Conditions</span>
              </p>
            )}
          </div>
        ) : null}

        {matches && !props.login ? (
          <div className={styles.footer}>
            <Button
              text={"Register"}
              primary
              invalid={signUpEmail?.length > 0 ? false : true}
              onClick={SubmitSignup}
              loading={btnLoading}
            />
            <p>
              {props.login ? (
                <div className={styles.signUp}>
                  Don’t have an account?{" "}
                  <span onClick={navigateToSignup}>Sign up</span>
                </div>
              ) : (
                <div className={styles.signUp}>
                  Already have an account?{" "}
                  <span onClick={navigateToLogin}>Log in</span>
                </div>
              )}
            </p>
          </div>
        ) : null}
      </div>
      <img src={emoji} alt='' className={styles.emoji} />
    </div>
  );
}
