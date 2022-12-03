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

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/vendor/dashboard' element={<Dashboard />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route
          path='/forgot-password-message'
          element={<ForgotPasswordMessage />}
        />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/vendor/order-status' element={<OrderStatus />} />
        <Route path='/vendor/product-list' element={<ProductList />} />
        <Route path='/vendor/notification' element={<Notification />} />
        <Route path='/vendor/report' element={<Report />} />
        <Route path='/sign-up-message' element={<SignUpMessage />} />
        <Route path='/sign-up-next' element={<SignUpNext />} />
      </Routes>
    </Router>
  );
}

export default App;
