import { SvgRateStars } from "../../../assets/Svgs";
import Layout from "../../../containers/LayoutCustomer";
import styles from "./style.module.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import companyLogo from "../../../assets/image/companyLogo.png";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../../Components/Button";
import Modal from "../../../Components/Modals";
import PageHeader, {
  FilterModal,
  PaginationOf,
} from "../../../Components/PageHeader";
import useMediaQuery from "../../../Custom hooks/useMediaQuery";
import { ReactComponent as ArrowRight } from "../../../assets/svg/dark-arrow-right.svg";
import { limitText } from "../../../Custom hooks/helpers";

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

  const matches = useMediaQuery("(min-width: 800px)");

  const [confmDelivery, setConfmDelivery] = useState(false);
  const [reviewModal, setReviewModal] = useState(false);

  const [searchParams] = useSearchParams();
  const orderStatus = searchParams.get("order");

  useEffect(() => {
    if (!orderStatus) return;
    setConfmDelivery(true);
    setReviewModal(false);
  }, [orderStatus]);

  const [page, setPage] = useState("home");
  const [filterSet, setFilterSet] = useState(false);

  const [selected, setSelected] = useState<string | null>(null);

  const confirmDelivery = () => {
    setConfmDelivery(false);
    setReviewModal(true);
  };

  const buyProduct = (productId: string) => {
    setSelected(productId);
    setPage("order-page");
  };

  const toggleFilter = () => {
    setFilterSet((state) => !state);
  };

  const backHome = () => {
    setPage("home");
  };

  const review = () => {
    setReviewModal(false);
  };

  const selectedProduct = data.find((product) => product.id === selected);

  return (
    <Layout>
      <Modal
        openModal={confmDelivery}
        closeModal={() => setConfmDelivery(false)}>
        <h3>Confirm Delivery</h3>
        <p>
          Sunny Jay has delivered{" "}
          <span className={styles.spanGreen}>100 Ltrs</span> Diesel to you at
          11:25am on Mon, 25th July, 2022.
        </p>
        <p>
          Kindly click to confirm delivery or use{" "}
          <span className={styles.spanGreen}>code 0234</span>
        </p>
        <div className={"flex-btwn"}>
          <Button text='Cancel' width={"180px"} onClick={confirmDelivery} />
          <Button
            variant='primary'
            text='Confirm'
            width={"260px"}
            onClick={confirmDelivery}
          />
        </div>
      </Modal>
      <Modal
        variant='unstyled'
        style={{ top: "50px" }}
        openModal={reviewModal}
        closeModal={() => setReviewModal(false)}>
        <div className={styles.reviewOrder}>
          <h2>Rate Sunny Jay & Co’s service</h2>
          <div>
            <SvgRateStars />
          </div>
          <div className={styles.divider} />
          <p>Please share your opinion about their service</p>
          <textarea placeholder='Write review' rows={5} />
          <div className={styles.btnCfm}>
            <Button text='Cancel' width={"40%"} onClick={review} />
            <Button
              variant='primary'
              text='Submit'
              width={"55%"}
              onClick={review}
            />
          </div>
        </div>
      </Modal>
      <>
        <PageHeader pageTitle='Available Products'>
          {matches && <PaginationOf current={[1, 20]} total={45} />}
          <FilterModal options={[]} />
        </PageHeader>

        <TableContainer
          style={{
            marginTop: "35px",
            borderRadius: "17px",
            borderTop: "0.5px solid rgba(52, 68, 55, 0.3)",
          }}
          component={Paper}>
          {matches ? (
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
                        <img alt='company-logo' src={companyLogo} />
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
                      <Button
                        text='Buy'
                        width='70px'
                        height='40px'
                        onClick={() => navigate(row.id)}
                      />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <Table sx={{ width: "100%" }} aria-label='customized table'>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>
                    <h2 className={styles.title}>Company</h2>
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <h2 className={styles.title}>Cat.</h2>
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <h2 className={styles.title}>N/Ltr</h2>
                  </StyledTableCell>
                  <StyledTableCell align='right'></StyledTableCell>
                </StyledTableRow>
                {data.map((row, index) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell
                      align='center'
                      style={{ padding: "15x 3px" }}>
                      <h3 className={styles.subText}>
                        {limitText(row.company.name, 9)}
                      </h3>
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      <h3 className={styles.subText}>
                        {limitText(row.category, 3)}
                      </h3>
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      <h3 className={styles.subText}>{row.price}</h3>
                    </StyledTableCell>
                    <StyledTableCell
                      align='left'
                      style={{ padding: "10px 3px" }}>
                      <ArrowRight
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          navigate(row.id);
                        }}
                      />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </>
    </Layout>
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
