import LayoutSuperAdmin from "../../../../containers/LayoutSuperAdmin";
import { InputTemp, SelectTemp, TextareaTemp } from "@components/InputTemp";
import styles from "./style.module.css";
import { ChangeEvent, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import image from "../../../../assets/image/companyName.png";
import Modal from "@components/Modals";
import { ReactComponent as StarSvg } from "../../../../assets/svg/star.svg";
import { customer_data, vendor_data } from "../data";
import Button from "@components/Button";

interface ModalState {
  suspend: boolean;
  enable: boolean;
  delete: boolean;
  decline: boolean;
}

type ModalNames = "suspend" | "enable" | "delete" | "decline";

const VendorInfo = () => {
  const [page, setPage] = useState("home");
  const [profileImage, setProfileImage] = useState(image);
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
    decline: !!(activeModal === "decline"),
  };

  const [searchParams] = useSearchParams();

  const vendorId = searchParams.get("vendor");

  const [data, setData] = useState(
    vendor_data.find((data) => data.id === vendorId)
  );

  const statusColor = () =>
    data?.status === "onboarded"
      ? "#36b44a"
      : data?.status === "rejected"
      ? "#CA0814"
      : "#2F3930";

  return (
    <>
      <Modal
        width='650px'
        openModal={modalState.decline}
        closeModal={closeModal}>
        <div className={styles.suspendModal}>
          <h3>Decline Vendor</h3>
          <p>
            You are about to decline the vendor Aristocrat Plc. To proceed,
            kindly give a reason for this.
          </p>
          <p>
            Please note that the Vendor would be notified of the reason given.
          </p>
          <SelectTemp
            placeholder='Select from Custom response'
            style={{ margin: "20px 0", padding: "0 20px" }}
          />
          <div className={styles.btns}>
            <Button text='Back' width='60%' />
            <Button
              text='Decline Vendor'
              width='36%'
              variant='danger'
              invalid
            />
          </div>
        </div>
      </Modal>
      <Modal
        width='650px'
        openModal={modalState.suspend}
        closeModal={closeModal}>
        <div className={styles.suspendModal}>
          <h3>Suspend Vendor</h3>
          <p>
            You are about to suspend the customer Beatrice Bimpe. Customer will
            temporaily be unable to use iFuel, until enabled by Admin
          </p>
          <div className={styles.btns}>
            <Button text='Back' width='30%' />
            <Button text='Suspend Vendor' width='60%' />
          </div>
        </div>
      </Modal>
      <LayoutSuperAdmin>
        <div className={styles.header}>
          <h3>
            <span>MANAGE VENDOR /</span> VENDOR INFO
          </h3>
        </div>
        <div className={styles.status}>
          {data && vendorId !== "new" ? (
            <h3 style={{ color: statusColor() }}>
              #{data.status.toUpperCase()}
            </h3>
          ) : (
            <h3 style={{ color: "#2F3930" }}>#Pending</h3>
          )}
        </div>
        {/* response due section */}
        <>
          {vendorId === "new" ? (
            <div className={styles.responseDueContainer}>
              <div className={styles.textArea}>
                <h2>RESPONSE DUE</h2>
                <p>Wed. 26th Oct. 2022</p>
              </div>
              <div className={styles.indicatorsFlex}>
                <Indicator text='Days' value='2' />
                <Indicator text='Hours' value='12' />
                <Indicator text='Minutes' value='15' />
                <Indicator text='Seconds' value='45' />
              </div>
            </div>
          ) : null}
        </>
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
                    onClick={() =>
                      imageRef.current && imageRef.current.click()
                    }>
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
              {data?.status && data.status === "onboarded" ? (
                <>
                  <Button
                    text='Suspend'
                    // style={{ alignSelf: "flex-start" }}
                    width='165px'
                    height='47px'
                    variant='danger'
                    onClick={() => setActiveModal("suspend")}
                  />
                </>
              ) : null}
            </div>
          </div>

          {/* section 2 */}
          <div className={styles.section2}>
            {vendorId !== "new" ? (
              <>
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
                      Rating:{" "}
                      <span>
                        5 <StarSvg />{" "}
                      </span>
                    </p>
                  </div>
                </div>
                <div className='divider' />
              </>
            ) : null}
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
              {data?.status === "pending" ? (
                <div className={styles.btnFooter}>
                  <Button
                    text='Decline'
                    width='40%'
                    onClick={() => setActiveModal("decline")}
                  />
                  <Button text='Approve' variant='dark' width='57%' />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </LayoutSuperAdmin>
    </>
  );
};

const Indicator = ({ text, value }: { text: string; value: string }) => {
  return (
    <div className={styles.indicator}>
      <p>{text}</p>
      <h2>{value}</h2>
    </div>
  );
};

export default VendorInfo;
