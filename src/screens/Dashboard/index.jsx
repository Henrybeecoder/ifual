import React, { useState } from "react";
import styles from "./style.module.css";
import PageContainer from "../../containers/LayoutVendor";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import right from "../../assets/svg/right.svg";
import left from "../../assets/svg/left.svg";
import filter from "../../assets/svg/filter.svg";
import tick from "../../assets/svg/tick.svg";
import { useNavigate } from "react-router-dom";
import totOrder from "../../assets/svg/totorder.svg";
import shopOrder from "../../assets/svg/shopOrder.svg";
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
];

export default function Dashboard() {
  const data = [
    {
      name: "JAN",
      uv: 2000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "FEB",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "MAR",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "APR",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "MAY",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "JUN",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "JUL",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "AUG",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "SEP",
      uv: 4000,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "OCT",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "NOV",
      uv: 4000,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "DEC",
      uv: 2000,
      pv: 4300,
      amt: 2100,
    },
  ];
  const navigate = useNavigate();
  // const [openSubModal, setOpenSubModal] = useState(false)
  // const toggleSubModal = () => {
  //   setOpenSubModal(true)
  // }
  // const closeSubModal = () => {
  //   setOpenSubModal(false)
  // }
  const routeToOrderStatus = () => {
    navigate("/order-status");
  };
  return (
    <div>
      <PageContainer active='dashboard'>
        <div className={styles.dashoardContainer}>
          <p className={styles.performance}>
            Hello, <b>ABC OIL & GAS</b>
          </p>

          <p className={styles.performance}>
            <b>PERFORMANCE</b>
          </p>
          <div className={styles.containerHolder}>
            <div className={styles.chartContainer}>
              <div className={styles.chartHeader}>
                <div className={styles.firstCon}>
                  <p className={styles.revenue}>TOTAL REVENUE</p>
                  <p>
                    <b>₦2,450,000</b>
                  </p>
                </div>
                <div className={styles.linkContainer}>
                  <p>WEEKLY</p>
                  <p>MONTHLY</p>
                  <p>YEARLY</p>
                </div>
              </div>

              <div style={{ width: "100%", height: 200 }}>
                <ResponsiveContainer>
                  <AreaChart
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='name' />

                    <Tooltip />
                    <Area
                      type='monotone'
                      dataKey='uv'
                      stroke='#35DB9F'
                      fill='rgba(53, 219, 159, 0.24)'
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className={styles.orderStatusChart}>
              <div className={styles.totalOrders}>
                <div className={styles.textContainer}>
                  <p>TOTAL ORDERS</p>
                  <b>20</b>
                  <span>View</span>
                </div>
                <div className={styles.imgContainer}>
                  <img src={totOrder} alt='' />
                </div>
              </div>
              <div className={`${styles.totalOrders} ${styles.pendingCon}`}>
                <div className={styles.textContainer}>
                  <p>PENDING ORDERS</p>
                  <b>5</b>
                  <span>View</span>
                </div>
                <div className={styles.imgContainer}>
                  <img src={shopOrder} alt='' />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.table}>
            <div className={styles.tableHeader}>
              <h2>ORDERS</h2>
              <div className={styles.orderLink} onClick={routeToOrderStatus}>
                <p>VIEW MORE</p>
                <img src={right} alt='' />
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
                          style={{ cursor: "pointer", position: "relative" }}>
                          <SubModal tick={tick} />
                        </StyledTableCell>
                      </StyledTableRow>
                    </>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
