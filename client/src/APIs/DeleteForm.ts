import { Request_Succesfull } from "../Utils/Constant";
import { FormType } from "../Utils/Types";
import axiosInstance from "../Utils/axiosInstance/axiosInstance";
const DeleteForm = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/form/delete/${id}`);
    if (response.status === Request_Succesfull) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
export default DeleteForm;
