import { Routes, Route } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import { Form_Details_Route, Home_Route, List_Route, Login_Route, Profile_Route, QR_Generator_Route } from "../Utils/Constant";
import ErrorFallback from "../Error/ErrorFallback";
import Login from "../Pages/Login/Login";
import List from "../Pages/List/List";
import Profile from "../Pages/Profile/Profile";
import FormGenerator from "../Pages/FormGenerator/FormGenerator";
import FormDetails from "../Pages/FormDetails/FormDetails";
import QRGenerator from "../Pages/QRGenerator/QRGenerator";

function ProjectRoutes() {
  return (
    <Routes >
      <Route
        path={Login_Route}
        element={
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        }
      />
      <Route
        path={`${Form_Details_Route}/:form_id`}
        element={
          <PublicRoutes>
            <FormDetails />
          </PublicRoutes>
        }
      />
      <Route
        path={Home_Route}
        element={
          <PrivateRoutes>
            <FormGenerator />
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
        path={QR_Generator_Route}
        element={
          <PrivateRoutes>
            <QRGenerator />
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
