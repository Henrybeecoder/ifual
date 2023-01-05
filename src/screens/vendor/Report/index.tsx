import { useState } from "react";
import Layout from "../../../containers/LayoutVendor";
import styles from "./style.module.css";
import right from "../../../assets/svg/right.svg";
import left from "../../../assets/svg/left.svg";
import filter from "../../../assets/svg/filter.svg";
import noneSelected from "../../../assets/svg/noneSelected.svg";
import { limitText } from "../../../Custom hooks/helpers";
import useMediaQuery from "../../../Custom hooks/useMediaQuery";
import { ChevronLeft } from "@material-ui/icons";
import Checkbox from "../../../Components/Checkbox";

const reportList = [
  {
    id: "RE0000001 ; Payment",
    heading: "Delayed payment",
    body: "Payment for transaction not received.Customer refused order, while transportation cost has been incured",
    question: "Are you available to pick up this order ticket?",
    timeAgo: "2h",
    status: "resolved",
    details: { origin: "Order from 234Estate", date: "18/09/2022" },
  },
  {
    id: "RE0000002 ; Payment",
    heading: "Delayed payment",
    body: "Payment for transaction not received.Customer refused order, while transportation cost has been incured",
    question: "Are you available to pick up this order ticket?",
    timeAgo: "3h",
    status: "un-resolved",
    details: { origin: "Order from 234Estate", date: "18/09/2022" },
  },
  {
    id: "RE0000003 ; Payment",
    heading: "Delayed payment",
    body: `Payment for transaction not received.Customer refused order, while transportation cost has been incured`,
    question: "Are you available to pick up this order ticket?",
    timeAgo: "7h",
    status: "resolved",
    details: { origin: "Order from 234Estate", date: "18/09/2022" },
  },
  {
    id: "RE0000004 ; Payment",
    heading: "Delayed payment",
    body: "Payment for transaction not received.Customer refused order, while transportation cost has been incured",
    question: "Are you available to pick up this order ticket?",
    timeAgo: "1h",
    status: "resolved",
    details: { origin: "Order from 234Estate", date: "18/09/2022" },
  },
];

const Report = () => {
  const matches = useMediaQuery("(min-width: 800px)");
  const [filterSet, setFilter] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [page, setPage] = useState("home");
  const selectedContent = reportList.find((report) => report.id === selected);

  const newReportPage = () => {
    setPage("new-report");
  };

  const backToHomePage = () => {
    setPage("home");
  };

  const removeSelected = () => {
    setSelected(null);
  };

  return (
    <Layout>
      {page !== "new-report" && (
        <>
          {!selected && page ? (
            <button className={styles.breadCrumb}>
              <ChevronLeft />
              <p>Back</p>
            </button>
          ) : (
            <button className={styles.breadCrumb} onClick={removeSelected}>
              <ChevronLeft />
              <p>Back to Reports</p>
            </button>
          )}
        </>
      )}
      {page !== "home" ? (
        <>
          <button className={styles.btnBack} onClick={backToHomePage}>
            <ChevronLeft />
            <p>Back</p>
          </button>
          <div className={styles.pageHeader}>
            <h1>Send a Report</h1>
          </div>
          <div className={styles.newReportPageContainer}>
            <div className={`${matches ? styles.flexBetween : ""}`}>
              <div
                className={styles.formHolder}
                style={{ marginRight: "15px" }}>
                <label>TITLE</label>
                <input placeholder='Enter Title' />
              </div>
              <div
                className={styles.formHolder}
                style={{ marginLeft: matches ? "15px" : "unset" }}>
                <label>CATEGORY</label>
                <select>
                  <option value=''>Select Category</option>
                  {/* {states.map((state) => {
                      return (
                        <option key={state.code} value={state.name}>
                          {state.name}
                        </option>
                      );
                    })} */}
                </select>
              </div>
            </div>
            <div
              className={`${styles.formHolder} ${
                matches && styles.lengthHalf
              }`}>
              <label>REFERENCE NUMBER</label>
              <input placeholder='RE0000001' />
            </div>
            <div className={styles.formHolder}>
              <label>DESCRIPTION</label>
              <textarea placeholder='Body of the report' rows={6} />
            </div>
            <div className={styles.flexCenter}>
              <button className={styles.btnBackFooter}>Back</button>
              <button className={styles.btnSendFooter}>Send</button>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* maincontainer */}
          <div className={styles.reportsContainer}>
            <div
              className={styles.reportsList}
              style={{ display: !matches && selected ? "none" : "unset" }}>
              {reportList?.map((report, index) => (
                <div key={report.id}>
                  <div
                    key={report.id}
                    className={styles.reportContainer}
                    style={{
                      backgroundColor:
                        selected === report.id ? "#F2F6F2" : "transparent",
                    }}
                    onClick={() => setSelected(report.id)}>
                    <div>
                      <div
                        className={styles.indicator}
                        style={{
                          backgroundColor:
                            report.status === "un-resolved"
                              ? "#CA0814"
                              : "#36B44A",
                        }}
                      />
                    </div>
                    <div className={styles.textContents}>
                      <div className={styles.flexBetween}>
                        <h2>{report.heading}</h2>
                        <p className={styles.timeAgo}>{report.timeAgo}</p>
                      </div>
                      <p>{limitText(report.body, 60)}</p>
                    </div>
                  </div>
                  <div
                    className={styles.divider}
                    style={{
                      display:
                        index + 1 === reportList.length ? "none" : "block",
                    }}
                  />
                </div>
              ))}
            </div>
            <div
              className={styles.selectedContainer}
              style={{ display: !matches && !selected ? "none" : "unset" }}>
              {!selectedContent ? (
                <div className={styles.noneSelected}>
                  <div className={styles.noneSelectedContent}>
                    <img src={noneSelected} />
                    <p>Click to read report</p>
                  </div>
                </div>
              ) : (
                <div className={styles.selectedReportContainer}>
                  <div className={styles.flexBetweenPadding}>
                    <h2>
                      {matches
                        ? selectedContent.id
                        : limitText(selectedContent.heading, 30)}
                    </h2>
                    <p className={styles.timeAgo}>
                      {selectedContent.details?.date}
                    </p>
                  </div>
                  <div className={styles.flexBetweenPadding}>
                    <h2>
                      {matches
                        ? selectedContent.heading
                        : limitText(selectedContent.heading, 30)}
                    </h2>
                    <p
                      style={{
                        color:
                          selectedContent.status === "resolved"
                            ? "#36B44A"
                            : "#CA0814",
                      }}>
                      #{" "}
                      {`${selectedContent.status
                        .slice(0, 1)
                        .toUpperCase()}${selectedContent.status.slice(1)}`}
                    </p>
                  </div>
                  <p>{selectedContent.body}</p>
                  <div className={styles.details}>
                    <h2>Details</h2>
                    <p>{selectedContent.details.origin}</p>
                    <p>Date:{selectedContent.details.date}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

// const CheckBoxWithText = ({ checked, setChecked, text }) => {
//   return (
//     <div className={styles.checkboxFlex}>
//       <Checkbox checked={checked} />
//       <p>{text}</p>
//     </div>
//   );
// };

export default Report;
