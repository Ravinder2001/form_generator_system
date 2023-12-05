import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { Home_Route } from "../Utils/Constant";
import { RootState } from "../Store/store";
import { Helmet } from "react-helmet";
import favicon from "../Assets/Images/Min/favicon.ico";
import favicon2 from "../Assets/Images/Main/favicon.ico";
type PublicRoutesType = {
  children: ReactNode;
};

function PublicRoutes({ children }: PublicRoutesType) {
  const location = useLocation();
  const User = useSelector((state: RootState) => state.UserSlice.user);
  return !User || location.pathname.includes("verifyravanacheck") ? (
    <div>
      {location.pathname.includes("verifyravanacheck") ? (
        <Helmet>
          <meta charSet="utf-8" />
          <title>Mining Lease Monitoring System</title>
          <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
        </Helmet>
      ) : (
        <Helmet>
          <meta charSet="utf-8" />
          <title>Form Generator System</title>
          <link rel="icon" type="image/png" href={favicon2} sizes="16x16" />
        </Helmet>
      )}

      {children}
    </div>
  ) : (
    <Navigate to={Home_Route} />
  );
}

export default PublicRoutes;
