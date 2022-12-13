import { InputTemp, SelectTemp } from "@components/InputTemp";
import { useNavigate } from "react-router-dom";
import Layout from "../../../containers/LayoutSuperAdmin";
import styles from "./style.module.css";

const AddAdmin = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className={styles.header}>
        <h3>
          <span>MANAGE ADMIN /</span> ADD ADMIN
        </h3>
      </div>
      <div className={styles.container}>
        <InputTemp label='STAFF NAME' placeholder='Type to select staff' />
        <SelectTemp label='CATEGORY' placeholder='Select Admin Category' />
        <div className={styles.btnsFooter}>
          <button
            onClick={() =>
              navigate({
                pathname: "/super-admin/manage-users",
                search: "type=admin",
              })
            }
            className={styles.btnBack}>
            Back
          </button>
          <button className={styles.btnSave}>Save</button>
        </div>
      </div>
    </Layout>
  );
};

export default AddAdmin;
