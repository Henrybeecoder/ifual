import styles from "./style.module.css";
import LayoutSuperAdmin from "../../../containers/LayoutSuperAdmin";
import { SvgFilterIcon } from "../../../assets/Svgs";
import { useMemo, useState } from "react";
import { useTable } from "react-table";

const data = [
  {
    name: "Esther Dunkwu",
    location: "Lagos",
    email: "Esther@gmail.com",
    lastAct: "2 hrs ago",
  },
  {
    name: "Esther Dunkwu",
    location: "Lagos",
    email: "Esther@gmail.com",
    lastAct: "2 hrs ago",
  },
  {
    name: "Esther Dunkwu",
    location: "Lagos",
    email: "Esther@gmail.com",
    lastAct: "2 hrs ago",
  },
  {
    name: "Esther Dunkwu",
    location: "Lagos",
    email: "Esther@gmail.com",
    lastAct: "2 hrs ago",
  },
  {
    name: "Esther Dunkwu",
    location: "Lagos",
    email: "Esther@gmail.com",
    lastAct: "2 hrs ago",
  },
  {
    name: "Esther Dunkwu",
    location: "Lagos",
    email: "Esther@gmail.com",
    lastAct: "2 hrs ago",
  },
  {
    name: "Esther Dunkwu",
    location: "Lagos",
    email: "Esther@gmail.com",
    lastAct: "2 hrs ago",
  },
];

const columns = [
  { Header: "Name", accessor: "name" },
  { Header: "Location", accessor: "location" },
  { Header: "Email", accessor: "email" },
  { Header: "Last Activity", accessor: "lastAct" },
];

const ManageUsers = () => {
  const [page, setPage] = useState("customer");

  const renderPage = {
    customer: <CustomerPage />,
    vendor: <VendorPage />,
    admin: <AdminPage />,
  };

  return (
    <LayoutSuperAdmin>
      <div className={styles.header}>
        <h3>SETTINGS</h3>
        <div className={styles.filterFlex}>
          <h3>Filter</h3>
          <SvgFilterIcon />
        </div>
      </div>
      <div className={styles.flexMenu}>
        <button
          className={`${page === "customer" && styles.active}`}
          onClick={() => setPage("customer")}>
          CUSTOMER
        </button>
        <button
          className={`${page === "vendor" && styles.active}`}
          onClick={() => setPage("vendor")}>
          VENDOR
        </button>
        <button
          className={`${page === "admin" && styles.active}`}
          onClick={() => setPage("admin")}>
          ADMIN
        </button>
      </div>
      {renderPage[page]}
    </LayoutSuperAdmin>
  );
};

const CustomerPage = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <table
        {...getTableProps()}
        style={{
          width: "100%",
          border: "1px solid gainsboro",
          borderRadius: "20px",
        }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    color: "black",
                    fontWeight: "600",
                  }}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        borderBottom: "1px solid gainsboro",
                      }}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

const VendorPage = () => {
  return <>vendor</>;
};

const AdminPage = () => {
  return <>admin</>;
};

export default ManageUsers;
