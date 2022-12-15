import styles from "./style.module.css";
import { SvgFilterIcon, SvgOptions } from "../../../assets/Svgs";

const data = [
  {
    id: "1",
    ref_no: "RE0000001",
    title: "Payment not see...",
    category: "Payment",
    staff: "Bisi Alonge",
    status: "Ongoing",
  },
  {
    id: "2",
    ref_no: "RE0000001",
    title: "Payment not see...",
    category: "Payment",
    staff: "...",
    status: "New",
  },
  {
    id: "3",
    ref_no: "RE0000001",
    title: "Rude Vendor",
    category: "Payment",
    staff: "Bisi Alonge",
    status: "Ongoing",
  },
  {
    id: "4",
    ref_no: "RE0000001",
    title: "Payment not see...",
    category: "Payment",
    staff: "...",
    status: "New",
  },
  {
    id: "5",
    ref_no: "RE0000001",
    title: "Payment not see...",
    category: "Payment",
    staff: "Bisi Alonge",
    status: "Ongoing",
  },
  {
    id: "6",
    ref_no: "RE0000001",
    title: "Payment not see...",
    category: "Payment",
    staff: "Bisi Alonge",
    status: "Resolved",
  },
  {
    id: "7",
    ref_no: "RE0000001",
    title: "Payment not see...",
    category: "Payment",
    staff: "Bisi Alonge",
    status: "Resolved",
  },
  {
    id: "8",
    ref_no: "RE0000001",
    title: "Payment not see...",
    category: "Payment",
    staff: "Bisi Alonge",
    status: "Resolved",
  },
  {
    id: "9",
    ref_no: "RE0000001",
    title: "Payment not see...",
    category: "Payment",
    staff: "Bisi Alonge",
    status: "Resolved",
  },
];

const ComplaintLog = () => {
  return (
    <>
      <div className={styles.header}>
        <h3>COMPLAINTS LOG</h3>
        <div className={styles.filterFlex}>
          <h3>Filter</h3>
          <SvgFilterIcon />
          <button>Custom Message</button>
        </div>
      </div>
      <div className={"tableWrapper"}>
        <table>
          <thead>
            <tr>
              <th>Ref No.</th>
              <th>Title</th>
              <th>Category</th>
              <th>Staff</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((row) => {
              const status = row.status.toLowerCase();
              const bgColor =
                status === "ongoing"
                  ? "#F2F6F2"
                  : status === "new"
                  ? "#FCDEE4"
                  : "#F3FFF3";
              const color =
                status === "ongoing"
                  ? "#344437"
                  : status === "new"
                  ? "#CA0814"
                  : "#36B44A";
              return (
                <tr key={row.id}>
                  <td>{row.ref_no}</td>
                  <td>{row.title}</td>
                  <td>{row.category}</td>
                  <td>{row.staff}</td>
                  <td className={styles.statusContainer}>
                    <p
                      style={{
                        backgroundColor: bgColor,
                        color,
                        padding: "2px 10px",
                        borderRadius: "20px",
                        width: "fit-content",
                      }}>
                      {row.status}
                    </p>
                  </td>
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
    </>
  );
};

export default ComplaintLog;
