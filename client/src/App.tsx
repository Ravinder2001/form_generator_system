import React, { Suspense } from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProjectRoutes from "./Routes/ProjectRoutes";

import { Form_Details_Route, Home_Route, List_Route, LocalStorageKey, QR_Generator_Route } from "./Utils/Constant";
import styles from "./App.module.scss";

import { useLocation, useNavigate } from "react-router-dom";
import { JWTDecode } from "./Utils/Function";
import { LoginSlice, LogoutSlice } from "./Store/slices/UserSlice";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem(LocalStorageKey);
    dispatch(LogoutSlice());
  };

  useEffect(() => {
    if (!location.pathname.includes("verifyravanacheck")) {
      const token = localStorage.getItem(LocalStorageKey);
      if (token) {
        const decode = JWTDecode(token);
        if (decode) {
          let exp = decode.exp;
          const currentTime = Math.floor(Date.now() / 1000);
          if (exp > currentTime) {
            dispatch(LoginSlice(decode));
            // navigate(List_Route);
            // navigate(QR_Generator_Route);
            navigate(Home_Route);
          } else {
            logout();
          }
        } else {
          logout();
        }
      } else {
        logout();
      }
    }
  }, []);


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectRoutes />
    </Suspense>
  );
}

export default App;
