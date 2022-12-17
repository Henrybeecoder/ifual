import { ReactNode } from "react";
import Header from "./Header";
import styles from "./style.module.css";

const LayoutCustomer = ({ children }: { children: ReactNode }) => {
  const str = localStorage.getItem("user");
  const user = str && JSON.parse(str);
  return (
    <>
      <Header user={user} />
      <div className={styles.page}>{children}</div>
      <div className={styles.footer}>
        <p>2022 iFuel. All rights reserved.</p>
      </div>
    </>
  );
};

export default LayoutCustomer;
