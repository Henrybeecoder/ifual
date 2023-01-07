import PageHeader from "@components/PageHeader";
import Layout from "src/containers/LayoutVendor";
import OrderDetailsForm from "@components/OrderDetailsForm";

const OrderDetails = () => {
  return (
    <Layout>
      <PageHeader backBtn pageTitle='Product Details'>
        <h3>#Declined</h3>
      </PageHeader>
      <div className=''></div>
      <OrderDetailsForm />
    </Layout>
  );
};

export default OrderDetails;
