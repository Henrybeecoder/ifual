import Layout from "../../../containers/LayoutCustomer";
import { useNavigate } from "react-router-dom";
import { SvgArrowback, SvgRating, SvgRightIcon } from "../../../assets/Svgs";
import styles from "./style.module.css";
import companyLogo from "../../../assets/image/companyLogo.png";
import OrderDetailsForm from "../../../Components/OrderDetailsForm";
import Button from "../../../Components/Button";

const Order = () => {
  const navigate = useNavigate();
  const checkout = () => {
    navigate({
      pathname: "/checkout",
      //   search: `checkout=${selectedProduct.id}`,
    });
  };
  return (
    <Layout>
      <button className={styles.btnBack} onClick={() => navigate(-1)}>
        <SvgArrowback />
        <h2>Back to Home</h2>
      </button>
      <div className={styles.header}>
        <h2>Diesel Order</h2>
      </div>
      <div className={""}>
        <div className={styles.productMetaContainer}>
          <div className={styles.productMeta}>
            <img src={companyLogo} />
            <h3>{}</h3>
            <div className={styles.flexTight}>
              <p className={styles.margin}>5</p> <SvgRating />
            </div>
            <p>N737 / ltr</p>
            <p>(30% discount applied)</p>
            <span>14 reviews</span>
          </div>
          <div className={styles.productMetaMob}>
            <div className={styles.textArea}>
              <h3>{}</h3>
              <div className={styles.ratingReviewMob}>
                <h3>
                  5
                  <span>
                    <SvgRating />
                  </span>
                </h3>
                <p>14 reviews</p>
              </div>
            </div>
            <button>
              <p>See more</p>
              <SvgRightIcon />
            </button>
          </div>
        </div>
        {/* gridlike */}
        <OrderDetailsForm />
        <div className={styles.footer}>
          <Button
            variant='primary'
            text='Proceed to Payment'
            onClick={checkout}
          />
          <Button text='Add to Cart' />
        </div>
      </div>
    </Layout>
  );
};

export default Order;
