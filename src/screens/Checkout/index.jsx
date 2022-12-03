import LayoutCustomer from "../../containers/LayoutCustomer";

const Checkout = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <LayoutCustomer user={user}>
      <div>Checkout Product</div>
    </LayoutCustomer>
  );
};

export default Checkout;
