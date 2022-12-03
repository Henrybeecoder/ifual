import {
  SvgArrowback,
  SvgArrowLeft,
  SvgArrowRight,
  SvgFilterIcon,
  SvgRating,
} from "../../assets/Svgs";
import LayoutCustomer from "../../containers/LayoutCustomer";
import styles from "./style.module.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import companyLogo from "../../assets/image/companyLogo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../Components/Button";

export const data = [
  {
    id: "1",
    company: { logo: "", name: "Sunny Jay & Co." },
    location: "Lagos, Surulere",
    category: "Diesel",
    supplyTime: "6 hours",
    price: 300,
  },
  {
    id: "2",
    company: { logo: "", name: "Sunny Jay & Co." },
    location: "Lagos, Surulere",
    category: "Diesel",
    supplyTime: "6 hours",
    price: 310,
  },
  {
    id: "3",
    company: { logo: "", name: "Sunny Jay & Co." },
    location: "Lagos, Surulere",
    category: "Diesel",
    supplyTime: "6 hours",
    price: 390,
  },
  {
    id: "4",
    company: { logo: "", name: "Sunny Jay & Co." },
    location: "Lagos, Surulere",
    category: "Ago Diesel",
    supplyTime: "6 hours",
    price: 300,
  },
  {
    id: "5",
    company: { logo: "", name: "Sunny Jay & Co." },
    location: "Lagos, Surulere",
    category: "Automative G..",
    supplyTime: "6 hours",
    price: 381,
  },

  {
    id: "6",
    company: { logo: "", name: "Sunny Jay & Co." },
    location: "Lagos, Surulere",
    category: "Diesel",
    supplyTime: "6 hours",
    price: 300,
  },
  {
    id: "7",
    company: { logo: "", name: "Sunny Jay & Co." },
    location: "Lagos, Surulere",
    category: "Diesel",
    supplyTime: "6 hours",
    price: 300,
  },
  {
    id: "8",
    company: { logo: "", name: "Sunny Jay & Co." },
    location: "Lagos, Surulere",
    category: "Diesel",
    supplyTime: "6 hours",
    price: 300,
  },
];

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [page, setPage] = useState("home");
  const [filterSet, setFilterSet] = useState(false);

  const [selected, setSelected] = useState(false);

  const buyProduct = (productId) => {
    setSelected(productId);
    setPage("order-page");
  };

  const toggleFilter = () => {
    setFilterSet((state) => !state);
  };

  const backHome = () => {
    setPage("home");
  };

  const selectedProduct = data.find((product) => product.id === selected);

  return (
    <LayoutCustomer user={user}>
      {page === "order-page" ? (
        <OrderPage backHome={backHome} selectedProduct={selectedProduct} />
      ) : (
        <>
          <div className={styles.header}>
            <h2>Available Products</h2>
            <div className={styles.filterArea}>
              <p>1 - 45 of 45</p>
              <div className={styles.arrows}>
                <SvgArrowLeft />
                <SvgArrowRight />
              </div>
              <h3>Filter</h3>
              <button className={styles.funnelIcon} onClick={toggleFilter}>
                <SvgFilterIcon />
              </button>
              {filterSet && (
                <div className={styles.filterContainer}>
                  <div className={styles.filterHeader}>
                    <p>Filter</p>
                  </div>
                  <div className='divider' />
                  <div className={styles.filterContent}>
                    <p>Delivered</p>
                    <p>Pending</p>
                    <p>Cancelled</p>
                    <p>Newest to Oldest</p>
                    <p>Oldest to Newest</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <TableContainer
            style={{
              marginTop: "35px",
              borderRadius: "17px",
              borderTop: "0.5px solid rgba(52, 68, 55, 0.3)",
            }}
            component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label='customized table'>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>
                    <h2 className={styles.title}>Company</h2>
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <h2 className={styles.title}>Location</h2>
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <h2 className={styles.title}>Category</h2>
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <h2 className={styles.title}>Supply Time</h2>
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <h2 className={styles.title}>Price/Ltr</h2>
                  </StyledTableCell>
                  <StyledTableCell align='right'></StyledTableCell>
                </StyledTableRow>
                {data.map((row, index) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component='th' scope='row'>
                      <div className={styles.companyLogo}>
                        <img src={companyLogo} />
                        <h3 className={styles.subText}>{row.company.name}</h3>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      <h3 className={styles.subText}>{row.location}</h3>
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      <h3 className={styles.subText}>{row.category}</h3>
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      <h3 className={styles.subText}>{row.supplyTime}</h3>
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      <h3 className={styles.subText}>{row.price}</h3>
                    </StyledTableCell>
                    <StyledTableCell align='right'>
                      <button
                        className={styles.btnBuy}
                        onClick={() => buyProduct(row.id)}>
                        Buy
                      </button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </LayoutCustomer>
  );
};

const OrderPage = ({ backHome, selectedProduct }) => {
  const navigate = useNavigate();

  // console.log(selectedProduct);

  const checkout = () => {
    navigate({
      pathname: "/checkout",
      search: `checkout=${selectedProduct.id}`,
    });
  };
  return (
    <>
      <button className={styles.btnBack} onClick={backHome}>
        <SvgArrowback />
        <h2>Back to Home</h2>
      </button>
      <div className={styles.header}>
        <h2>Diesel Order</h2>
      </div>
      <div className={""}>
        <div className={styles.flex}>
          <img src={companyLogo} />
          <h3>companyName</h3>
          <SvgRating />
          <p>N737 / ltr</p>
          <p>(30% discount applied)</p>
          <p>(30% discount applied)</p>
        </div>
        {/* product detaila */}
        <div className={styles.productDetials}>
          <p>Product Details</p>
          <div className={styles.flex}>
            <p>Product</p>
            <p>Diesel</p>
            <div className={styles.flex}>
              <p>Delivery time</p>
              <p>6 hours</p>
            </div>
            <div className={styles.flex}>
              <p>Price</p>
              <p>N737 / ltr</p>
            </div>
            <div className={styles.flex}>
              <p>Quantity</p>
              <div className={styles.inputGroup}>
                <input />
              </div>
            </div>
          </div>
        </div>
        {/* delivery details */}
        <div className={styles.deliveryDetials}></div>

        <div className={styles.flex}>
          <Button primary text='Proceed to Payment' onClick={checkout} />
          <Button text='Add to Cart' />
        </div>
      </div>
    </>
  );
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default Home;
