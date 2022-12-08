import styles from "./style.module.css";
import LayoutSuperAdmin from "../../../containers/LayoutSuperAdmin";
import { SvgFilterIcon, SvgOptions } from "../../../assets/Svgs";
import { useState } from "react";
import { customer_data, vendor_data, admin_data } from "./data";

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
          {page !== "customer" && (
            <button className={""}>{`Add ${
              page === "vendor" ? "Vendor" : page === "admin" && "Admin"
            }`}</button>
          )}
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
      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Last ACtivity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {customer_data?.map((row) => {
              return (
                <tr key={row.id}>
                  <td>{row.name}</td>
                  <td>{row.location}</td>
                  <td>{row.email}</td>
                  <td>{row.lastAct}</td>
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

const VendorPage = () => {
  return (
    <>
      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {vendor_data?.map((row) => {
              return (
                <tr key={row.id}>
                  <td>{row.name}</td>
                  <td>{row.location}</td>
                  <td>{row.email}</td>
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
    </>
  );
};

const AdminPage = () => {
  return (
    <>
      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {admin_data?.map((row) => {
              return (
                <tr key={row.id}>
                  <td>{row.name}</td>
                  <td>{row.category}</td>
                  <td>{row.email}</td>
                  <td>
                    <button>{row.action}</button>
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

export default ManageUsers;
