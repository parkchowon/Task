import axios from "axios";
import { CreateUserResponse, RegisterBodyType } from "../types/auth.type";

const API_URL = import.meta.env.VITE_API_URL;

export const createUser = async (
  userData: RegisterBodyType
): Promise<CreateUserResponse> => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    const result = response.data;
    return result;
  } catch (error) {
    console.error(error);
    return { message: "회원가입 요청 실패", success: false };
  }
};
