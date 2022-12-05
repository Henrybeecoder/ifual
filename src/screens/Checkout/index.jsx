import styles from "./style.module.css";
import LayoutCustomer from "../../containers/LayoutCustomer";
import OrderDetailsForm from "../../Components/OrderDetailsForm";
import { SvgArrowback, SvgEdit } from "../../assets/Svgs";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import Modal from "../../Components/Modals";
import { useState } from "react";
import PinInput from "react-pin-input";
import checkSuccess from "../../assets/svg/modalCheck.svg";

const Checkout = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [pWSA, setModalPayWSavedAcc] = useState(false);

  const [otpModal, setOtpModal] = useState(false);

  const [confm, setCfm] = useState(false);

  const [orderSuccessful, setOrderSuccessful] = useState(false);

  const backHome = () => navigate("/");

  const closePayWSavedAcc = () => {
    setModalPayWSavedAcc(false);
  };

  const requestOtp = () => {
    setModalPayWSavedAcc(false);
    setOtpModal(true);
  };

  const payWSavedAcc = () => {
    setModalPayWSavedAcc(true);
  };

  const submitOtp = () => {
    setOtpModal(false);
    setCfm(true);
  };

  const confirm = () => {
    setCfm(false);
    setOrderSuccessful(true);
    setTimeout(() => {
      setOrderSuccessful(false);
      navigate({ pathname: "/", search: "order=successful" });
    }, 2000);
  };

  return (
    <LayoutCustomer user={user}>
      <Modal width={"600px"} openModal={pWSA} closeModal={closePayWSavedAcc}>
        <div className={styles.payWSavedAcc}>
          <h2>Pay with saved account</h2>
          <h3>0123456789 - Beatrice Bimpe</h3>
          <p>Request for a one-time passcode (OTP)</p>
          <Button
            primary
            text='Request OTP'
            width={"260px"}
            onClick={requestOtp}
          />
        </div>
      </Modal>
      <Modal
        width={"600px"}
        openModal={otpModal}
        closeModal={() => setOtpModal(false)}>
        <div className={styles.requestOtp}>
          <h2>Pay with saved account</h2>
          <h3>0123456789 - Beatrice Bimpe</h3>
          <p>Enter the OTP sent to your email or Phone Number</p>
          <PinInput autoSelect={true} length={6} initialValue='' />
          <div className={styles.btnOtpModal}>
            <Button primary text='Submit' onClick={submitOtp} />
            <Button text='Request OTP again' />
          </div>
        </div>
      </Modal>
      <Modal width={"600px"} openModal={confm} closeModal={() => setCfm(false)}>
        <div className={styles.cfm}>
          <h2>Confirm</h2>
          <p>
            You are about to pay N34,500 to Sunny Jay & Co. for 100 Ltrs Diesel
          </p>
          <p>Kindly click to confirm</p>
          <div className={styles.btnCfm}>
            <Button text='Cancel' width={"150px"} onClick={confirm} />
            <Button primary text='Confirm' width={"220px"} onClick={confirm} />
          </div>
        </div>
      </Modal>
      <Modal
        width={"600px"}
        openModal={orderSuccessful}
        closeModal={() => setOrderSuccessful(false)}>
        <div className={styles.orderSuccessful}>
          <h2>Order Successful</h2>
          <img src={checkSuccess} />
          <p>Redirecting to home page...</p>
        </div>
      </Modal>

      <button className={styles.btnBack} onClick={backHome}>
        <SvgArrowback />
        <h2>Back to Home</h2>
      </button>
      <div className={styles.header}>
        <h2>Checkout</h2>
        <button>
          <p>Edit</p>
          <SvgEdit />
        </button>
      </div>
      <OrderDetailsForm />

      <div className={styles.btns}>
        <Button primary text='Pay with Saved Account' onClick={payWSavedAcc} />
        <Button text='Pay with Other Account' />
      </div>
    </LayoutCustomer>
  );
};

export default Checkout;
