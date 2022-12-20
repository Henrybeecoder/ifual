import LayoutSuperAdmin from "../../../../containers/LayoutSuperAdmin";
import { InputTemp, TextareaTemp } from "@components/InputTemp";
import styles from "./style.module.css";
import { ChangeEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../../../assets/image/companyName.png";
import Modal from "@components/Modals";

interface ModalState {
  suspend: boolean;
}

type ModalNames = "suspend";

const VendorInfo = () => {
  const [page, setPage] = useState("home");
  const [profileImage, setProfileImage] = useState(image);
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
          <span>MANAGE VENDOR /</span> VENDOR INFO
        </h3>
      </div>
      <div className={styles.activeStatus}>
        <h3>#ONBOARDED</h3>
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
        {/* section 2 */}
        <div className={styles.section2}>
          <div className={styles.quickStatsSection}>
            <h3>QUICK STATS</h3>
            <div className={styles.quickStatsContainer}>
              <p>
                Orders Completed: <span>20</span>
              </p>
              <div className='divider' />
              <p>
                Orders Rejacted: <span>5</span>
              </p>
              <div className='divider' />
              <p>
                Total Revenue: <span>N2,000,000.00</span>
              </p>
              <div className='divider' />
              <p>
                Rating: <span>5</span>
              </p>
            </div>
          </div>
          <div className='divider' />
          <div className={styles.inputSection}>
            <h3>COMPANY DETAILS</h3>
            <div className={styles.inputFlex}>
              <InputTemp
                marginRightSm
                label={"COMPANY NAME"}
                placeholder='Aristocrat Plc'
              />
              <InputTemp
                marginLeftSm
                label='REPRESENTATIVE NAME'
                placeholder='Aliu Jinadu'
              />
            </div>
            <div className={styles.inputFlex}>
              <InputTemp
                marginRightSm
                label='DATE OF REGISTRATION'
                placeholder='23/12/2012'
              />
              <InputTemp
                marginLeftSm
                label='REGISTRATION NUMBER'
                placeholder='37198jdhs83892'
              />
            </div>
            <TextareaTemp
              label='OPERATION LOCATIONS'
              placeholder='Kosafe, Lagos'
              rows={3}
            />
          </div>
        </div>
      </div>
    </LayoutSuperAdmin>
  );
};

export default VendorInfo;
