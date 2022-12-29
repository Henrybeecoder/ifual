import styles from "./style.module.css";
import { customer_data, vendor_data, admin_data } from "./data";
import { RenderPageProps } from "@type/shared";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import OptionsModal from "@components/OptionsModal";
import { ReactComponent as FilterSvg } from "../../../assets/navbericon/filter-outline.svg";
import Button from "@components/Button";
import { FilterHeader } from "@components/PageHeader";
import useMediaQuery from "src/Custom hooks/useMediaQuery";

interface ManageUsersProps {
  baseUrl: "admin" | "super-admin";
}

const ManageUsers = ({ baseUrl }: ManageUsersProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width: 800px)");
  const page = searchParams.get("type");

  const renderPage: RenderPageProps = {
    customer: <CustomerPage baseUrl={baseUrl} />,
    vendor: <VendorPage baseUrl={baseUrl} />,
    admin:
      baseUrl === "super-admin" ? (
        <AdminPage baseUrl={baseUrl} />
      ) : (
        <div>Not a super-admin</div>
      ),
  };

  return (
    <>
      <FilterHeader pageTitle='MANAGE USERS' options={[]}>
        <>
          {page === "vendor" ? (
            // <Button text='Add Vendor' width='100px' height='37px' />
            <Link
              to={{ pathname: "add-vendor" }}
              style={{
                border: "1px solid gainsboro",
                padding: "10px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "500",
                textDecoration: "none",
                color: "#344437",
              }}>
              Add Vendor
            </Link>
          ) : page === "admin" ? (
            <Button
              text='Add Admin'
              width='100px'
              height='37px'
              onClick={() => navigate(`/${baseUrl}/manage-users/add-admin`)}
            />
          ) : null}
        </>
      </FilterHeader>

      <div className={styles.flexMenu}>
        <button
          className={`${
            page !== "vendor" && page !== "admin" && styles.active
          }`}
          onClick={() => setSearchParams("type=customer", { replace: true })}>
          CUSTOMER
        </button>
        <button
          className={`${page === "vendor" && styles.active}`}
          onClick={() => setSearchParams("type=vendor", { replace: true })}>
          VENDOR
        </button>
        {baseUrl === "super-admin" && (
          <button
            className={`${page === "admin" && styles.active}`}
            onClick={() => setSearchParams("type=admin", { replace: true })}>
            ADMIN
          </button>
        )}
      </div>
      {page ? renderPage[page] : <CustomerPage baseUrl={baseUrl} />}
    </>
  );
};

const CustomerPage = ({ baseUrl }: { baseUrl: string }) => {
  const navigate = useNavigate();
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
                    <OptionsModal>
                      <button
                        onClick={() =>
                          navigate({
                            pathname: `/${baseUrl}/manage-users/customer-info`,
                            search: `customer=${row.id}`,
                          })
                        }>
                        View
                      </button>
                      <button>Edit</button>
                      <button>Suspend</button>
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

const VendorPage = ({ baseUrl }: { baseUrl: string }) => {
  const navigate = useNavigate();
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
                    <OptionsModal>
                      <button
                        onClick={() =>
                          navigate({
                            pathname: `/${baseUrl}/manage-users/vendor-info`,
                            search: `vendor=${row.id}`,
                          })
                        }>
                        View
                      </button>
                      <button>Edit</button>
                      <button>Suspend</button>
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

const AdminPage = ({ baseUrl }: { baseUrl: string }) => {
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
                    <Button text='deactivate' height='25px' width='80px' />
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
