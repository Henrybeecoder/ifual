import React, { useReducer, useState } from "react";
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
import Checkbox from "../../Components/Checkbox";

const eye = <FontAwesomeIcon icon={faEye} />;

export default function AuthForm(props) {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width: 800px)");
  const [btnLoading, setBtnLoading] = useState(false);
  const [firstPhase, setFirstPhase] = useState(true);
  const [secondPhase, setSecondPhase] = useState(false);
  const [email, setEmail] = useState("");
  const [signupsuccess, setSignUpSucess] = useState(false);

  const switchToSecondPhase = () => {
    setFirstPhase(false);
    setSecondPhase(true);
  };

  //The data

  const submitLogin = () => {
    setBtnLoading(true);
    setTimeout(() => navigate("/dashboard"), 5000);
  };

  const submitSignup = () => {
    setBtnLoading(true);
    setTimeout(() => navigate("/sign-up-message"), 5000);
  };

  return (
    <div className={styles.holder}>
      <div className={styles.container}>
        {props.login ? (
          <Login
            email={email}
            setEmail={setEmail}
            login={submitLogin}
            btnLoading={btnLoading}
          />
        ) : (
          <SignUp
            email={email}
            setEmail={setEmail}
            signup={submitSignup}
            btnLoading={btnLoading}
          />
        )}
      </div>
      <img src={emoji} alt='' className={styles.emoji} />
    </div>
  );
}

const Login = (props) => {
  const navigate = useNavigate();
  const { email, setEmail, btnLoading, login } = props;
  const [passwordVisible, setPasswordVisibility] = useState(false);
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);

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

  return (
    <>
      <div className={styles.formHolder}>
        <label>EMAIL ADDRESS</label>
        <input
          placeholder='email@host.co..'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <InputTemp
        visibilityPadding
        label='PASSWORD'
        placeholder='Enter Password'
        value={password}
        onValueChange={setPassword}
        inputType={passwordVisible ? "text" : "password"}>
        <i className={styles.btnVisibility} onClick={togglePasswordVisiblity}>
          {passwordVisible ? <Visibility /> : <VisibilityOff />}
        </i>
      </InputTemp>
      <div className={styles.forgotPassword} onClick={navigateToForgotPassword}>
        <p>Forgot Password</p>
      </div>
      <div className={styles.rememberMe}>
        <Checkbox
          checked={rememberPassword}
          setChecked={toggleRememberPassword}
        />
        <p>Remember me</p>
      </div>
      <div className={styles.footer}>
        <Button
          text={"Log in"}
          primary
          invalid={email?.length > 0 && password?.length > 0 ? false : true}
          loading={btnLoading}
          onClick={login}
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

const SignUp = ({ email, setEmail, btnLoading, signup }) => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width: 800px)");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisibility] =
    useState(false);
  const [selectState, setSelectState] = useState("");
  const [acceptTermsAndConditions, setATC] = useState(false);

  const [phase, setPhase] = useState("first");

  const handleStateChange = (event) => {
    setSelectState(event.target.value);
  };

  const togglePasswordVisiblity = () => {
    setPasswordVisibility((state) => !state);
  };

  const toggleConfirmPasswordVisiblity = () => {
    setConfirmPasswordVisibility((state) => !state);
  };

  const switchPhase = (phase) => {
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
              />
              <InputTemp
                label='SURNAME'
                placeholder='Last name'
                inputType='text'
                name='lastName'
              />
            </div>
            <div className={styles.flexForm}>
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
              setChecked={toggleATC}
            />
            <p>
              I accept the <span>Terms and Conditions</span>
            </p>
          </div>

          <div className={styles.footer}>
            <Button
              text={"Register"}
              primary
              invalid={email?.length > 0 ? false : true}
              onClick={signup}
              loading={btnLoading}
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
              <Button
                text='Next'
                primary
                // invalid={
                //   companyName?.length > 0 &&
                //   phoneNumber?.length > 0 &&
                //   signUpEmail?.length > 0
                //     ? false
                //     : true
                // }
                onClick={() => switchPhase("second")}
              />
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
                setChecked={toggleATC}
              />
              <p>
                I accept the <span>Terms and Conditions</span>
              </p>
            </div>
            <div className={styles.footer}>
              <Button text='Register' loading={btnLoading} onClick={signup} />
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

const InputTemp = ({
  label,
  name,
  inputType,
  placeholder,
  value,
  onValueChange,
  children,
  visibilityPadding,
}) => {
  return (
    <div className={styles.formHolder}>
      <label>{label}</label>
      <input
        placeholder={placeholder}
        type={inputType}
        name={name}
        value={value}
        style={{ paddingRight: visibilityPadding ? "48px" : "7px" }}
        onChange={(e) => onValueChange(e.target.value)}
      />
      {children}
    </div>
  );
};
