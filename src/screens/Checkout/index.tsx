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
  const user = JSON.parse(localStorage.getItem("user") || "");

  const [activeModal, setActiveModal] = useState<string | null>(null);

  const [orderSuccessful, setOrderSuccessful] = useState(false);

  const backHome = () => navigate("/");

  const confirm = () => {
    setActiveModal(null);
    setOrderSuccessful(true);
    setTimeout(() => {
      setOrderSuccessful(false);
      navigate({ pathname: "/", search: "order=successful" });
    }, 2000);
  };

  const modalState = {
    pWSA: !!(activeModal === "pWSA"),
    otp: !!(activeModal === "otp"),
    confm: !!(activeModal === "confm"),
  };

  const closeModals = () => setActiveModal(null);

  return (
    <LayoutCustomer>
      <Modal openModal={modalState.pWSA} closeModal={closeModals}>
        <h3>Pay with saved account</h3>
        <h2>0123456789 - Beatrice Bimpe</h2>
        <p>Request for a one-time passcode (OTP)</p>
        <Button
          variant='primary'
          text='Request OTP'
          width={"260px"}
          onClick={() => setActiveModal("otp")}
        />
      </Modal>
      <Modal
        variant='unstyled'
        style={{ top: "30px" }}
        openModal={modalState.otp}
        closeModal={closeModals}>
        <div className={styles.requestOtp}>
          <h2>Pay with saved account</h2>
          <h3>0123456789 - Beatrice Bimpe</h3>
          <p>Enter the OTP sent to your email or Phone Number</p>
          <PinInput autoSelect={true} length={6} initialValue='' />
          <div className={styles.btnOtpModal}>
            <Button
              variant='primary'
              text='Submit'
              onClick={() => setActiveModal("confm")}
            />
            <Button text='Request OTP again' />
          </div>
        </div>
      </Modal>
      <Modal openModal={modalState.confm} closeModal={closeModals}>
        <h3>Confirm</h3>
        <p>
          You are about to pay N34,500 to Sunny Jay & Co. for 100 Ltrs Diesel
        </p>
        <p>Kindly click to confirm</p>
        <div className={"flex-btwn"}>
          <Button text='Cancel' width={"40%"} onClick={confirm} />
          <Button
            variant='primary'
            text='Confirm'
            width={"55%"}
            onClick={confirm}
          />
        </div>
      </Modal>
      <Modal openModal={orderSuccessful}>
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
        <Button
          variant='primary'
          text='Pay with Saved Account'
          onClick={() => setActiveModal("pWSA")}
        />
        <Button text='Pay with Other Account' />
      </div>
    </LayoutCustomer>
  );
};

export default Checkout;
