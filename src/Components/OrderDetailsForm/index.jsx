import { useState } from "react";
import { SvgArrowDown, SvgArrowUp } from "../../assets/Svgs";
import { statesOptions } from "../../screens/ProductList";
import { InputTemp, SelectTemp } from "../InputTemp";
import styles from "./style.module.css";

const OrderDetailsForm = () => {
  const [productQuantity, setPQ] = useState(0);

  const increment = () => {
    setPQ((state) => state + 1);
  };
  const decrement = () => {
    setPQ((state) => state - 1);
  };

  return (
    <>
      <div className={styles.flexLg}>
        {/* product details */}
        <div className={styles.productDetails}>
          <h3>Product Details</h3>
          <div style={{ width: "100%" }}>
            <div className={styles.flexDetail}>
              <p>Product</p>
              <span>Diesel</span>
            </div>
            <div className={styles.flexDetail}>
              <p>Delivery time</p>
              <span>6 hours</span>
            </div>
            <div className={styles.flexDetail}>
              <p>Price</p>
              <span>N737 / ltr</span>
            </div>
            <div className={styles.flexDetail}>
              <p>Quantity</p>
              <span className={styles.inputGroup}>
                <input type='tel' value={productQuantity} />
                <div className={styles.controls}>
                  <button onClick={increment}>
                    <SvgArrowUp />
                  </button>
                  <button onClick={decrement}>
                    <SvgArrowDown />
                  </button>
                </div>
              </span>
            </div>
            <div className={styles.flexDetail}>
              <p>Total</p>
              <span>N737 / ltr</span>
            </div>
          </div>
        </div>
        {/* delivery details */}
        <div className={styles.deliveryDetials}>
          <h3>Delivery Details</h3>
          <div className={styles.flex}>
            <InputTemp label='FIRST NAME' value='Beatrice' marginRight />
            <InputTemp label='SURNAME' value='Bimpe' marginLeft />
          </div>
          <div className={styles.flex}>
            <InputTemp label='PHONE NUMBER' value='08123456789' marginRight />
            <InputTemp
              label='EMAIL ADDRESS'
              value='dash@ifuel.com'
              marginLeft
            />
          </div>
          <div className={styles.flex}>
            <InputTemp
              label='DELIVERY ADDRESS'
              value='No. 1, Bosipo district, Ikoyi'
              marginRight
            />
            <SelectTemp
              width='150px'
              label='STATE'
              placeholder='Lagos'
              options={statesOptions}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetailsForm;
