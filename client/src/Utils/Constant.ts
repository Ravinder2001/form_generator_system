import { ToastOptions } from "react-toastify";
export const LocalStorageKey = "form_generator_system";
export const Request_Succesfull = 200;
export const Bad_Request = 400;
export const Unauthorized = 401;

//Routes
export const Home_Route = "/";
export const Login_Route = "/login";


export const ToastError: ToastOptions = {
  position: "bottom-left",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};
