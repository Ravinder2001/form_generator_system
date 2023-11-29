import { Request_Succesfull } from "../Utils/Constant";
import axiosInstance from "../Utils/axiosInstance/axiosInstance";
const GetFormList = async (page: number) => {
  try {
    const response = await axiosInstance.get(`/form/getList?page=${page}`);
    if (response.status === Request_Succesfull) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
export default GetFormList;
