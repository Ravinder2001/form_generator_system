import { Routes, Route } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import { Create_Route, Home_Route, List_Route, Login_Route, Profile_Route } from "../Utils/Constant";
import ErrorFallback from "../Error/ErrorFallback";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import CreateForm from "../Pages/CreateForm/CreateForm";
import List from "../Pages/List/List";
import Profile from "../Pages/Profile/Profile";

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
      <Route
        path={Create_Route}
        element={
          <PrivateRoutes>
            <CreateForm />
          </PrivateRoutes>
        }
      />
      <Route
        path={List_Route}
        element={
          <PrivateRoutes>
            <List />
          </PrivateRoutes>
        }
      />
      <Route
        path={Profile_Route}
        element={
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        }
      />
      <Route path="*" element={<ErrorFallback />} />
    </Routes>
  );
}

export default ProjectRoutes;
