import { useNavigate } from "react-router-dom";
import { SvgArrowback, SvgEdit } from "../../assets/Svgs";
import LayoutCustomer from "../../containers/LayoutCustomer";
import styles from "./style.module.css";

const Cart = () => {
  const navigate = useNavigate();

  const backHome = () => navigate("/");

  return (
    <LayoutCustomer>
      <button className={styles.btnBack} onClick={backHome}>
        <SvgArrowback />
        <h2>Back to Home</h2>
      </button>
      <div className={styles.header}>
        <h2>Shopping Cart</h2>
        <button>
          <p>Edit</p>
          <SvgEdit />
        </button>
      </div>
    </LayoutCustomer>
  );
};

export default Cart;
