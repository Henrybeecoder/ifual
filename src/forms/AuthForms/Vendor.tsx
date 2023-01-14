import styles from "./style.module.css";
import emoji from "../../assets/svg/emoji.svg";
import { useNavigate } from "react-router-dom";
import { states } from "../../utils/state";
import useMediaQuery from "../../Custom hooks/useMediaQuery";
import Button from "../../Components/Button";
import Checkbox from "../../Components/Checkbox";
import { InputTemp, SelectTemp } from "../../Components/InputTemp";
import { Formik } from "formik";
import { ReactComponent as HidePwd } from "../../assets/svg/hide.svg";
import { ReactComponent as ShowPwd } from "../../assets/svg/show.svg";
import Loading from "../../Components/Loading";
import { authSchema } from "../../lib/validation/vendor";
import { useMutation } from "@tanstack/react-query";
import axios from "../../lib/axios";
import { useState } from "react";

interface LoginValues {
  email: string;
  password: string;
}

interface SignUpDetails {
  email: string;
}

export const LoginForm = () => {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(false);
  const [rP, setRP] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigateToForgotPassword = () => {
    navigate({ pathname: "/forgot-password", search: "type=vendor" });
  };

  const navigateToSignup = () => {
    navigate({ pathname: "/signup", search: "type=vendor" });
  };

  const initialValues = { emailAddress: "", password: "" };

  const { mutate, error } = useMutation({
    mutationFn: async () => axios.post("Account/Login"),
    onError: (error) => {},
    onSuccess: ({ data }) => {},
  });

  const handleLogin = (values: any) => {
    // mutate(values);
    setLoading(true);
    localStorage.setItem(
      "user",
      JSON.stringify({ email: values.email, name: "Bistro Badmus" })
    );
    setTimeout(() => {
      setLoading(false);
      navigate("/vendor/dashboard");
    }, 3000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={authSchema.login}
      onSubmit={handleLogin}>
      {({ dirty, handleSubmit, getFieldProps, errors }) => (
        <form onSubmit={handleSubmit}>
          {loading && <Loading />}
          <InputTemp
            mode='light'
            label='EMAIL ADDRESS'
            inputType={"email"}
            placeholder='email@host.co..'
            {...getFieldProps("emailAddress")}
            // name='emailAddress'
            // onBlur={handleBlur}
            // onChange={(e) => {
            //   handleChange(e);
            //   setEmail(e.target.value);
            // }}
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

export const SignUpForm = () => {
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

  const { mutate, error } = useMutation({
    mutationFn: async () => axios.post("Account/CreateVendor"),
    onError: (error) => {},
    onSuccess: ({ data }) => {},
  });

  const handleRegister = (values: any) => {
    mutate(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={authSchema.register}
      onSubmit={handleRegister}>
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
                mode='light'
                label='COMPANY NAME'
                placeholder='Enter name'
                inputType='text'
                {...getFieldProps("companyName")}
              />
              <div className={styles.flexForm}>
                <InputTemp
                  mode='light'
                  label='PHONE NUMBER'
                  marginRight
                  placeholder='+234  708 ...'
                  inputType='tel'
                  {...getFieldProps("phoneNo")}
                />
                <InputTemp
                  mode='light'
                  label='EMAIL ADDRESS'
                  marginLeft
                  placeholder='email@host.co.. '
                  inputType='email'
                  {...getFieldProps("email")}
                />
              </div>

              <InputTemp
                mode='light'
                label='COMPANY ADDRESS'
                placeholder='Enter address'
                {...getFieldProps("companyAddress")}
              />

              <SelectTemp
                mode='light'
                options={states.map((state) => ({
                  label: state.name,
                  value: state.name.toLowerCase(),
                }))}
                label='SELECT STATE'
                value={values.state}
                onValueChange={(e) => setFieldValue("state", e)}
              />

              <InputTemp
                mode='light'
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
                mode='light'
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
                    mode='light'
                    label='FIRST NAME'
                    placeholder='Name'
                    inputType='text'
                    name='firstName'
                    marginRightSm
                  />
                  <InputTemp
                    mode='light'
                    label='SURNAME'
                    placeholder='Last name'
                    inputType='text'
                    name='lastName'
                    marginLeftSm
                  />
                </div>
                <InputTemp
                  mode='light'
                  label='PHONE NUMBER'
                  placeholder='+234  708 ...'
                  inputType='tel'
                  name='phoneNo'
                />
                <InputTemp
                  mode='light'
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
                  mode='light'
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
                  mode='light'
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
                  mode='light'
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
