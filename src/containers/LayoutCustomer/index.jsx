import Header from "./Header";
import styles from "./style.module.css";

const LayoutCustomer = ({ user, children }) => {
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
