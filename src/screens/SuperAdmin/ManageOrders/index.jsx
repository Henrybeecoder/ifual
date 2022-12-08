import styles from "./style.module.css";
import LayoutSuperAdmin from "../../../containers/LayoutSuperAdmin";
import { SvgFilterIcon, SvgOptions } from "../../../assets/Svgs";

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
    status: "Paid",
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

const ManageProducts = () => {
  return (
    <LayoutSuperAdmin>
      <div className={styles.header}>
        <h3>MANAGE ORDERS</h3>
        <div className={styles.filterFlex}>
          <h3>Filter</h3>
          <SvgFilterIcon />
        </div>
      </div>
      <div className={styles.tableWrapper}>
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
              return (
                <tr key={row.id}>
                  <td>{row.order}</td>
                  <td>{row.vendor}</td>
                  <td>{row.location}</td>
                  <td>{row.due_date}</td>
                  <td>{row.status}</td>
                  <td>
                    <button>
                      <SvgOptions />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </LayoutSuperAdmin>
  );
};

export default ManageProducts;
