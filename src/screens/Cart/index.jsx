import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { SvgArrowback, SvgEdit, SvgRating } from "../../assets/Svgs";
import companyLogo from "../../assets/image/companyLogo2.png";
import Button from "../../Components/Button";
import LayoutCustomer from "../../containers/LayoutCustomer";
import useMediaQuery from "../../Custom hooks/useMediaQuery";

const promoProducts = [
  {
    id: "1",
    company: "Venture Capital",
    price: "N300/ltr",
    discount: "@30% disc",
  },
  {
    id: "2",
    company: "Venture Capital",
    price: "N300/ltr",
    discount: "@30% disc",
  },
  {
    id: "3",
    company: "Venture Capital",
    price: "N300/ltr",
    discount: "@30% disc",
  },
  {
    id: "4",
    company: "Venture Capital",
    price: "N300/ltr",
    discount: "@30% disc",
  },
  {
    id: "5",
    company: "Venture Capital",
    price: "N300/ltr",
    discount: "@30% disc",
  },
];

const Cart = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width: 800px)");

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
      <div className={styles.container}>
        {" "}
        <div className={styles.cartContainer}>
          <div className={styles.productContainer}>
            <div className={styles.productHeader}>
              <h3>Product 1</h3>
              <p>Price (N)</p>
            </div>
            <div className='divider' />
            <div className={styles.flexDetail}>
              <p>Product:</p>
              <span className={styles.flexBetween}>
                <p>Diesel</p>
                <p>34,500.00</p>
              </span>
            </div>
            <div className={styles.flexDetail}>
              <p>Vendor:</p>
              <span>Sunny Jay & Co.</span>
            </div>
            <div className={styles.flexDetail}>
              <p>Quantity:</p>
              <span>100 ltrs</span>
            </div>
            <div className={styles.flexDetail}>
              <p>Delivery Address:</p>
              <span>No. 1, Bosipo Street, Ikoyi, Lagos</span>
            </div>
            <div className={styles.flexDetail}>
              <p>Recipient:</p>
              <span>Beatrice / 08123456789</span>
            </div>
            <div className='divider' />
            <div className={styles.total}>
              <h3>Total (1): 34,500.00</h3>
            </div>
          </div>
          <div className={styles.btnCheckout}>
            <Button
              primary
              text='Proceed to Checkout'
              width={matches ? "400px" : "100%"}
            />
          </div>
        </div>
        {/* section 2 */}
        <div className={styles.promoProductsContainer}>
          <h3 className={styles.promoHeader}>Promo Products</h3>
          <div className={styles.overflowY}>
            {promoProducts.map((product) => (
              <div key={product.id} className={styles.promoProduct}>
                <img src={companyLogo} />
                <div className={styles.promoProductTextArea}>
                  <h2>{product.company}</h2>
                  <h3>
                    {product.price} <span>{product.discount}</span>
                  </h3>
                  <p>Limited Time Offer</p>
                </div>
                <div className={styles.ratingView}>
                  <SvgRating />
                  <button>View</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LayoutCustomer>
  );
};

export default Cart;
