import { Request_Succesfull } from "../Utils/Constant";
import axiosInstance from "../Utils/axiosInstance/axiosInstance";
type props = {
  email: string;
  password: string;
  remember:boolean
};
const Login_User = async (props: props) => {
  try {
    let data = {
      email: props.email,
      password: props.password,
      remember: props.remember,
    };
    const response = await axiosInstance.post(`/login`, data);
    if (response.status === Request_Succesfull) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
export default Login_User;
