import styles from "./style.module.css";
import { ReactComponent as FilterSvg } from "../../../../assets/navbericon/filter-outline.svg";
import { ReactComponent as TrashSvg } from "../../../../assets/svg/trash-outline.svg";
import { data as orders } from "../index";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@components/Button";

const ManageOrders = () => {
  const id = useParams()?.id;

  const [data, setData] = useState(orders.find((data) => data.id === id));

  const statusColor = () =>
    data?.status === "Completed"
      ? "#36b44a"
      : data?.status === "Cancelled"
      ? "#CA0814"
      : data?.status === "Overdue"
      ? "#CA0814"
      : "";

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>
          {" "}
          <span>MANAGE ORDERS</span> / ORDER DETAILS{" "}
        </h3>
        <div className={styles.filterFlex}>
          <h3>Filter</h3>
          <FilterSvg />
        </div>
      </div>
      <div className={styles.status}>
        {data && (
          <h3 style={{ color: statusColor() }}>#{data.status.toUpperCase()}</h3>
        )}
      </div>
      <div className={styles.datesFlex}>
        <p>Ordered: 22/09/2022, 09:00</p>
        <p>Due: 23/09/2022, 09:00</p>
      </div>
      <div className={styles.trackFlex}>
        <Button text='Track Order' width='150px' />
        <button>
          <TrashSvg />
        </button>
      </div>
    </div>
  );
};

export default ManageOrders;
