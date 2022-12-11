import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { SvgArrowback, SvgEdit, SvgRating } from "../../../assets/Svgs";
import companyLogo from "../../../assets/image/companyLogo2.png";
import Button from "../../../Components/Button";
import LayoutCustomer from "../../../containers/LayoutCustomer";
import useMediaQuery from "../../../Custom hooks/useMediaQuery";
import profile from "../../../assets/image/profile2Lg.png";
import { InputTemp } from "../../../Components/InputTemp";
import { useRef, useState } from "react";

const Profile = () => {
  const navigate = useNavigate();
  const imageRef = useRef(null);
  const matches = useMediaQuery("(min-width: 800px)");

  const [page, setPage] = useState("home");

  const [profileImage, setProfileImage] = useState(profile);

  const backHome = () => navigate("/");

  const handleImage = (e) => {
    const file = e.target?.files?.[0];
    setProfileImage(URL.createObjectURL(file));
  };

  return (
    <LayoutCustomer>
      <div className={styles.breadCrumb}>
        <button onClick={backHome}>
          <SvgArrowback />
          <p>Back to Home</p>
        </button>
      </div>
      <div className={styles.header}>
        <h3>Basic Profile</h3>
        <button
          className={`${styles.flexEdit} ${
            page === "edit" && styles.flexEditActive
          }`}
          onClick={() =>
            setPage((state) => (state !== "edit" ? "edit" : "home"))
          }>
          <h2>Edit</h2>
          <SvgEdit />
        </button>
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
                <button onClick={() => imageRef.current.click()}>
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
            <div className={styles.btns}>
              <button>Change account</button>
              <button>Add Payment Card</button>
              <button>Change Password</button>
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
          <InputTemp label='COMPANY ADDRESS' placeholder='Enter Address' />
          <div className={styles.inputFlex}>
            <InputTemp marginRightSm label='STATE' placeholder='Lagos' />
            <InputTemp marginLeftSm label='LGA' placeholder='Select LGA' />
          </div>
        </div>
      </div>
    </LayoutCustomer>
  );
};

export default Profile;
