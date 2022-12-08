import { Link, NavLink } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import styles from "./style.module.css";

const LayoutCustomer = ({ children, backBtn, onClickBackBtn }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className={styles.flex}>
        <SideBar />
        <div className={styles.relative}>
          <Header
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
