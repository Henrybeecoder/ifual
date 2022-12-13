import styles from "./style.module.css";
import LayoutSuperAdmin from "../../../containers/LayoutSuperAdmin";
import {
  SvgArrowDown,
  SvgArrowUp,
  SvgFilterIcon,
  SvgOptions,
} from "../../../assets/Svgs";
import { limitText } from "../../../Custom hooks/helpers";

const data = [
  {
    id: "1",
    message: "Vendor Onboarding of ABC Tech with 5 others...more text",
    time: "12:00, 23/10/2022",
  },
  {
    id: "2",
    message: "Vendor Onboarding of ABC Tech with 5 others...more text",
    time: "12:00, 23/10/2022",
  },
  {
    id: "3",
    message: "Complaints resolution update for ABC Tech ",
    time: "12:00, 23/10/2022",
  },
  {
    id: "4",
    message: "Vendor Onboarding of ABC Tech with 5 others...more text",
    time: "12:00, 23/10/2022",
  },
  {
    id: "5",
    message: "Vendor Onboarding of ABC Tech with 5 others...more text",
    time: "12:00, 23/10/2022",
  },
  {
    id: "6",
    message: "Vendor Onboarding of ABC Tech with 5 others...more text",
    time: "12:00, 23/10/2022",
  },
  {
    id: "7",
    message: "Vendor Onboarding of ABC Tech with 5 others...more text",
    time: "12:00, 23/10/2022",
  },
  {
    id: "8",
    message: "Vendor Onboarding of ABC Tech with 5 others...more text",
    time: "12:00, 23/10/2022",
  },
];

const ManageProducts = () => {
  return (
    <LayoutSuperAdmin>
      <div className={styles.header}>
        <h3>ACTIVITY LOG</h3>
        <div className={styles.filterFlex}>
          <h3>Filter</h3>
          <SvgFilterIcon />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {data.map((activity) => (
            <div key={activity.id} className={styles.activityContainer}>
              <div className={styles.dot} />
              <div className={styles.textArea}>
                <h3>{activity.time}</h3>
                <div className={styles.messageFlex}>
                  <p>{limitText(activity.message, 43)}</p>
                  {activity.message.length > 45 && (
                    <button>
                      <p>View all</p>
                      <SvgArrowDown />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LayoutSuperAdmin>
  );
};

export default ManageProducts;
