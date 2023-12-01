import { Request_Succesfull } from "../Utils/Constant";
import axiosInstance from "../Utils/axiosInstance/axiosInstance";
const FormDetails = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/form/form_details/${id}`);
    if (response.status === Request_Succesfull) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
export default FormDetails;
