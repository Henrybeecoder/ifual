import { useState } from "react";
import Layout from "../../../containers/LayoutVendor";
import styles from "./style.module.css";
import noneSelected from "../../../assets/svg/noneSelected.svg";
import { limitText } from "../../../Custom hooks/helpers";
import useMediaQuery from "../../../Custom hooks/useMediaQuery";
import { ChevronLeft } from "@material-ui/icons";
import Checkbox from "../../../Components/Checkbox";
import PageHeader, { FilterModal } from "@components/PageHeader";
import Button from "@components/Button";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);
  const selectedContent = reportList.find((report) => report.id === selected);

  return (
    <Layout>
      {/* maincontainer */}
      <PageHeader pageTitle='Report'>
        <FilterModal options={[]} />
        <Button
          text='New Report'
          width='180px'
          onClick={() => navigate("new")}
        />
      </PageHeader>
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
                        report.status === "un-resolved" ? "#CA0814" : "#36B44A",
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
                  display: index + 1 === reportList.length ? "none" : "block",
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
