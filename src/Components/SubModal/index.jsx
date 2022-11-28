import { useState } from "react";
import styles from "./style.module.css";

const SubModal = ({ tick }) => {
  const [openSubModal, setOpenSubModal] = useState(false);
  const closeSubModal = () => {
    setOpenSubModal(false);
  };
  return (
    <>
      <img src={tick} alt='' onClick={() => setOpenSubModal(true)} />
      {openSubModal && (
        <div className={styles.subModal}>
          <p onClick={closeSubModal}>View</p>
          <p onClick={closeSubModal}>Report</p>
        </div>
      )}
    </>
  );
};

export default SubModal;
