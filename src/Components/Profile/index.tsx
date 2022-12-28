import styles from "./style.module.css";
import { InputTemp, TextareaTemp } from "@components/InputTemp";
import { ChangeEvent, ReactNode, useRef, useState } from "react";
import useMediaQuery from "src/Custom hooks/useMediaQuery";
import Button from "@components/Button";
import Modal from "@components/Modals";
import { useNavigate, useSearchParams } from "react-router-dom";
import { customer_data } from "src/screens/SharedAdmin/ManageUsers/data";
import { ReactComponent as StarSvg } from "../../assets/svg/star.svg";
import UploadImageTemp from "@components/UploadImageTemp";

interface CustomerProfileProps {
  profileImg: string;
  children?: ReactNode;
  data?: any;
}

interface VendorProfileProps {
  profileImg: string;
  children?: ReactNode;
  data?: any;
  setActiveModal?: (string: string | null) => void;
}

export const CustomerProfile = ({
  profileImg,
  children,
}: CustomerProfileProps) => {
  const page = undefined;

  const matches = useMediaQuery("(min-width: 800px)");

  const [profileImage, setProfileImage] = useState(profileImg);

  const handleImage = (e: any) => {
    const file = e.target?.files?.[0];
    setProfileImage(URL.createObjectURL(file));
  };

  const [searchparams] = useSearchParams();

  const customerId = searchparams.get("customer");
  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.metaSection}
          style={{ opacity: page === "edit" ? 0.5 : 1 }}>
          <UploadImageTemp src={profileImage} btnText='Change Image' />
          <div>
            <h3>Account Details</h3>
            <p>0123456789</p>
            <h2>Sterling Bank</h2>
            {children}

            {/* <div className={styles.btns}>
              <button>Change account</button>
              <button>Add Payment Card</button>
              <button>Change Password</button>
            </div> */}
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
          <InputTemp label='COMPANY ADDRESS' placeholder='Enter Address' />
          <div className={styles.inputFlex}>
            <InputTemp marginRightSm label='STATE' placeholder='Lagos' />
            <InputTemp marginLeftSm label='LGA' placeholder='Select LGA' />
          </div>
        </div>
      </div>
    </>
  );
};

export const VendorProfile = ({
  profileImg,
  children,
  data,
  setActiveModal = () => {},
}: VendorProfileProps) => {
  const page = undefined;

  const navigate = useNavigate();
  const imageRef = useRef<HTMLInputElement>(null);

  const [profileImage, setProfileImage] = useState(profileImg);

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (!file) return;
    setProfileImage(URL.createObjectURL(file));
  };

  const vendorId = "new";

  return (
    <>
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
            {children}
          </div>
        </div>

        {/* section 2 */}
        <div className={styles.section2}>
          {vendorId === "new" ? (
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
    </>
  );
};
