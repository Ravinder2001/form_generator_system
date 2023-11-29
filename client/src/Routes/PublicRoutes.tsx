import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Form_Generator_Route, Home_Route } from "../Utils/Constant";
import { RootState } from "../Store/store";

type PublicRoutesType = {
  children: ReactNode;
};

function PublicRoutes({ children }: PublicRoutesType) {
  const User = useSelector((state: RootState) => state.UserSlice.user);
  return !User ? <div>{children}</div> : <Navigate to={Form_Generator_Route} />;
}

export default PublicRoutes;
