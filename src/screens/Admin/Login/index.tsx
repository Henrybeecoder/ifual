import styles from "./style.module.css";
import logo from "../../../assets/logo.svg";
import { InputTemp } from "../../../Components/InputTemp";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useMediaQuery from "../../../Custom hooks/useMediaQuery";
import { RenderPageProps } from "@type/shared";

const Login = () => {
  // const [searchParams] = useSearchParams();
  // const loginType = searchParams.get("type");
  const [page, setPage] = useState("home");
  const matches = useMediaQuery("(min-width: 800px)");

  const renderPage: RenderPageProps = {
    home: <Home setPage={setPage} />,
    m_token: <MToken setPage={setPage} />,
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoFlex}>
        <img src={logo} />
      </div>
      {page === "home" && matches && <h2>Welcome Admin</h2>}
      <div className={styles.pageContainer}>{renderPage[page]}</div>
      <div className={styles.footer}>
        <p>2022 iFuel. All rights reserved.</p>
      </div>
    </div>
  );
};

const Home = ({ setPage }: { setPage: (page: string) => void }) => {
  const [values, setValues] = useState({ username: "", password: "" });
  const matches = useMediaQuery("(min-width: 800px)");

  return (
    <>
      <h3>LOGIN</h3>
      <InputTemp
        label={!matches ? "EMAIL USERNAME" : ""}
        inputType='text'
        value={values.username}
        placeholder={"Enter username"}
        onValueChange={(username) =>
          setValues((state) => ({ username, password: state.password }))
        }
      />
      <InputTemp
        label={!matches ? "PASSWORD" : ""}
        inputType='password'
        value={values.password}
        placeholder={"Enter Password"}
        onValueChange={(password) =>
          setValues((state) => ({ password, username: state.username }))
        }
      />
      <button
        className={styles.btnLogin}
        disabled={!!(values.username.length < 2)}
        onClick={() => setPage("m_token")}>
        Log in
      </button>
      <p className={styles.altLink}>
        Can’t log in?{" "}
        <NavLink to='/admin/login-issue' style={{ textDecoration: "none" }}>
          <span>Click here</span>
        </NavLink>
      </p>
    </>
  );
};

const MToken = ({ setPage }: { setPage: (page: string) => void }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState("");
  return (
    <>
      <h3>MToken</h3>
      <p className={styles.mTokenText}>Enter your Mtoken Code to gain access</p>
      <InputTemp
        inputType='number'
        value={token}
        placeholder={"Enter code"}
        onValueChange={setToken}
      />
      <div className={styles.btns}>
        <button className={styles.btnBack} onClick={() => setPage("home")}>
          Back
        </button>
        <button
          className={styles.btnSubmit}
          disabled={!!(token.length < 5)}
          onClick={() => {
            navigate("/admin/dashboard");
          }}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Login;
