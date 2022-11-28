import React from "react";
import Login from "./screens/Login";
import StartPage from "./screens/StartPage";
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
import Notification from "./screens/NotificationA";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route
          path='/forgot-password-message'
          element={<ForgotPasswordMessage />}
        />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/order-status' element={<OrderStatus />} />
        <Route path='/product-list' element={<ProductList />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/sign-up-message' element={<SignUpMessage />} />
        <Route path='/sign-up-next' element={<SignUpNext />} />
      </Routes>
    </Router>
  );
}

export default App;
