import { ToastOptions } from "react-toastify";
export const LocalStorageKey = "form_generator_system";
export const Request_Succesfull = 200;
export const Bad_Request = 400;
export const Unauthorized = 401;

//Routes
export const Login_Route = "/login";
export const Home_Route = "/";
export const QR_Generator_Route = "/qr_generator";
export const List_Route = "/list";
export const Profile_Route = "/profile";
export const Form_Details_Route = "/verifyravanacheck/view";


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
export const ToastSuccess: ToastOptions = {
  position: "bottom-left",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  };
