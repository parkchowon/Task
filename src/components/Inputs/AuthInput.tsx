import { AuthInputProps } from "../../types/auth.type";

function AuthInput({
  type,
  name,
  value,
  onChange,
  isPassword,
}: AuthInputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <input
      type={isPassword ? "password" : "text"}
      name={name}
      value={value}
      onChange={handleInputChange}
      className="py-3 px-5 border border-gray-500 rounded-full outline-none text-sm w-72"
      placeholder={`${type}(을)를 입력하세요`}
    />
  );
}

export default AuthInput;
