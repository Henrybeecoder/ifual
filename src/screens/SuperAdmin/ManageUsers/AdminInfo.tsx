import Button from "@components/Button";
import { InputTemp, SelectTemp } from "@components/InputTemp";
import Modal from "@components/Modals";
import { EditBtn, PageHeader, Pagination } from "@components/PageHeader";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../../containers/LayoutSuperAdmin";
import styles from "./style.module.css";

const AddAdmin = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const [modal, setModal] = useState(false);

  return (
    <Layout>
      <Modal openModal={modal} closeModal={() => setModal((state) => !state)}>
        <h3>Deactivate Admin</h3>
        <p>
          You are about to deactivate Felix Ajah as an Admin. Please note Staff
          will no longer have access to this portal.
        </p>
        <div className='flex-btwn'>
          <Button text='Back' width='55%' onClick={() => setModal(false)} />
          <Button text='Deactivate' width='40%' variant='danger' />
        </div>
      </Modal>
      <PageHeader
        backBtn
        pageTitle={id !== "new" ? "ADMIN DETAILS" : "ADD ADMIN"}
        parentPageTitle='MANAGE USERS'>
        {id !== "new" && <EditBtn />}
        <Pagination current={8} total={8} />
      </PageHeader>
      <div className='flex-lg gap-20'>
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
        {id !== "new" ? (
          <div className={styles.btnSection}>
            <Button
              text='Deactivate'
              variant='danger'
              width='140px'
              onClick={() => setModal(true)}
            />
          </div>
        ) : null}
      </div>
    </Layout>
  );
};

export default AddAdmin;
