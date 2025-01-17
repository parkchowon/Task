export type RegisterBodyType = {
  nickname: string;
  id: string;
  password: string;
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
