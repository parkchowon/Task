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
): Promise<CreateUserResponseType | null> => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    const result = response.data;
    if (!result.success) {
      throw new Error(result.message);
    }
    return result;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

// 로그인
export const signInUser = async (
  userData: LoginBodyType
): Promise<LoginUserResponseType | null> => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    const result = response.data;
    if (!result.success) {
      throw new Error(result.message);
    }
    return result;
  } catch (error) {
    throw new Error(`${error}`);
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

// 유저 프로필 변경
export const patchUserProfile = async (formData: FormData) => {
  const accessToken = localStorage.getItem("accessToken");
  const response = await axios.patch(`${API_URL}/profile`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};
