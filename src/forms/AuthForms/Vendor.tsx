import { useState } from "react";
import styles from "./style.module.css";
import emoji from "../../assets/svg/emoji.svg";
import { useNavigate } from "react-router-dom";
import { states } from "../../utils/state";
import useMediaQuery from "../../Custom hooks/useMediaQuery";
import Button from "../../Components/Button";
import Checkbox from "../../Components/Checkbox";
import { AuthContainerProps } from "@type/shared";
import { InputTemp, SelectTemp } from "@components/InputTemp";
import { Formik } from "formik";
import { customerAuthSchema } from "@lib/validation/customer";
import { ReactComponent as HidePwd } from "../../assets/svg/hide.svg";
import { ReactComponent as ShowPwd } from "../../assets/svg/show.svg";
import Loading from "@components/Loading";

interface LoginValues {
  email: string;
  password: string;
}

interface LoginProps {
  email: string;
  setEmail: (value: string) => void;
  login: (values: LoginValues) => void;
}

interface SignUpDetails {
  email: string;
}

interface SignUpProps {
  email: string;
  setEmail: (value: string) => void;
  signup: (details: SignUpDetails) => void;
}

export default function AuthForm({ page }: AuthContainerProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const login = (values: LoginValues) => {
    setLoading(true);
    localStorage.setItem(
      "user",
      JSON.stringify({ email: values.email, name: "Bistro Badmus" })
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
    <div className={styles.holder}>
      <div className={styles.container}>
        <>{loading && <Loading />}</>
        {page === "login" ? (
          <Login email={email} setEmail={setEmail} login={login} />
        ) : (
          <SignUp email={email} setEmail={setEmail} signup={submitSignup} />
        )}
        <img src={emoji} alt='' className={styles.emoji} />
      </div>
    </div>
  );
}

const Login = ({ email, setEmail, login }: LoginProps) => {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(false);
  const [rP, setRP] = useState(false);

  const navigateToForgotPassword = () => {
    navigate({ pathname: "/forgot-password", search: "type=vendor" });
  };

  const navigateToSignup = () => {
    navigate({ pathname: "/signup", search: "type=vendor" });
  };

  const initialValues = { email: "", password: "" };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={customerAuthSchema.login}
      onSubmit={login}>
      {({ dirty, handleSubmit, getFieldProps }) => (
        <form onSubmit={handleSubmit}>
          <InputTemp
            label='EMAIL ADDRESS'
            inputType={"email"}
            placeholder='email@host.co..'
            {...getFieldProps("email")}
          />
          <InputTemp
            visibilityPadding
            label='PASSWORD'
            placeholder='Enter Password'
            inputType={showPwd ? "text" : "password"}
            {...getFieldProps("password")}>
            <i
              className={styles.btnVisibility}
              onClick={() => setShowPwd((state) => !state)}>
              {showPwd ? <ShowPwd /> : <HidePwd />}
            </i>
          </InputTemp>
          <div className={styles.forgotPassword}>
            <button onClick={navigateToForgotPassword}>Forgot Password</button>
          </div>
          <div className={styles.rememberMe}>
            <Checkbox
              checked={rP}
              toggleChecked={() => setRP((state) => !state)}
            />
            <p>Remember me</p>
          </div>
          <div className={styles.footer}>
            <Button
              text={"Log in"}
              variant='primary'
              invalid={!dirty}
              type='submit'
            />
            <div className={styles.signUp}>
              Don’t have an account?{" "}
              <span onClick={navigateToSignup}>Sign up</span>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

const SignUp = ({ email, setEmail, signup }: SignUpProps) => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width: 800px)");
  const [pV, setPV] = useState(false);
  const [cPV, setCPV] = useState(false);
  const [selectState, setSelectState] = useState("");

  const [phase, setPhase] = useState("first");

  const handleStateChange = (event: any) => {
    setSelectState(event.target.value);
  };

  const navigateToLogin = () => {
    navigate({ pathname: "/login", search: "?type=vendor" });
  };

  const initialValues = {
    companyName: "",
    phoneNo: "0007",
    email: "ee",
    companyAddress: "addre",
    state: { value: "abia", label: "Abia" },
    password: "ddd",
    confirmPassword: "ww",
    acceptTOC: false,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={customerAuthSchema.register}
      onSubmit={(values) => {
        console.log(values);
      }}>
      {({
        dirty,
        handleSubmit,
        getFieldProps,
        values,
        errors,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          {matches && (
            <>
              <InputTemp
                label='COMPANY NAME'
                placeholder='Enter name'
                inputType='text'
                {...getFieldProps("companyName")}
              />
              <div className={styles.flexForm}>
                <InputTemp
                  label='PHONE NUMBER'
                  marginRight
                  placeholder='+234  708 ...'
                  inputType='tel'
                  {...getFieldProps("phoneNo")}
                />
                <InputTemp
                  label='EMAIL ADDRESS'
                  marginLeft
                  placeholder='email@host.co.. '
                  inputType='email'
                  {...getFieldProps("email")}
                />
              </div>

              <InputTemp
                label='COMPANY ADDRESS'
                placeholder='Enter address'
                {...getFieldProps("companyAddress")}
              />

              <SelectTemp
                options={states.map((state) => ({
                  label: state.name,
                  value: state.name.toLowerCase(),
                }))}
                label='SELECT STATE'
                value={values.state}
                onValueChange={(e) => setFieldValue("state", e)}
              />

              <InputTemp
                visibilityPadding
                label='PASSWORD'
                placeholder='Enter Preferred Password'
                inputType={pV ? "text" : "password"}
                {...getFieldProps("password")}>
                <i
                  className={styles.btnVisibility}
                  onClick={() => setPV((state) => !state)}>
                  {pV ? <ShowPwd /> : <HidePwd />}
                </i>
              </InputTemp>

              <InputTemp
                visibilityPadding
                label='RECONFIRM PASSWORD'
                inputType={cPV ? "text" : "password"}
                placeholder='Enter Preferred Password'>
                <i
                  onClick={() => setCPV((state) => !state)}
                  className={styles.btnVisibility}>
                  {cPV ? <ShowPwd /> : <HidePwd />}
                </i>
              </InputTemp>
              <div className={styles.rememberMe}>
                <Checkbox
                  checked={values.acceptTOC}
                  toggleChecked={() => {
                    setFieldValue("acceptTOC", !values.acceptTOC);
                  }}
                />
                <p>
                  I accept the <span>Terms and Conditions</span>
                </p>
              </div>

              <div className={styles.footer}>
                <Button
                  variant='primary'
                  text={"Register"}
                  type='submit'
                  invalid={!dirty}
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
          <>
            {phase === "first" && !matches ? (
              <>
                <div className={styles.flexForm}>
                  <InputTemp
                    label='FIRST NAME'
                    placeholder='Name'
                    inputType='text'
                    name='firstName'
                    marginRightSm
                  />
                  <InputTemp
                    label='SURNAME'
                    placeholder='Last name'
                    inputType='text'
                    name='lastName'
                    marginLeftSm
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
                    type='button'
                    variant='primary'
                    onClick={() => setPhase(phase)}
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
                  inputType={pV ? "text" : "password"}>
                  <i
                    className={styles.btnVisibility}
                    onClick={() => setPV((state) => !state)}>
                    {pV ? <ShowPwd /> : <HidePwd />}
                  </i>
                </InputTemp>

                <InputTemp
                  visibilityPadding
                  label='RECONFIRM PASSWORD'
                  inputType={cPV ? "text" : "password"}
                  placeholder='Enter Preferred Password'>
                  <i
                    onClick={() => setCPV((state) => !state)}
                    className={styles.btnVisibility}>
                    {pV ? <ShowPwd /> : <HidePwd />}
                  </i>
                </InputTemp>

                <div className={styles.rememberMe}>
                  <Checkbox
                    checked={values.acceptTOC}
                    toggleChecked={() => {
                      setFieldValue("acceptTOC", !values.acceptTOC);
                    }}
                  />
                  <p>
                    I accept the <span>Terms and Conditions</span>
                  </p>
                </div>
                <div className={styles.footer}>
                  <Button text='Register' type='submit' variant='primary' />
                  <p>
                    <div className={styles.signUp}>
                      Already have an account?{" "}
                      <span onClick={navigateToLogin}>Log in</span>
                    </div>
                  </p>
                </div>
              </>
            ) : null}
          </>
        </form>
      )}
    </Formik>
  );
};
