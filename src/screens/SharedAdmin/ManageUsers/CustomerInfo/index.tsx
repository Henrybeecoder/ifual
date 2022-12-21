import LayoutSuperAdmin from "../../../../containers/LayoutSuperAdmin";
import { InputTemp } from "@components/InputTemp";
import styles from "./style.module.css";
import { ChangeEvent, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import profile from "../../../../assets/image/profile2Lg.png";
import Modal from "@components/Modals";
import { customer_data } from "../data";
import Button from "@components/Button";

interface ModalState {
  suspend: boolean;
  enable: boolean;
  delete: boolean;
}

type ModalNames = "suspend" | "enable" | "delete";

const CustomerInfo = () => {
  const [page, setPage] = useState("home");
  const [profileImage, setProfileImage] = useState(profile);
  const [activeModal, setActiveModal] = useState<ModalNames | null>(null);

  const navigate = useNavigate();
  const imageRef = useRef<HTMLInputElement>(null);

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (!file) return;
    setProfileImage(URL.createObjectURL(file));
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const modalState: ModalState = {
    suspend: !!(activeModal === "suspend"),
    enable: !!(activeModal === "enable"),
    delete: !!(activeModal === "delete"),
  };

  const [searchparams] = useSearchParams();

  const customerId = searchparams.get("customer");

  const [data, setData] = useState(
    customer_data.find((data) => data.id === customerId)
  );

  const statusColor = () =>
    data?.status === "active"
      ? "#36b44a"
      : data?.status === "disabled"
      ? "#CA0814"
      : "";

  return (
    <LayoutSuperAdmin>
      <Modal
        width='650px'
        openModal={modalState.suspend}
        closeModal={closeModal}>
        <div className={styles.modal}>
          <h3>Suspend Customer</h3>
          <p>
            You are about to suspend the customer Beatrice Bimpe. Customer will
            temporaily be unable to use iFuel, until enabled by Admin
          </p>
          <div className={styles.btns}>
            <Button text='Back' width='60%' onClick={closeModal} />
            <Button
              text='Suspend Customer'
              variant='danger'
              width='37%'
              onClick={() => {
                setData((state) => state && { ...state, status: "disabled" });
                closeModal();
              }}
            />
          </div>
        </div>
      </Modal>
      <Modal
        width='650px'
        openModal={modalState.enable}
        closeModal={closeModal}>
        <div className={styles.modal}>
          <h3>Enable Customer</h3>
          <p>
            You are about to enable the customer Beatrice Bimpe. Customer will
            now be able to use and access the benefits of iFuel.
          </p>
          <div className={styles.btns}>
            <Button text='Back' width='37%' onClick={closeModal} />
            <Button
              text='Enable Customer'
              variant='dark'
              width='60%'
              onClick={() => {
                setData((state) => state && { ...state, status: "active" });
                closeModal();
              }}
            />
          </div>
        </div>
      </Modal>
      <Modal
        width='650px'
        openModal={modalState.delete}
        closeModal={closeModal}>
        <div className={styles.modal}>
          <h3>Delete Customer</h3>
          <p>
            You are about to <span style={{ color: "#CA0814" }}>delete</span>{" "}
            the customer Beatrice Bimpe. Please note that this action is
            permanent and details of customer will be lost.
          </p>
          <div className={styles.btns}>
            <Button text='Back' width='60%' onClick={closeModal} />
            <Button text='Delete Customer' variant='danger' width='37%' />
          </div>
        </div>
      </Modal>
      <div className={styles.header}>
        <h3>
          <span>MANAGE CUSTOMER /</span> CUSTOMER INFO
        </h3>
      </div>
      <div className={styles.customerStatus}>
        {data && (
          <h3 style={{ color: statusColor() }}>#{data.status.toUpperCase()}</h3>
        )}
      </div>
      <div className={styles.container}>
        <div
          className={styles.metaSection}
          style={{ opacity: page === "edit" ? 0.5 : 1 }}>
          <div style={{ position: "relative", width: "fit-content" }}>
            {page === "edit" && (
              <div className={styles.changeImage}>
                <input
                  hidden
                  ref={imageRef}
                  type='file'
                  accept='image/*'
                  onChange={handleImage}
                />
                <button
                  onClick={() => imageRef.current && imageRef.current.click()}>
                  Change Image
                </button>
              </div>
            )}
            <img src={profileImage} />
          </div>
          <div>
            <h3>Account Details</h3>
            <p>0123456789</p>
            <h2>Sterling Bank</h2>
            <>
              {data?.status && data.status === "active" ? (
                <Button
                  text='Suspend'
                  style={{ alignSelf: "flex-start" }}
                  width='160px'
                  height='50px'
                  variant='danger'
                  onClick={() => setActiveModal("suspend")}
                />
              ) : (
                <div className={styles.disabledBtnContainer}>
                  <Button
                    text='Enable'
                    style={{ alignSelf: "flex-start" }}
                    width='160px'
                    height='50px'
                    variant='dark'
                    onClick={() => setActiveModal("enable")}
                  />
                  <Button
                    text='Delete'
                    style={{ alignSelf: "flex-start" }}
                    width='160px'
                    height='50px'
                    variant='danger-outline'
                    onClick={() => setActiveModal("delete")}
                  />
                </div>
              )}
            </>
          </div>
        </div>
        <div className={styles.inputSection}>
          <div className={styles.inputFlex}>
            <InputTemp
              marginRightSm
              label={"FIRST NAME"}
              placeholder='Beatrice'
            />
            <InputTemp marginLeftSm label='SURNAME' placeholder='Bimpe' />
          </div>
          <div className={styles.inputFlex}>
            <InputTemp
              marginRightSm
              label='PHONE NUMBER'
              placeholder='0801 234 5678'
            />
            <InputTemp
              marginLeftSm
              label='EMAIL ADDRESS'
              placeholder='beatricebimpe@ifuel.com'
            />
          </div>
          <InputTemp
            label='HOUSE ADDRESS'
            placeholder='34, Bolu Street, Ajao Estate, Isolo, Lagos'
          />

          <div className={styles.inputFlex}>
            <InputTemp marginRightSm label='STATE' placeholder='Lagos' />
            <InputTemp marginLeftSm label='LGA' placeholder='Select LGA' />
          </div>
          <InputTemp
            label='COMPANY ADDRESS'
            placeholder='No information provided'
          />
        </div>
      </div>
    </LayoutSuperAdmin>
  );
};

export default CustomerInfo;
