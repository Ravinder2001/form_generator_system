import React, { ReactNode, useState, useEffect, useMemo } from "react";
import styles from "../App.module.css";
import { RootState } from "../Store/store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Login_Route } from "../Utils/Constant";

type PrivateRoutesType = { children: ReactNode };

function PrivateRoutes({ children }: PrivateRoutesType) {
  const User = useSelector((state: RootState) => state.UserSlice.user);

  return User ? <div className={styles.container}>{children}</div> : <Navigate to={Login_Route} />;
}

export default PrivateRoutes;
