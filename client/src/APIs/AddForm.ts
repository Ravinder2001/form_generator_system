import { Request_Succesfull } from "../Utils/Constant";
import { FormType } from "../Utils/Types";
import axiosInstance from "../Utils/axiosInstance/axiosInstance";
const AddForm = async (data: FormType) => {
  try {
    const response = await axiosInstance.post(`/form/add`,data);
    if (response.status === Request_Succesfull) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
export default AddForm;
