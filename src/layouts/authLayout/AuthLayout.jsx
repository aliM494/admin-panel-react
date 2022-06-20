import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../pages/auth/Login";
import { useIsLogin } from "../../hooks/authHook";
import { Navigate } from "react-router-dom";

const AuthLayout = () => {
  const [isLogin, loading] = useIsLogin();

  return (
    <div className="limiter">
      <div className="container-login100">
        {loading ? (
          <h1 className="text-center">لطفا صبر کنید....</h1>
        ) : !isLogin ? (
        <Routes>
          <Route path="/auth/login" element={<Login />} />
        </Routes>
        ) : (
          <Navigate to="/" />
        )}

       
      </div>
    </div>
  );
};

export default AuthLayout;
