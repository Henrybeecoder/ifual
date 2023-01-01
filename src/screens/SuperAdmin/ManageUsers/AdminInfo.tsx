import Button from "@components/Button";
import { InputTemp, SelectTemp } from "@components/InputTemp";
import { TitleHeader } from "@components/PageHeader";
import { useNavigate } from "react-router-dom";
import Layout from "../../../containers/LayoutSuperAdmin";
import styles from "./style.module.css";

const AddAdmin = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <TitleHeader
        backBtn
        pageTitle='ADD ADMIN'
        parentPageTitle='MANAGE USERS'
      />
      <div className={"w-50-lg"}>
        <InputTemp label='STAFF NAME' placeholder='Type to select staff' />
        <SelectTemp label='CATEGORY' placeholder='Select Admin Category' />
        <div className={styles.btnsFooter}>
          <Button
            variant='outline'
            text='Back'
            width='42%'
            onClick={() =>
              navigate({
                pathname: "/super-admin/manage-users",
                search: "type=admin",
              })
            }
          />
          <Button variant='dark' text='Save' width='55%' />
        </div>
      </div>
    </Layout>
  );
};

export default AddAdmin;
