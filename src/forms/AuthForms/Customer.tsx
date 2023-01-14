import React, { useState } from "react";
import styles from "./style.module.css";
import emoji from "../../assets/svg/emoji.svg";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { states } from "../../utils/state";
import useMediaQuery from "../../Custom hooks/useMediaQuery";
import Button from "../../Components/Button";
import Checkbox from "../../Components/Checkbox";
import { InputTemp } from "../../Components/InputTemp";
import Loading from "../../Components/Loading";

interface SignUpDetails {
  email: string;
}

export const LoginForm = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisibility] = useState(false);
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordVisibility((state) => !state);
  };
  const navigateToForgotPassword = () => {
    navigate({ pathname: "/forgot-password", search: "type=customer" });
  };

  const navigateToSignup = () => {
    navigate({ pathname: "/signup", search: "type=customer" });
  };

  const toggleRememberPassword = () => {
    setRememberPassword((state) => !state);
  };

  const login = () => {
    setLoading(true);
    localStorage.setItem(
      "user",
      JSON.stringify({ email: "email.com", name: "Bistro Badmus" })
    );
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 3000);
  };

  const submitSignup = () => {
    setLoading(true);
    setTimeout(() => navigate("/sign-up-message"), 5000);
  };

  return (
    <>
      {loading && <Loading />}
      <InputTemp
        label='EMAIL ADDRESS'
        placeholder='email@host.co..'
        inputType='email'
      />
      <InputTemp
        visibilityPadding
        label='PASSWORD'
        placeholder='Enter Password'
        // value={password}
        inputType={passwordVisible ? "text" : "password"}>
        <i className={styles.btnVisibility} onClick={togglePasswordVisiblity}>
          {passwordVisible ? <Visibility /> : <VisibilityOff />}
        </i>
      </InputTemp>
      <div className={styles.forgotPassword}>
        <button onClick={navigateToForgotPassword}>Forgot Password</button>
      </div>
      <div className={styles.rememberMe}>
        <Checkbox
          checked={rememberPassword}
          toggleChecked={toggleRememberPassword}
        />
        <p>Remember me</p>
      </div>
      <div className={styles.footer}>
        <Button
          text={"Log in"}
          variant='primary'
          // invalid={email?.length > 0 && password?.length > 0 ? false : true}
          onClick={() => login()}
        />
        <p>
          <div className={styles.signUp}>
            Don’t have an account?{" "}
            <span onClick={navigateToSignup}>Sign up</span>
          </div>
        </p>
      </div>
    </>
  );
};

