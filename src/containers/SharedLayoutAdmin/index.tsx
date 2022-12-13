import { useState, ReactNode } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import styles from "./style.module.css";

interface LayoutProps {
  children: ReactNode;
  backBtn?: boolean;
  onClickBackBtn?: () => void;
}

const LayoutCustomer = ({ children, backBtn, onClickBackBtn }: LayoutProps) => {
  const userStr = localStorage.getItem("user");
  const user = userStr && JSON.parse(userStr);

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.flex}>
        <SideBar open={open} setOpen={setOpen} />
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
