import React from 'react'
import styles from "./style.module.css"
import emoji from "../../assets/svg/emoji.svg"
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { CheckBox } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom'

export default function AuthForm(props) {
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

    const navigate = useNavigate();
    const navigateToSignup = () => {
        navigate("/signup");
    };
    return (
        <div className={styles.holder}>
            <div className={styles.container}>
                {props.login ? (
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
                <div className={styles.rememberMe}>
                    <input type="CheckBox" />
                    <p>Remember me</p>
                </div>
                <div className={styles.footer}>
                    <button>
                        {props.login ? "Login in" : "Register"}
                    </button>
                    <p>
                        {props.login ? (<div className='sign-up'>Don’t have an account? <span onClick={navigateToSignup}>Sign up</span></div>) : "Already have an account? Log in"}
                    </p>
                </div>
            </div>
            <img src={emoji} alt="" />
        </div>
    )
}