// 회원가입 할 때 필요한 값
export type RegisterBodyType = {
  id: string;
  password: string;
  nickname: string;
};

// 로그인할 때 필요한 값
export type LoginBodyType = {
  id: string;
  password: string;
};

// 회원가입 후 받는 값
export type CreateUserResponseType = {
  success: boolean;
  message: string;
};

// 로그인 후 받는 값
export type LoginUserResponseType = {
  accessToken: string;
  userId: string;
  success: boolean;
  avatar: string;
  nickname: string;
};

//회원 정보를 받는 값
export type GetUserResponseType = {
  id: string;
  nickname: string;
  avatar: string | null;
  success: boolean;
};

//AuthInput 컴포넌트의 props
export type AuthInputProps = {
  type: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  isPassword?: boolean;
};

//useUserStore type
export type UserStoreType = {
  user: {
    nickname: string;
    id: string;
    avatar: string;
  };
  setUser: (value: { nickname: string; id: string; avatar: string }) => void;
};
