import React, { useState } from "react";
import Layout from "../../../containers/LayoutVendor";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./style.module.css";
import right from "../../../assets/svg/right.svg";
import left from "../../../assets/svg/left.svg";
import filter from "../../../assets/svg/filter.svg";
import SubModal from "../../../Components/OptionsModal";
import useMediaQuery from "src/Custom hooks/useMediaQuery";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../../../assets/svg/dark-arrow-right.svg";
import { limitText } from "src/Custom hooks/helpers";
import PageHeader, { FilterModal, PaginationOf } from "@components/PageHeader";

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

function createData(
  id: string,
  name: string,
  calories: string,
  fat: string,
  carbs: string,
  protein: string
) {
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "1",
    ".88 Distilled Diesel",
    "100 l",
    "Delivered",
    "28/07/2022",
    "N30,000.00"
  ),
  createData(
    "2",
    "Unadulterated Petrol",
    "100 l",
    "Pending",
    "28/07/2022",
    "N30,000.00"
  ),
  createData(
    "3",
    ".9 Distilled Diesel",
    "100 l",
    "Cancelled",
    "28/07/2022",
    "N30,000.00"
  ),
  createData(
    "4",
    "Pure, distilled Kerosene",
    "100 l",
    "Delivered",
    "28/07/2022",
    "N30,000.00"
  ),
  createData(
    "5",
    "Pure, distilled Kerosene",
    "100 l",
    "Delivered",
    "28/07/2022",
    "N30,000.00"
  ),
  createData(
    "6",
    ".9 Distilled Diesel",
    "100 l",
    "Cancelled",
    "28/07/2022",
    "N30,000.00"
  ),
  createData(
    "7",
    "Pure, distilled Kerosene",
    "100 l",
    "Delivered",
    "28/07/2022",
    "N30,000.00"
  ),
];

export default function OrderStatus() {
  const matches = useMediaQuery("(min-width: 800px)");
  const navigate = useNavigate();
  return (
    <Layout>
      <PageHeader pageTitle='Order Status'>
        <PaginationOf current={6} total={6} />
        <FilterModal
          options={[
            "delivered",
            "pending",
            "cancelled",
            "newest to oldest",
            "oldest to newest",
          ]}
          selected='newest to oldest'
        />
      </PageHeader>

      <TableContainer
        style={{ marginTop: "35px", borderRadius: "17px" }}
        component={Paper}>
        {matches ? (
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
                  <StyledTableRow key={row.id}>
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
                      <SubModal>
                        <button onClick={() => navigate(row.id)}>View</button>
                        <button>Report</button>
                      </SubModal>
                    </StyledTableCell>
                  </StyledTableRow>
                </>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Table sx={{ width: "100%" }} aria-label='customized table'>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell>
                  <h2 className={styles.title}>Desc.</h2>
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <h2 className={styles.title}>Status</h2>
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <h2 className={styles.title}>N/Ltr</h2>
                </StyledTableCell>
                <StyledTableCell align='right'></StyledTableCell>
              </StyledTableRow>
              {rows.map((row) => (
                <>
                  <StyledTableRow key={row.id}>
                    <StyledTableCell
                      scope='row'
                      align='center'
                      style={{ padding: "10px 3px" }}>
                      <h3 className={styles.subText}>
                        {row.name
                          .split(" ")
                          [row.name.split(" ").length - 1].toString()}
                      </h3>
                    </StyledTableCell>
                    <StyledTableCell
                      align='center'
                      style={{ padding: "10px 3px" }}>
                      <p
                        className={`${
                          row.fat === "Delivered" && styles.delivered
                        } ${row.fat === "Pending" && styles.pending} ${
                          row.fat === "Cancelled" && styles.cancelled
                        } `}>
                        {row.fat}
                      </p>
                    </StyledTableCell>
                    <StyledTableCell
                      align='center'
                      style={{ padding: "10px 3px" }}>
                      <h3 className={styles.subText}>
                        {limitText(row.protein, 6)}
                      </h3>
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
                </>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </Layout>
  );
}
