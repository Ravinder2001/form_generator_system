import { Request_Succesfull } from "../Utils/Constant";
import axiosInstance from "../Utils/axiosInstance/axiosInstance";
const FormSearch = async (text: string, page: number) => {
  try {
    const response = await axiosInstance.get(`/form/form_search?search=${text}&page=${page}`);
    if (response.status === Request_Succesfull) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
export default FormSearch;
