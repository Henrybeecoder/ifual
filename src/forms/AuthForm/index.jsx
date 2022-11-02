import React from 'react'
import styles from "./style.module.css"
import emoji from "../../assets/svg/emoji.svg"
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

export default function AuthForm({ login }) {
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
        email: "",
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    return (
        <div className={styles.holder}>
            <div className={styles.container}>
                {login ? (
                    <form>
                        <div className={styles.formHolder}>
                            <label>EMAIL ADDRESS</label>
                            <input placeholder='email@host.co..' type="email" />
                        </div>
                        <div className={styles.formHolder}>
                            <label>PASSWORD</label>
                            <Input
                                type={values.showPassword ? "text" : "password"}
                                onChange={handlePasswordChange("password")}
                                style={{ background: "white", fontFamily: "Sofia pro", borderRadius: "5px", outline: "none" }}
                                value={values.password}
                                placeholder="Enter Password"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </div>

                    </form>
                ) : "Sign Up Auth Form"}
                <div className={styles.forgotPassword}>
                    <p>Forgot Password</p>
                </div>
                <div className={styles.footer}>
                    <button>
                        {login ? "Login in" : "Register"}
                    </button>
                    <p>
                        {login ? "Don’t have an account? Sign up" : "Already have an account? Log in"}
                    </p>
                </div>
            </div>
            <img src={emoji} alt="" />
        </div>
    )
}