import React, { ReactNode, useState, useEffect, useMemo } from "react";
import styles from "../App.module.css";
import { RootState } from "../Store/store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Login_Route } from "../Utils/Constant";
import SidebarContainer from "../Components/Sidebar/Sidebar";
import { Helmet } from "react-helmet";
import favicon from "../Assets/Images/Main/favicon.ico";
type PrivateRoutesType = { children: ReactNode };
function PrivateRoutes({ children }: PrivateRoutesType) {
  const User = useSelector((state: RootState) => state.UserSlice.user);
  return User ? (
    <div className={styles.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Form Generator System</title>
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      </Helmet>
      <div className={styles.sidebar}>
        <SidebarContainer />
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  ) : (
    <Navigate to={Login_Route} />
  );
}

export default PrivateRoutes;
