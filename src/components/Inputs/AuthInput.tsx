import { InputProps } from "../../types/auth.type";

function AuthInput({ type, name, value, onChange, isPassword }: InputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <input
      type={isPassword ? "password" : "text"}
      name={name}
      value={value}
      onChange={handleInputChange}
      className="w-72 py-3 px-5 rounded-full bg-black/25 outline-none text-sm placeholder:text-white focus:border-sky-700"
      placeholder={`${type}(을)를 입력하세요`}
    />
  );
}

export default AuthInput;
