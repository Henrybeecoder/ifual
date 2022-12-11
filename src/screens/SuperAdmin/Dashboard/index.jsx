import LayoutSuperAdmin from "../../../containers/LayoutSuperAdmin";
import styles from "./style.module.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { SvgRightIcon } from "../../../assets/Svgs";
import { useState } from "react";
import useMediaQuery from "../../../Custom hooks/useMediaQuery";

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

const Dashboard = () => {
  const [page, setPage] = useState("home");
  const matches = useMediaQuery("(min-width: 800px)");

  return (
    <LayoutSuperAdmin
      backBtn={!!(page === "overview-all")}
      onClickBackBtn={() => setPage("home")}>
      {page === "overview-all" ? (
        <>
          <OverViewAll />
        </>
      ) : (
        <>
          <div className={styles.flexGreetings}>
            <h3>HELLO, ADEOLA</h3>
            <p>Last activity, 2 mins ago</p>
          </div>

          <div className={styles.flexTitle}>
            <h3>OVERVIEW</h3>
            <button onClick={() => setPage("overview-all")}>
              <p>View more</p>
              <SvgRightIcon />
            </button>
          </div>
          <div className={styles.scrollX}>
            <div className={styles.statsContainer}>
              <StatsCard heading='CUSTOMER COUNT' value='2000' />
              <StatsCard heading='VENDOR COUNT' value='107' />
              <StatsCard heading='ADMIN COUNT' value='8' />
              <StatsCard heading='TOTAL ORDERS PROCESSED' value='2000' />
            </div>
          </div>
          <div className={styles.chartSection}>
            <h3>STATS</h3>
            <div className={styles.chartFlex}>
              <div
                style={{
                  width: matches ? "48%" : "100%",
                  height: 200,
                  border: "1px solid gainsboro",
                  borderRadius: "10px",
                  padding: "5px 0 5px 20px",
                }}>
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
              <div
                style={{
                  width: matches ? "48%" : "100%",
                  marginTop: !matches ? "20px" : "",
                  height: 200,
                  border: "1px solid gainsboro",
                  borderRadius: "10px",
                  padding: "5px 0 5px 20px",
                }}>
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
          </div>
          <div className={styles.actionsSection}>
            <div className={styles.actionHeading}>
              <h3>NEEDED ACTIONS</h3>
              <button>
                <p>VIEW MORE</p>
                <SvgRightIcon />
              </button>
            </div>
            <div className={styles.scrollX}>
              <div className={styles.actionsFlex}>
                <ActionCard
                  heading='MANAGE VENDOR'
                  message='You have a new Onboarding request'
                  onClick={() => {}}
                />
                <ActionCard
                  heading='MANAGE ORDER'
                  message='Order delivery overdue'
                  onClick={() => {}}
                  messageRed
                />
                <ActionCard
                  heading='COMPLAINT LOG'
                  message='New Complaint Received - Paymen...'
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </LayoutSuperAdmin>
  );
};

const StatsCard = ({ heading, value, onClick }) => {
  return (
    <div className={styles.statsCard}>
      <h3>{heading}</h3>
      <p>{value}</p>
      <button onClick={onClick}>view</button>
    </div>
  );
};

const ActionCard = ({ heading, message, onClick, messageRed }) => {
  return (
    <div className={`${styles.actionCard} ${messageRed && styles.messageRed}`}>
      <h3>{heading}</h3>
      <p>{message}</p>
      <button onClick={onClick}>ACT</button>
    </div>
  );
};

const TableTemp = ({ item, value }) => {
  return (
    <div className={styles.tableTemp}>
      <h3>{item}</h3>
      <p>{value}</p>
    </div>
  );
};

const OverViewAll = () => {
  return (
    <div className={styles.overviewContainer}>
      <h2 className={styles.overviewBreadCrumb}>
        OVERVIEW/ <span>VIEW ALL</span>
      </h2>
      <div style={{ width: "60%" }}>
        <TableTemp item='Customer Count:' value='2,000' />
        <TableTemp item='Vendor Count:' value='107' />
        <TableTemp item='Admin Count:' value='8' />
        <TableTemp item='Total Orders Processed:' value='2,000' />
        <TableTemp item='Total Funds Processed:' value='N240,000,000,000.00' />
        <TableTemp item='Total iFuel Revenue:' value='N34,000,000.00' />
      </div>
    </div>
  );
};

export default Dashboard;
