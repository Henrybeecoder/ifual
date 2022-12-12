import { InputTemp, SelectTemp } from "@components/InputTemp";
import { useNavigate } from "react-router-dom";
import LayoutSuperAdmin from "../../../containers/LayoutSuperAdmin";
import styles from "./style.module.css";

const AddAdmin = () => {
  const navigate = useNavigate();
  return (
    <LayoutSuperAdmin>
      <div className={styles.header}>
        <h3>
          <span>MANAGE ADMIN /</span> ADD ADMIN
        </h3>
      </div>
      <div className={styles.containerAA}>
        <InputTemp label='STAFF NAME' placeholder='Type to select staff' />
        <SelectTemp label='CATEGORY' placeholder='Select Admin Category' />
        <div className={styles.btnsFooterAA}>
          <button
            onClick={() =>
              navigate({
                pathname: "/super-admin/manage-users",
                search: "type=admin",
              })
            }
            className={styles.btnBackAA}>
            Back
          </button>
          <button className={styles.btnSaveAA}>Save</button>
        </div>
      </div>
    </LayoutSuperAdmin>
  );
};

export default AddAdmin;
