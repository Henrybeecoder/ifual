import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import styles from "./style.module.css";

const LayoutCustomer = ({ children, backBtn, onClickBackBtn }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.flex}>
        <SideBar open={open} />
        <div className={styles.relative}>
          <Header
            setOpen={setOpen}
            user={user}
            backBtn={backBtn}
            onClickBackBtn={onClickBackBtn}
          />
          <div className={styles.page}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default LayoutCustomer;
