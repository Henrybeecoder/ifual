import LayoutSuperAdmin from "../../../../containers/LayoutSuperAdmin";
import { InputTemp } from "@components/InputTemp";
import styles from "./style.module.css";
import { ChangeEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../../../assets/image/profile2Lg.png";
import Modal from "@components/Modals";

interface ModalState {
  suspend: boolean;
}

type ModalNames = "suspend";

const CustomerInfo = () => {
  const [page, setPage] = useState("home");
  const [profileImage, setProfileImage] = useState(profile);
  const [modalState, setModalState] = useState<ModalState>({ suspend: false });

  const navigate = useNavigate();
  const imageRef = useRef<HTMLInputElement>(null);

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (!file) return;
    setProfileImage(URL.createObjectURL(file));
  };

  const closeModal = (name: ModalNames) => {
    switch (name) {
      case "suspend":
        setModalState({ suspend: false });
    }
  };

  const openModal = (name: ModalNames) => {
    switch (name) {
      case "suspend":
        setModalState({ suspend: true });
    }
  };

  return (
    <LayoutSuperAdmin>
      <Modal
        width='650px'
        openModal={modalState.suspend}
        closeModal={() => closeModal("suspend")}>
        <div className={styles.suspendModal}>
          <h3>Suspend Customer</h3>
          <p>
            You are about to suspend the customer Beatrice Bimpe. Customer will
            temporaily be unable to use iFuel, until enabled by Admin
          </p>
          <div className={styles.btns}>
            <button className={styles.btnBack}>Back</button>
            <button className={styles.btnSuspend}>Suspend Customer</button>
          </div>
        </div>
      </Modal>
      <div className={styles.header}>
        <h3>
          <span>MANAGE CUSTOMER /</span> CUSTOMER INFO
        </h3>
      </div>
      <div className={styles.activeStatus}>
        <h3>#ACTIVE</h3>
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
            <div className={styles.btnContainer}>
              <button
                className={styles.btnSuspend}
                onClick={() => openModal("suspend")}>
                Suspend
              </button>
            </div>
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
