import styles from "./style.module.css";
import { SvgFilterIcon, SvgOptions } from "../../../assets/Svgs";
import { customer_data, vendor_data, admin_data } from "./data";
import { RenderPageProps } from "@type/shared";
import { useNavigate, useSearchParams } from "react-router-dom";

interface ManageUsersProps {
  baseUrl: "admin" | "super-admin";
}

const ManageUsers = ({ baseUrl }: ManageUsersProps) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const page = searchParams.get("type");

  const renderPage: RenderPageProps = {
    customer: <CustomerPage />,
    vendor: <VendorPage />,
    admin:
      baseUrl === "super-admin" ? <AdminPage /> : <div>Not a super-admin</div>,
  };

  return (
    <>
      <div className={styles.header}>
        <h3>SETTINGS</h3>
        <div className={styles.filterFlex}>
          <h3>Filter</h3>
          <SvgFilterIcon />
          {page === "vendor" ? (
            <button>Add Vendor</button>
          ) : (
            page === "admin" && (
              <button
                onClick={() => navigate(`/${baseUrl}/manage-users/add-admin`)}>
                Add Admin
              </button>
            )
          )}
        </div>
      </div>
      <div className={styles.flexMenu}>
        <button
          className={`${
            page !== "vendor" && page !== "admin" && styles.active
          }`}
          onClick={() =>
            navigate({
              pathname: `/${baseUrl}/manage-users`,
              search: "type=customer",
            })
          }>
          CUSTOMER
        </button>
        <button
          className={`${page === "vendor" && styles.active}`}
          onClick={() =>
            navigate({
              pathname: `/${baseUrl}/manage-users`,
              search: "type=vendor",
            })
          }>
          VENDOR
        </button>
        {baseUrl === "super-admin" && (
          <button
            className={`${page === "admin" && styles.active}`}
            onClick={() =>
              navigate({
                pathname: "/super-admin/manage-users",
                search: "type=admin",
              })
            }>
            ADMIN
          </button>
        )}
      </div>
      {page ? renderPage[page] : <CustomerPage />}
    </>
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
