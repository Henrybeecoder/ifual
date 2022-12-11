import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { SvgArrowback, SvgEdit, SvgRating } from "../../../assets/Svgs";
import companyLogo from "../../../assets/image/companyLogo2.png";
import Button from "../../../Components/Button";
import LayoutCustomer from "../../../containers/LayoutCustomer";
import useMediaQuery from "../../../Custom hooks/useMediaQuery";
import profile from "../../../assets/image/profile2.png";
import { InputTemp } from "../../../Components/InputTemp";

const Profile = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width: 800px)");

  const backHome = () => navigate("/");

  return (
    <LayoutCustomer>
      <div className={styles.breadCrumb}>
        <button>
          <SvgArrowback />
          <p>Back to Home</p>
        </button>
      </div>
      <div className={styles.header}>
        <h3>Basic Profile</h3>
        <button className={styles.flexEdit}>
          <h2>Edit</h2>
          <SvgEdit />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.metaSection}>
          <img src={profile} />
          <p>Account Details</p>
          <p>0123456789</p>
          <h3>Sterling Bank</h3>
          <button>Change account</button>
          <button>Add Payment Card</button>
          <button>Change Password</button>
        </div>
        <div className={styles.inputSection}>
          <div className={styles.inputFlex}>
            <InputTemp
              marginRight
              label={"FIRST NAME"}
              placeholder='Beatrice'
            />
            <InputTemp marginLeft label='SURNAME' placeholder='Bimpe' />
          </div>
          <div className={styles.inputFlex}>
            <InputTemp
              marginRight
              label='PHONE NUMBER'
              placeholder='0801 234 5678'
            />
            <InputTemp
              marginLeft
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
            <InputTemp marginRight label='STATE' placeholder='Lagos' />
            <InputTemp marginLeft label='LGA' placeholder='Select LGA' />
          </div>
        </div>
      </div>
    </LayoutCustomer>
  );
};

export default Profile;
