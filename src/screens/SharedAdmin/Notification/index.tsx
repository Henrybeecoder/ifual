import { useState } from "react";
import { SvgArrowLeft } from "src/assets/Svgs";
import styles from "./style.module.css";
import noneSelected from "../../../assets/svg/noneSelected.svg";
import useMediaQuery from "src/Custom hooks/useMediaQuery";
import { limitText } from "src/Custom hooks/helpers";

const notificationList = [
  {
    id: "1",
    heading: "10 Customers Onboarded",
    body: "10 Customers just uploaded at 4 States. Please see the details below;",
    timeAgo: "2h",
    opened: true,
  },
  {
    id: "2",
    heading: "10 Customers Onboarded",
    body: "10 Customers just uploaded at 4 States. Please see the details below;",
    timeAgo: "3h",
    opened: false,
  },
  {
    id: "3",
    heading: "10 Customers Onboarded",
    body: `10 Customers just uploaded at 4 States. Please see the details below;`,
    timeAgo: "7h",
    opened: false,
  },
  {
    id: "4",
    heading: "10 Customers Onboarded",
    body: "10 Customers just uploaded at 4 States. Please see the details below;",
    timeAgo: "1h",
    opened: false,
  },
];

const Notification = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const selectedContent = notificationList.find(
    (notification) => notification.id === selected
  );

  const removeSelected = () => {
    setSelected(null);
  };

  const matches = useMediaQuery("(min-width: 800px)");

  return (
    <>
      <div className={styles.pageContainer}>
        {!selected ? (
          <button className={styles.breadCrumb}>
            <SvgArrowLeft />
            <p>Back</p>
          </button>
        ) : (
          <button className={styles.breadCrumb} onClick={removeSelected}>
            <SvgArrowLeft />
            <p>Back to Notifications</p>
          </button>
        )}
        <div className={styles.pageHeader}>
          <h1>Notifications</h1>
        </div>
        <div className={styles.notificationsContainer}>
          <div
            className={styles.notificationsList}
            style={{ display: !matches && selected ? "none" : "unset" }}>
            {notificationList?.map((notification, index) => (
              <div key={index}>
                <div
                  key={notification.id}
                  className={styles.notificationContainer}
                  style={{
                    backgroundColor:
                      selected === notification.id ? "#F2F6F2" : "transparent",
                  }}
                  onClick={() => setSelected(notification.id)}>
                  <div>
                    <div
                      className={styles.badge}
                      style={{
                        backgroundColor: !notification.opened
                          ? "#D4D8D5"
                          : "#36B44A",
                      }}
                    />
                  </div>
                  <div className={styles.textContents}>
                    <div className={styles.flexBetween}>
                      <h2>{notification.heading}</h2>
                      <p className={styles.timeAgo}>{notification.timeAgo}</p>
                    </div>
                    <p>{limitText(notification.body, 82)}</p>
                  </div>
                </div>
                <div
                  className={styles.divider}
                  style={{
                    display:
                      index + 1 === notificationList.length ? "none" : "block",
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
                  <p>Click to read notifications</p>
                </div>
              </div>
            ) : (
              <div className={styles.selectedNotificationContainer}>
                <div className={styles.flexBetween}>
                  <h2>
                    {matches
                      ? selectedContent.heading
                      : limitText(selectedContent.heading, 30)}
                  </h2>
                  <p className={styles.timeAgo}>{selectedContent.timeAgo}</p>
                </div>
                <p>{selectedContent.body}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
