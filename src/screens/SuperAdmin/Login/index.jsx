import styles from "./style.module.css";
import logo from "../../../assets/logo.svg";
import { InputTemp } from "../../../Components/InputTemp";

const ManageProducts = () => {
  return (
    <div className={styles.header}>
      <img src={logo} />
      <h2>Welcome Admin</h2>
      <div className={styles.loginContainer}>
        <h3>LOGIN</h3>
        <InputTemp inputType='text' />
        <InputTemp inputType='text' />
        <button>Log in</button>
        <p>
          Can’t log in? <span>Click here</span>
        </p>
      </div>
      <div className={styles.footer}>
        <p>2022 iFuel. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ManageProducts;
