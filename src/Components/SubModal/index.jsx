import { useState } from "react";
import styles from "./style.module.css";
import { SvgOptions } from "../../assets/Svgs";

const SubModal = ({ children }) => {
  const [openSubModal, setOpenSubModal] = useState(false);
  const closeSubModal = () => {
    setOpenSubModal(false);
  };
  const toggle = () => {
    setOpenSubModal((state) => !state);
  };
  return (
    <div className={styles.container}>
      <button onClick={toggle}>
        <SvgOptions />
      </button>
      {openSubModal && <div className={styles.subModal}>{children}</div>}
    </div>
  );
};

export default SubModal;
