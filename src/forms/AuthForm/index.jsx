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

const eye = <FontAwesomeIcon icon={faEye} />;

export default function AuthForm(props) {
  const matches = useMediaQuery('(min-width: 800px)')
  const [selectState, setSelectState] = useState("")
  const [firstPhase, setFirstPhase] = useState(true)
  const [secondPhase, setSecondPhase] = useState(false)
  const handleStateChange = (event) => {
    setSelectState(event.target.value);
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

  const switchToSecondPhase = () => {
    setFirstPhase(false)
    setSecondPhase(true)
  }

  //The data

  const [companyName, setCompanyName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [signUpEmail, setSignUpEmail] = useState("")
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
          <>
            {matches && (
              <>
                <form>
                  <div className={styles.formHolder}>
                    <label>COMPANY NAME</label>
                    <input
                      placeholder="Enter name"
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)} />
                  </div>
                  <div className={styles.flexForm}>
                    <div className={styles.formHolder}>
                      <label>PHONE NUMBER </label>
                      <input
                        placeholder="+234  708 ..."
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                    <div className={styles.formHolder}>
                      <label>EMAIL ADDRESS</label>
                      <input
                        placeholder="email@host.co.."
                        type="email"
                        value={signUpEmail}
                        onChange={(e) => setSignUpEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className={styles.formHolder}>
                    <label>COMPANY ADDRESS</label>
                    <input placeholder="Enter address" type="text" />
                  </div>
                  <div className={styles.formHolder}>
                    <label>SELECT STATE</label>
                    <select value={selectState} onChange={handleStateChange}>
                      <option value="">Select state</option>
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
                        placeholder="Enter Preferred Password"
                        name="password"
                        type={passwordShown ? "text" : "password"}
                      />
                      <i onClick={togglePasswordVisiblity}>
                        {passwordShown ? <Visibility /> : <VisibilityOff />}
                      </i>
                    </div>
                  </div>
                  <div className={styles.formHolder}>
                    <label>RECONFIRM PASSWORD</label>
                    <div className={styles.passWrapper}>
                      <input
                        placeholder="Enter Preferred Password"
                        name="password"
                        type={passwordShown ? "text" : "password"}
                      />
                      <i onClick={togglePasswordVisiblity}>
                        {passwordShown ? <Visibility /> : <VisibilityOff />}
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
                      placeholder="Enter name"
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                  <div className={styles.flexForm}>
                    <div className={styles.formHolder}>
                      <label>PHONE NUMBER </label>
                      <input
                        placeholder="+234  708 ..."
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div className={styles.formHolder}>
                      <label>EMAIL ADDRESS</label>
                      <input
                        placeholder="email@host.co.."
                        type="email"
                        value={signUpEmail}
                        onChange={(e) => setSignUpEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className={styles.buttonContainer}>
                    <Button
                      text="Next"
                      primary
                      invalid={companyName?.length > 0 && phoneNumber?.length > 0 && signUpEmail?.length > 0 ? false : true} 
                      onClick={switchToSecondPhase}
                      />
                  </div>
                </>
              ) : (null)}
              {secondPhase && !matches ? (
                <>
                  <div className={styles.formHolder}>
                    <label>COMPANY ADDRESS</label>
                    <input placeholder="Enter address" type="text" />
                  </div>
                  <div className={styles.formHolder}>
                    <label>SELECT STATE</label>
                    <select value={selectState} onChange={handleStateChange}>
                      <option value="">Select state</option>
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
                        placeholder="Enter Preferred Password"
                        name="password"
                        type={passwordShown ? "text" : "password"}
                      />
                      <i onClick={togglePasswordVisiblity}>
                        {passwordShown ? <Visibility /> : <VisibilityOff />}
                      </i>
                    </div>
                  </div>
                  <div className={styles.formHolder}>
                    <label>RECONFIRM PASSWORD</label>
                    <div className={styles.passWrapper}>
                      <input
                        placeholder="Enter Preferred Password"
                        name="password"
                        type={passwordShown ? "text" : "password"}
                      />
                      <i onClick={togglePasswordVisiblity}>
                        {passwordShown ? <Visibility /> : <VisibilityOff />}
                      </i>
                    </div>

                  </div>
                </>
              ) : (null)}

            </form>
          </>
        )}
        {props.login && (<div
          className={styles.forgotPassword}
          onClick={navigateToForgotPassword}
        >
          <p>Forgot Password</p>
        </div>)}

        {matches ? (
          <div className={styles.rememberMe}>
            <input type="CheckBox" />
            {props.login ? (<p>Remember me</p>) : (<p>I accept the <span>Terms and Conditions</span></p>)}

          </div>) : (null)}
        {secondPhase && !matches ? (<div className={styles.rememberMe}>
          <input type="CheckBox" />
          {props.login ? (<p>Remember me</p>) : (<p>I accept the <span>Terms and Conditions</span></p>)}

        </div>) : (null)}
        {matches ? (
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
        ) : (null)}



      </div>
      <img src={emoji} alt="" className={styles.emoji} />
    </div>
  );
}
