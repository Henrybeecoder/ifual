import React, { useState } from "react";
import SecondaryContainer from "../../containers/SecondaryContainer";
import styles from "./style.module.css";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import Modal from "../../Components/Modals";
import modalCheck from "../../assets/svg/modalCheck.svg"

export default function ResetPassword() {
  const [newPasswordShown, setNewPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [btnLoading, setBtnLoading] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const navigate = useNavigate();
 
  const closeModal = () => {
    setOpenModal(false)
  }
  const ResetPassword = () => {
    setBtnLoading(true)
    
    setTimeout(() => setOpenModal(true), 5000);
    setTimeout(() => navigate("/login"), 10000);


  }

  const togglePasswordVisiblity = () => {
    setNewPasswordShown(newPasswordShown ? false : true);
  };

  const toggleConfirmPasswordVisiblity = () => {
    setConfirmPasswordShown(confirmPasswordShown ? false : true);
  };
  return (
    <SecondaryContainer>
        <Modal openModal={openModal} closeModal={closeModal}> 
        <div className={styles.ModalContainer}>
            <h4>Password Reset Successful</h4>
            <img src={modalCheck} alt="" />
            <p>Redirecting to Log in ...</p>
        </div>
        </Modal>
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
