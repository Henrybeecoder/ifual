import React, { useState } from "react";
import SecondaryContainer from "../../containers/SecondaryContainer";
import styles from "./style.module.css";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [newPasswordShown, setNewPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [btnLoading, setBtnLoading] = useState(false)
  const navigate = useNavigate();
 

  const ResetPassword = () => {
    setBtnLoading(true)
    setTimeout(() => navigate("/"), 5000);


  }

  const togglePasswordVisiblity = () => {
    setNewPasswordShown(newPasswordShown ? false : true);
  };

  const toggleConfirmPasswordVisiblity = () => {
    setConfirmPasswordShown(confirmPasswordShown ? false : true);
  };
  return (
    <SecondaryContainer>
      <div className={styles.container}>
        <p className={styles.header}>Reset Password?</p>
        <p className={styles.subText}>Enter new password and confirm it</p>
        <div className={styles.input}>
          <div className={styles.formHolder}>
            <div className={styles.passWrapper}>
              <input
                placeholder="New password"
                name="password"
                type={newPasswordShown ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <i onClick={togglePasswordVisiblity}>
                {newPasswordShown ? (
                  <Visibility className={styles.icon} />
                ) : (
                  <VisibilityOff className={styles.icon} />
                )}
              </i>
            </div>
          </div>
          <div className={styles.formHolder}>
            <div className={styles.passWrapper}>
              <input
                placeholder="Confirm password"
                name="password"
                type={confirmPasswordShown ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <i onClick={toggleConfirmPasswordVisiblity}>
                {confirmPasswordShown ? (
                  <Visibility className={styles.icon} />
                ) : (
                  <VisibilityOff className={styles.icon} />
                )}
              </i>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Button
              text="Reset Password"
              invalid={
                newPassword?.length > 0 && confirmPassword?.length > 0
                  ? false
                  : true
              }
              primary
              onClick={ResetPassword}
              loading={btnLoading}
            />
          </div>
        </div>
      </div>
    </SecondaryContainer>
  );
}
