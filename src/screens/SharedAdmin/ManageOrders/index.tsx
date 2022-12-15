import styles from "./style.module.css";
import { SvgFilterIcon, SvgOptions } from "../../../assets/Svgs";
import OptionsModal from "@components/OptionsModal";

const data = [
  {
    id: "1",
    order: "Diesel, 200 l",
    vendor: "Apex Oil Plc.",
    location: "Ikoyi, Lagos",
    due_date: "00:00:00, 23/10/2022",
    status: "Pending",
  },
  {
    id: "2",
    order: "Diesel, 200 l",
    vendor: "Apex Oil Plc.",
    location: "Ikoyi, Lagos",
    due_date: "00:00:00, 23/10/2022",
    status: "Pending",
  },
  {
    id: "3",
    order: "Diesel, 200 l",
    vendor: "Apex Oil Plc.",
    location: "Ikoyi, Lagos",
    due_date: "00:00:00, 23/10/2022",
    status: "Overdue",
  },
  {
    id: "4",
    order: "Diesel, 200 l",
    vendor: "Apex Oil Plc.",
    location: "Ikoyi, Lagos",
    due_date: "...",
    status: "Cancelled",
  },
  {
    id: "5",
    order: "Diesel, 200 l",
    vendor: "Apex Oil Plc.",
    location: "Ikoyi, Lagos",
    due_date: "00:00:00, 23/10/2022",
    status: "Completed",
  },
  {
    id: "6",
    order: "Diesel, 200 l",
    vendor: "Apex Oil Plc.",
    location: "Ikoyi, Lagos",
    due_date: "...",
    status: "Cancelled",
  },
  {
    id: "7",
    order: "Diesel, 200 l",
    vendor: "Apex Oil Plc.",
    location: "Ikoyi, Lagos",
    due_date: "00:00:00, 23/10/2022",
    status: "Completed",
  },
  {
    id: "8",
    order: "Diesel, 200 l",
    vendor: "Apex Oil Plc.",
    location: "Ikoyi, Lagos",
    due_date: "00:00:00, 23/10/2022",
    status: "Completed",
  },
  {
    id: "9",
    order: "Diesel, 200 l",
    vendor: "Apex Oil Plc.",
    location: "Ikoyi, Lagos",
    due_date: "00:00:00, 23/10/2022",
    status: "Pending",
  },
];

const ManageOrders = () => {
  return (
    <>
      <div className={styles.header}>
        <h3>MANAGE ORDERS</h3>
        <div className={styles.filterFlex}>
          <h3>Filter</h3>
          <SvgFilterIcon />
        </div>
      </div>
      <div className={"tableWrapper"}>
        <table>
          <thead>
            <tr>
              <th>Order Desc.</th>
              <th>Vendor</th>
              <th>Location</th>
              <th>Due/Delivered</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((row) => {
              const status = row.status.toLowerCase();
              const bgColor =
                status === "pending"
                  ? "#F2F6F2"
                  : status === "overdue"
                  ? "#F2F6F2"
                  : status === "cancelled"
                  ? "#FCDEE4"
                  : "#F3FFF3";
              const color =
                status === "pending"
                  ? "#344437"
                  : status === "overdue"
                  ? "#CA0814"
                  : status === "cancelled"
                  ? "#CA0814"
                  : "#36B44A";
              return (
                <tr
                  key={row.id}
                  className={`${status === "overdue" && styles.overdue}`}>
                  <td>{row.order}</td>
                  <td>{row.vendor}</td>
                  <td>{row.location}</td>
                  <td>{row.due_date}</td>
                  <td className={styles.statusContainer}>
                    <p
                      style={{
                        backgroundColor: bgColor,
                        color,
                        padding: "4px 10px",
                        borderRadius: "20px",
                        width: "fit-content",
                      }}>
                      {row.status}
                    </p>
                  </td>
                  <td>
                    <OptionsModal>
                      <button>View</button>
                      <button>Remap</button>
                    </OptionsModal>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageOrders;
