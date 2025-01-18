export type RegisterBodyType = {
  id: string;
  password: string;
  nickname: string;
};

export type CreateUserResponse = {
  success: boolean;
  message: string;
};

export type AuthInputProps = {
  type: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  isPassword?: boolean;
};
