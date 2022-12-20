import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Dashboard from "./screens/Dashboard";
import ForgotPassword from "./screens/ForgotPassword";
import ForgotPasswordMessage from "./screens/ForgotPasswordMessage";
import ResetPassword from "./screens/ResetPassword";
import OrderStatus from "./screens/OrderStatus";
import ProductList from "./screens/ProductList";
import SignUpMessage from "./screens/SignUpMessage";
import SignUpNext from "./screens/SignUpNext";
// customer
import Notification from "./screens/Notification";
import Report from "./screens/Report";
import Home from "./screens/Home";
import Checkout from "./screens/Checkout";
import Cart from "./screens/Cart";
import Profile from "./screens/Customer/Profile";
// admin
import LoginAdmin from "./screens/Admin/Login";
import DashboardAdmin from "./screens/Admin/Dashboard";
import SettingsAdmin from "./screens/Admin/Settings";
import CannotLoginAdmin from "./screens/Admin/Login/CannotLogin";
import ManageOrdersAdmin from "./screens/Admin/ManageOrders";
import ComplaintsLogAdmin from "./screens/Admin/ComplaintsLog";
import ActivityLogAdmin from "./screens/Admin/ActivityLog";
import ManageUsersAdmin from "./screens/Admin/ManageUsers";
import VendorInfoAdmin from "./screens/Admin/ManageUsers/VendorInfo";
import NotificationAdmin from "./screens/Admin/Notification";
// superadmin
import DashboardSuperAdmin from "./screens/SuperAdmin/Dashboard";
import SettingsSuperAdmin from "./screens/SuperAdmin/Settings";
import ManageUsersSuperAdmin from "./screens/SuperAdmin/ManageUsers";
import ManageProducts from "./screens/SuperAdmin/ManageProducts";
import ManageOrdersSuperAdmin from "./screens/SuperAdmin/ManageOrders";
import ComplaintsLogSuperAdmin from "./screens/SuperAdmin/ComplaintsLog";
import ActivityLogSuperAdmin from "./screens/SuperAdmin/ActivityLog";
import LoginSuperAdmin from "./screens/SuperAdmin/Login";
import AddAdmin from "./screens/SuperAdmin/ManageUsers/AddAdmin";
import CustomerInfo from "./screens/SuperAdmin/ManageUsers/CustomerInfo";
import VendorInfoSuperAdmin from "./screens/SuperAdmin/ManageUsers/VendorInfo";
import CannotLoginSuperAdmin from "./screens/SuperAdmin/Login/CannotLogin";
import NotificationSuperAdmin from "./screens/SuperAdmin/Notification";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='customer'>
          <Route path='profile' element={<Profile />} />
        </Route>

        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route
          path='/forgot-password-message'
          element={<ForgotPasswordMessage />}
        />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/sign-up-message' element={<SignUpMessage />} />
        <Route path='/sign-up-next' element={<SignUpNext />} />

        <Route path='/vendor'>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='order-status' element={<OrderStatus />} />
          <Route path='product-list' element={<ProductList />} />
          <Route path='notification' element={<Notification />} />
          <Route path='report' element={<Report />} />
        </Route>

        <Route path='/admin'>
          <Route index element={<LoginAdmin />} />
          <Route path='login-issue' element={<CannotLoginAdmin />} />
          <Route path='notification' element={<NotificationAdmin />} />
          <Route path='dashboard' element={<DashboardAdmin />} />
          <Route path='settings' element={<SettingsAdmin />} />
          <Route path='manage-users'>
            <Route index element={<ManageUsersAdmin />} />
            <Route path='customer-info' element={<CustomerInfo />} />
            <Route path='vendor-info' element={<VendorInfoAdmin />} />
          </Route>
          <Route path='manage-products' element={<ManageProducts />} />
          <Route path='manage-orders' element={<ManageOrdersAdmin />} />
          <Route path='complaints-log' element={<ComplaintsLogAdmin />} />
          <Route path='activity-log' element={<ActivityLogAdmin />} />
        </Route>

        <Route path='/super-admin'>
          <Route index element={<LoginSuperAdmin />} />
          <Route path='login-issue' element={<CannotLoginSuperAdmin />} />
          <Route path='notification' element={<NotificationSuperAdmin />} />
          <Route path='dashboard' element={<DashboardSuperAdmin />} />
          <Route path='settings' element={<SettingsSuperAdmin />} />
          <Route path='manage-users'>
            <Route index element={<ManageUsersSuperAdmin />} />
            <Route path='add-admin' element={<AddAdmin />} />
            <Route path='customer-info' element={<CustomerInfo />} />
            <Route path='vendor-info' element={<VendorInfoSuperAdmin />} />
          </Route>
          <Route path='manage-products' element={<ManageProducts />} />
          <Route path='manage-orders' element={<ManageOrdersSuperAdmin />} />
          <Route path='complaints-log' element={<ComplaintsLogSuperAdmin />} />
          <Route path='activity-log' element={<ActivityLogSuperAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
