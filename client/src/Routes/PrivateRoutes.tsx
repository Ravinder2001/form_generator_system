import React, { ReactNode, useState, useEffect, useMemo } from "react";
import styles from "../App.module.css";
import { RootState } from "../Store/store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Login_Route } from "../Utils/Constant";
import SidebarContainer from "../Components/Sidebar/Sidebar";

type PrivateRoutesType = { children: ReactNode };

function PrivateRoutes({ children }: PrivateRoutesType) {
  const User = useSelector((state: RootState) => state.UserSlice.user);

  return User ? (
    <div className={styles.container}>
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