export const SignUpForm = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width: 800px)");
  const [passwordVisible, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisibility] =
    useState(false);
  const [selectState, setSelectState] = useState("");
  const [acceptTermsAndConditions, setATC] = useState(false);

  const [phase, setPhase] = useState("first");

  const handleStateChange = (event: any) => {
    setSelectState(event.target.value);
  };

  const togglePasswordVisiblity = () => {
    setPasswordVisibility((state) => !state);
  };

  const toggleConfirmPasswordVisiblity = () => {
    setConfirmPasswordVisibility((state) => !state);
  };

  const switchPhase = (phase: string) => {
    setPhase(phase);
  };

  const toggleATC = () => {
    setATC((state) => !state);
  };

  const navigateToLogin = () => {
    navigate({ pathname: "/login", search: "?type=customer" });
  };

  return (
    <>
      {matches && (
        <>
          <form>
            <div className={styles.flexForm}>
              <InputTemp
                label='FIRST NAME'
                placeholder='Name'
                inputType='text'
                name='firstName'
                marginRight
              />
              <InputTemp
                label='SURNAME'
                placeholder='Last name'
                inputType='text'
                marginLeft
                name='lastName'
              />
            </div>
            <div className={styles.flexForm}>
              <InputTemp
                label='PHONE NUMBER'
                marginRight
                placeholder='+234  708 ...'
                inputType='tel'
                name='phoneNo'
              />
              <InputTemp
                label='EMAIL ADDRESS'
                marginLeft
                placeholder='email@host.co.. '
                inputType='email'
                name='email'
              />
            </div>

            <InputTemp label='HOUSE ADDRESS' placeholder='Enter address' />
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
            <InputTemp
              visibilityPadding
              label='PASSWORD'
              placeholder='Enter Preferred Password'
              inputType={passwordVisible ? "text" : "password"}>
              <i
                className={styles.btnVisibility}
                onClick={togglePasswordVisiblity}>
                {passwordVisible ? <Visibility /> : <VisibilityOff />}
              </i>
            </InputTemp>

            <InputTemp
              visibilityPadding
              label='RECONFIRM PASSWORD'
              inputType={confirmPasswordVisible ? "text" : "password"}
              placeholder='Enter Preferred Password'>
              <i
                onClick={toggleConfirmPasswordVisiblity}
                className={styles.btnVisibility}>
                {confirmPasswordVisible ? <Visibility /> : <VisibilityOff />}
              </i>
            </InputTemp>
          </form>
          <div className={styles.rememberMe}>
            <Checkbox
              checked={acceptTermsAndConditions}
              toggleChecked={toggleATC}
            />
            <p>
              I accept the <span>Terms and Conditions</span>
            </p>
          </div>

          <div className={styles.footer}>
            <Button
              text={"Register"}
              // invalid={email?.length > 0 ? false : true}
              // onClick={() => signup({ email })}
            />
            <p>
              <div className={styles.signUp}>
                Already have an account?{" "}
                <span onClick={navigateToLogin}>Log in</span>
              </div>
            </p>
          </div>
        </>
      )}
      {/* mobile */}
      <form onSubmit={(e) => e.preventDefault()}>
        {phase === "first" && !matches ? (
          <>
            <div className={styles.flexForm}>
              <InputTemp
                label='FIRST NAME'
                placeholder='Name'
                inputType='text'
                name='firstName'
              />
              <InputTemp
                label='SURNAME'
                placeholder='Last name'
                inputType='text'
                name='lastName'
              />
            </div>
            <InputTemp
              label='PHONE NUMBER'
              placeholder='+234  708 ...'
              inputType='tel'
              name='phoneNo'
            />
            <InputTemp
              label='EMAIL ADDRESS'
              placeholder='email@host.co.. '
              inputType='email'
              name='email'
            />
            <div className={styles.buttonContainer}>
              <Button text='Next' onClick={() => switchPhase("second")} />
            </div>
          </>
        ) : null}
        {/* mobile second screen */}
        {phase === "second" && !matches ? (
          <>
            <InputTemp
              label='HOUSE ADDRESS'
              placeholder='Enter address'
              inputType='text'
              name='address'
            />
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
            <InputTemp
              visibilityPadding
              label='PASSWORD'
              placeholder='Enter Preferred Password'
              inputType={passwordVisible ? "text" : "password"}>
              <i
                className={styles.btnVisibility}
                onClick={togglePasswordVisiblity}>
                {passwordVisible ? <Visibility /> : <VisibilityOff />}
              </i>
            </InputTemp>

            <InputTemp
              visibilityPadding
              label='RECONFIRM PASSWORD'
              inputType={confirmPasswordVisible ? "text" : "password"}
              placeholder='Enter Preferred Password'>
              <i
                onClick={toggleConfirmPasswordVisiblity}
                className={styles.btnVisibility}>
                {confirmPasswordVisible ? <Visibility /> : <VisibilityOff />}
              </i>
            </InputTemp>

            <div className={styles.rememberMe}>
              <Checkbox
                checked={acceptTermsAndConditions}
                toggleChecked={toggleATC}
              />
              <p>
                I accept the <span>Terms and Conditions</span>
              </p>
            </div>
            <div className={styles.footer}>
              <Button text='Register' />
              <p>
                <div className={styles.signUp}>
                  Already have an account?{" "}
                  <span onClick={navigateToLogin}>Log in</span>
                </div>
              </p>
            </div>
          </>
        ) : null}
      </form>
    </>
  );
};
