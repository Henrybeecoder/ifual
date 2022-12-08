import styles from "./style.module.css";
import LayoutSuperAdmin from "../../../containers/LayoutSuperAdmin";
import { SvgFilterIcon } from "../../../assets/Svgs";
import { useState } from "react";
import { useTable } from "react-table";
import Table from "../../../Components/Table";
import {
  customer_columns,
  customer_data,
  vendor_data,
  vendor_columns,
} from "./data";

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
  return (
    <>
      <Table columns={customer_columns} data={customer_data} />
    </>
  );
};

const VendorPage = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: vendor_columns, data: vendor_data });
  return (
    <>
      <div className={styles.tableWrapper}>
        <table {...getTableProps()}>
          <thead>
            {headerGroups?.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className={styles.tableHeadRow}>
                {headerGroup.headers?.map((column) => (
                  <th {...column.getHeaderProps()} key={column}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows?.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id}>
                  {row?.cells?.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

const AdminPage = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: vendor_columns, data: vendor_data });
  return (
    <>
      <div className={styles.tableWrapper}>
        <table {...getTableProps()}>
          <thead>
            {headerGroups?.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className={styles.tableHeadRow}>
                {headerGroup.headers?.map((column) => (
                  <th {...column.getHeaderProps()} key={column}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows?.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id}>
                  {row?.cells?.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageUsers;
