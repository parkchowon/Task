import { CreateUserResponse, RegisterBodyType } from "../types/auth.type";

const API_URL = import.meta.env.VITE_API_URL;

export const createUser = async (
  userData: RegisterBodyType
): Promise<CreateUserResponse> => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // JSON 데이터를 명시적으로 전달
      },
      body: JSON.stringify({
        id: userData.id,
        password: userData.password,
        nickname: userData.nickname,
      }),
    });

    if (!response.ok) {
      throw new Error("회원가입 요청 실패");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return { message: "회원가입 요청 실패", success: false };
  }
};
