import PageHeader, { EditBtn } from "@components/PageHeader";
import { useRef, useState } from "react";
import Layout from "src/containers/LayoutVendor";
import styles from "./style.module.css";
import profileImage from "../../../assets/image/companyName.png";
import { InputTemp } from "@components/InputTemp";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const imageRef = useRef<HTMLInputElement>(null);

  const handleImage = () => {};

  return (
    <Layout>
      <PageHeader pageTitle='Basic Profile' backBtn>
        <EditBtn onClick={() => setEdit((state) => !state)} />
      </PageHeader>
      <div className={styles.metaSection}>
        <div style={{ position: "relative", width: "fit-content" }}>
          {edit && (
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
        <div className={styles.textArea} style={{ opacity: edit ? 0.5 : 1 }}>
          <div>
            <h3>Account Details</h3>
            <p>0123456789</p>
            <h2>Sterling Bank</h2>
          </div>
          <button>Change Password</button>
        </div>
      </div>
      <div className='divider' style={{ margin: "30px 0" }} />

      <div className={styles.inputSection}>
        <h2>Company Information</h2>
        <div className='input-flex-btwn'>
          <InputTemp
            disabled={!edit}
            label='COMPANY NAME'
            value='Aristocrat Plc'
            marginRight
          />
          <InputTemp
            disabled={!edit}
            label='REPRSENTATIVE NAME'
            value='Aliu Jinadu'
            marginLeft
          />
        </div>
        <div className='input-flex-btwn'>
          <InputTemp
            disabled={!edit}
            label='DATE OF REGISTRATION'
            value='23/12/2012'
            marginRight
          />
          <InputTemp
            disabled={!edit}
            label='REGISTRATION NUMBER'
            placeholder='Aliu Jinadu'
            value='37198jdhs83892'
            marginLeft
          />
        </div>
        <InputTemp
          disabled={!edit}
          label='OPERATION LOCATION'
          value='Abeokuta, Lagos, Maiduguri'
        />
        <InputTemp disabled={!edit} label='DETAIL' placeholder='Detail' />
      </div>
    </Layout>
  );
};

export default Profile;
