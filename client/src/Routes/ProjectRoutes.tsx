import { Routes, Route } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import { Home_Route, Login_Route } from "../Utils/Constant";
import ErrorFallback from "../Error/ErrorFallback";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

function ProjectRoutes() {
  return (
    <Routes>
      <Route
        path={Home_Route}
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }
      />
      <Route
        path={Login_Route}
        element={
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        }
      />
      <Route path="*" element={<ErrorFallback />} />
    </Routes>
  );
}

export default ProjectRoutes;
