import styles from "./style.module.css";
import { customer_data, vendor_data, admin_data } from "./data";
import { RenderPageProps } from "@type/shared";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import OptionsModal from "@components/OptionsModal";
import Button from "@components/Button";
import { FilterHeader } from "@components/PageHeader";
import useMediaQuery from "src/Custom hooks/useMediaQuery";
import { ReactComponent as ArrowRight } from "../../../assets/svg/dark-arrow-right.svg";
import { limitText } from "src/Custom hooks/helpers";
import VendorInfo from "./VendorInfo";
import CustomerInfo from "./CustomerInfo";
import AdminInfo from "../../../screens/SuperAdmin/ManageUsers/AdminInfo";

interface ManageUsersProps {
  baseUrl: "admin" | "super-admin";
}

const ManageUsers = ({ baseUrl }: ManageUsersProps) => {
  const navigate = useNavigate();

  return (
    <>
      {/* <FilterHeader pageTitle='MANAGE USERS' options={[]}>
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
      </FilterHeader> */}

      <div className={styles.flexMenu}>
        <NavLink
          to='customer'
          replace={true}
          style={{ textDecoration: "none", color: "black" }}>
          {({ isActive }) => (
            <p className={isActive ? styles.active : ""}>CUSTOMER</p>
          )}
        </NavLink>
        <NavLink
          to='vendor'
          replace={true}
          style={{ textDecoration: "none", color: "black" }}>
          {({ isActive }) => (
            <p className={isActive ? styles.active : ""}>VENDOR</p>
          )}
        </NavLink>
        {baseUrl === "super-admin" && (
          <NavLink
            to='admin'
            replace={true}
            style={{ textDecoration: "none", color: "black" }}>
            {({ isActive }) => (
              <p className={isActive ? styles.active : ""}>ADMIN</p>
            )}
          </NavLink>
        )}
      </div>
      <Routes>
        <Route index element={<CustomerPage baseUrl={baseUrl} />} />
        <Route path='customer'>
          <Route index element={<CustomerPage baseUrl={baseUrl} />} />
          <Route path=':id' element={<CustomerInfo />} />
        </Route>
        <Route path='vendor'>
          <Route index element={<VendorPage baseUrl={baseUrl} />} />
          <Route path=':id' element={<VendorInfo />} />
        </Route>
        {baseUrl === "super-admin" && (
          <Route path='admin'>
            <Route index element={<AdminPage baseUrl={baseUrl} />} />
            <Route path=':id' element={<AdminInfo />} />
          </Route>
        )}
      </Routes>
    </>
  );
};

const CustomerPage = ({ baseUrl }: { baseUrl: string }) => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width: 800px)");
  return (
    <>
      <div className={styles.tableWrapper}>
        {matches ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Email</th>
                <th>Last ACtivity</th>
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
                        <button onClick={() => navigate(`${row.id}`)}>
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
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Locat...</th>
                <th>Last Act</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {customer_data?.map((row) => {
                return (
                  <tr key={row.id}>
                    <td>{row.name}</td>
                    <td>{row.location}</td>
                    <td>{row.lastAct}</td>
                    <td>
                      <button
                        style={{ marginLeft: "-7px" }}
                        onClick={() => navigate(`${row.id}`)}>
                        <ArrowRight />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

const VendorPage = ({ baseUrl }: { baseUrl: string }) => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width: 800px)");
  return (
    <>
      <div className={styles.tableWrapper}>
        {matches ? (
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
                        <button onClick={() => navigate(`${row.id}`)}>
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
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Locat..</th>
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
                    <td>{row.status}</td>
                    <td>
                      <button
                        style={{ marginLeft: "-7px" }}
                        onClick={() => navigate(`${row.id}`)}>
                        <ArrowRight />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

const AdminPage = ({ baseUrl }: { baseUrl: string }) => {
  const matches = useMediaQuery("(min-width: 800px)");
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.tableWrapper}>
        {matches ? (
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
                    <td>
                      <OptionsModal>
                        <button onClick={() => navigate(`${row.id}`)}>
                          View
                        </button>
                      </OptionsModal>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Cat...</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {admin_data?.map((row) => {
                return (
                  <tr key={row.id}>
                    <td>{limitText(row.name, 7)}</td>
                    <td>{limitText(row.category, 5)}</td>
                    <td>
                      <Button text='Deacti...' height='25px' width='80px' />
                    </td>
                    <td>
                      <button
                        style={{ marginLeft: "-7px" }}
                        onClick={() => navigate(`${row.id}`)}>
                        <ArrowRight />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default ManageUsers;
