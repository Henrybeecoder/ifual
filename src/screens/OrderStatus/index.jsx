import React, { useState } from "react";
import PageContainer from "../../containers/LayoutVendor";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./style.module.css";
import right from "../../assets/svg/right.svg";
import left from "../../assets/svg/left.svg";
import filter from "../../assets/svg/filter.svg";
import tick from "../../assets/svg/tick.svg";
import SubModal from "../../Components/OptionsModal";

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    ".88 Distilled Diesel",
    "100 l",
    "Delivered",
    "28/07/2022",
    "N30,000.00"
  ),
  createData(
    "Unadulterated Petrol",
    "100 l",
    "Pending",
    "28/07/2022",
    "N30,000.00"
  ),
  createData(
    ".9 Distilled Diesel",
    "100 l",
    "Cancelled",
    "28/07/2022",
    "N30,000.00"
  ),
  createData(
    "Pure, distilled Kerosene",
    "100 l",
    "Delivered",
    "28/07/2022",
    "N30,000.00"
  ),
  createData(
    "Pure, distilled Kerosene",
    "100 l",
    "Delivered",
    "28/07/2022",
    "N30,000.00"
  ),
  createData(
    ".9 Distilled Diesel",
    "100 l",
    "Cancelled",
    "28/07/2022",
    "N30,000.00"
  ),
  createData(
    "Pure, distilled Kerosene",
    "100 l",
    "Delivered",
    "28/07/2022",
    "N30,000.00"
  ),
  createData(
    ".88 Distilled Diesel",
    "100 l",
    "Delivered",
    "28/07/2022",
    "N30,000.00"
  ),
  createData(
    "Unadulterated Petrol",
    "100 l",
    "Pending",
    "28/07/2022",
    "N30,000.00"
  ),
  createData(
    ".9 Distilled Diesel",
    "100 l",
    "Cancelled",
    "28/07/2022",
    "N30,000.00"
  ),
];

export default function OrderStatus() {
  //   const [openSubModal, setOpenSubModal] = useState(false);
  const [filterSet, setFilter] = useState(false);
  //   const toggleSubModal = () => {
  //     setOpenSubModal(true);
  //   };
  //   const closeSubModal = () => {
  //     setOpenSubModal(false);
  //   };
  return (
    <PageContainer active='order-status'>
      {filterSet && (
        <div className={styles.filterContainer}>
          <div className={styles.filterHeader}>
            <p>Filter</p>
          </div>
          <div className={styles.filterContent}>
            <p>Delivered</p>
            <p>Pending</p>
            <p>Cancelled</p>
            <p>Newest to Oldest</p>
            <p>Oldest to Newest</p>
          </div>
        </div>
      )}

      <div className={styles.pageContainer}>
        <div className={styles.pageHeader}>
          <h1>Order Status</h1>
          <div className={styles.pagerHeaderContainer}>
            <div className={styles.paginations}>
              <p>1 - 6 of 6</p>
              <div className={styles.holders}>
                <img src={left} alt='' />
                <img src={right} alt='' />
              </div>
            </div>
            <div
              className={styles.filter}
              onClick={() => setFilter(!filterSet)}>
              <h2>Filter</h2>
              <img src={filter} alt='' />
            </div>
          </div>
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label='customized table'>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell>
                  <h2 className={styles.title}>Description</h2>
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <h2 className={styles.title}>Quantity</h2>
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <h2 className={styles.title}>Status</h2>
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <h2 className={styles.title}>Order Date</h2>
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <h2 className={styles.title}>Total Price</h2>
                </StyledTableCell>
                <StyledTableCell align='right'></StyledTableCell>
              </StyledTableRow>
              {rows.map((row) => (
                <>
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component='th' scope='row'>
                      <h3 className={styles.subText}>{row.name}</h3>
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      <h3 className={styles.subText}>{row.calories}</h3>
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      <p
                        className={`${
                          row.fat === "Delivered" && styles.delivered
                        } ${row.fat === "Pending" && styles.pending} ${
                          row.fat === "Cancelled" && styles.cancelled
                        } `}>
                        {row.fat}
                      </p>
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      <h3 className={styles.subText}>{row.carbs}</h3>
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      <h3 className={styles.subText}>{row.protein}</h3>
                    </StyledTableCell>
                    <StyledTableCell
                      align='right'
                      style={{ cursor: "pointer" }}>
                      <SubModal tick={tick} />
                    </StyledTableCell>
                  </StyledTableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </PageContainer>
  );
}
