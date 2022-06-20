import React from "react";
import AdminContextContainer from "../../context/adminLayoutContext";
import Content from "../../pages/Content";
import Navbar from "./navbar/Index";
import Sidebar from "./sidebar/Index";
import {useIsLogin} from '../../hooks/authHook'
import { Navigate } from "react-router-dom";

const Index = () => {

  const [isLogin,loading]=useIsLogin();

  return (
    <AdminContextContainer>

    {loading ? 
    (<h1>لطفا صبر کنید....</h1>)
    :isLogin ? (
      <div>
        <Content/>
        <Navbar />
        <Sidebar />
      </div>
    ) :(
      <Navigate to="/auth/login"/>
    )
  }
    </AdminContextContainer>
  );
};

export default Index;
