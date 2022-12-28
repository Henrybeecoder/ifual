import styles from "./style.module.css";
import { ReactComponent as FilterSvg } from "../../../assets/navbericon/filter-outline.svg";
import OptionsModal from "@components/OptionsModal";
import { useNavigate } from "react-router-dom";
import { PagnHeaderWFilter } from "@components/PageHeader";

export const data = [
  {
    id: "1",
    order: "Diesel, 200 l",
    vendor: "Apex Oil Plc.",
    location: "Ikoyi, Lagos",
    due_date: "00:00:00, 23/10/2022",
    status: "Pending",
    type: "un-accepted",
  },
  {
    id: "2",
    order: "Diesel, 200 l",
    vendor: "Apex Oil Plc.",
    location: "Ikoyi, Lagos",
    due_date: "00:00:00, 23/10/2022",
    status: "Pending",
    type: "accepted",
  },
  {
    id: "3",
    order: "Diesel, 200 l",
    vendor: "Apex Oil Plc.",
    location: "Ikoyi, Lagos",
    due_date: "00:00:00, 23/10/2022",
    status: "Overdue",
    type: "old",
  },
  {
    id: "4",
    order: "Diesel, 200 l",
    vendor: "Apex Oil Plc.",
    location: "Ikoyi, Lagos",
    due_date: "...",
    status: "Cancelled",
    type: "old",
  },
  {
    id: "5",
    order: "Diesel, 200 l",
    vendor: "Apex Oil Plc.",
    location: "Ikoyi, Lagos",
    due_date: "00:00:00, 23/10/2022",
    status: "Completed",
    type: "old",
  },
  {
    id: "6",
    order: "Diesel, 200 l",
    vendor: "Apex Oil Plc.",
    location: "Ikoyi, Lagos",
    due_date: "...",
    status: "Cancelled",
    type: "new",
  },
  {
    id: "7",
    order: "Diesel, 200 l",
    vendor: "Apex Oil Plc.",
    location: "Ikoyi, Lagos",
    due_date: "00:00:00, 23/10/2022",
    status: "Completed",
    type: "new",
  },
  {
    id: "8",
    order: "Diesel, 200 l",
    vendor: "Apex Oil Plc.",
    location: "Ikoyi, Lagos",
    due_date: "00:00:00, 23/10/2022",
    status: "Completed",
    type: "old",
  },
  {
    id: "9",
    order: "Diesel, 200 l",
    vendor: "Apex Oil Plc.",
    location: "Ikoyi, Lagos",
    due_date: "00:00:00, 23/10/2022",
    status: "Pending",
    type: "old",
  },
];

const ManageOrders = () => {
  const navigate = useNavigate();

  return (
    <>
      <PagnHeaderWFilter
        current={"1 to 20"}
        total={400}
        options={[]}
        pageTitle='MANAGE ORDERS'
      />
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
                      <button onClick={() => navigate(`${row.id}`)}>
                        View
                      </button>
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
