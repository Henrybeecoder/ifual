import React from "react";
import Login from "./screens/Login";
import LoginPage from "./screens/StartPage";
import SignUp from "./screens/SignUp";
import Dashboard from "./screens/Dashboard";
import ForgotPassword from "./screens/ForgotPassword";
import ForgotPasswordMessage from "./screens/ForgotPasswordMessage";
import ResetPassword from "./screens/ResetPassword";
import OrderStatus from "./screens/OrderStatus";
import ProductList from "./screens/ProductList";
import SignUpMessage from "./screens/SignUpMessage";
import SignUpNext from "./screens/SignUpNext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notification from "./screens/Notification";
import Report from "./screens/Report";
import Home from "./screens/Home";
import Checkout from "./screens/Checkout";
import Cart from "./screens/Cart";
import DashboardSuperAdmin from "./screens/SuperAdmin/Dashboard";
import Settings from "./screens/SuperAdmin/Settings";
import ManageUsers from "./screens/SuperAdmin/ManageUsers";
import ManageProducts from "./screens/SuperAdmin/ManageProducts";
import ManageOrders from "./screens/SuperAdmin/ManageOrders";
import ComplaintsLog from "./screens/SuperAdmin/ComplaintsLog";
import ActivityLog from "./screens/SuperAdmin/ActivityLog";
import LoginSuperAdmin from "./screens/SuperAdmin/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/vendor/dashboard' element={<Dashboard />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route
          path='/forgot-password-message'
          element={<ForgotPasswordMessage />}
        />

        <Route path='/vendor'>
          <Route path='order-status' element={<OrderStatus />} />
          <Route path='product-list' element={<ProductList />} />
          <Route path='notification' element={<Notification />} />
          <Route path='report' element={<Report />} />
        </Route>

        <Route path='/reset-password' element={<ResetPassword />} />

        <Route path='/sign-up-message' element={<SignUpMessage />} />
        <Route path='/sign-up-next' element={<SignUpNext />} />

        <Route path='/super-admin'>
          <Route index element={<LoginSuperAdmin />} />
          <Route path='dashboard' element={<DashboardSuperAdmin />} />
          <Route path='settings' element={<Settings />} />
          <Route path='manage-users' element={<ManageUsers />} />
          <Route path='manage-products' element={<ManageProducts />} />
          <Route path='manage-orders' element={<ManageOrders />} />
          <Route path='complaints-log' element={<ComplaintsLog />} />
          <Route path='activity-log' element={<ActivityLog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
