import axios from "axios";
import {
  CreateUserResponseType,
  GetUserResponseType,
  LoginBodyType,
  LoginUserResponseType,
  RegisterBodyType,
} from "../types/auth.type";

const API_URL = import.meta.env.VITE_API_URL;

// 회원가입
export const createUser = async (
  userData: RegisterBodyType
): Promise<CreateUserResponseType> => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    const result = response.data;
    return result;
  } catch (error) {
    console.error(error);
    return { message: "회원가입 요청 실패", success: false };
  }
};

// 로그인
export const signInUser = async (
  userData: LoginBodyType
): Promise<LoginUserResponseType | null> => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    const result = response.data;
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// 회원정보 확인
export const getUser = async (): Promise<GetUserResponseType | null> => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      const response = await axios.get(`${API_URL}/user`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const result = response.data;
      return result;
    } catch (error) {
      console.error("회원정보 확인 실패", error);
      return null;
    }
  }
  return null;
};

export const patchUserProfile = async () => {};
