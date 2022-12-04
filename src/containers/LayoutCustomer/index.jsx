import Header from "./Header";
import styles from "./style.module.css";

const LayoutCustomer = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
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
