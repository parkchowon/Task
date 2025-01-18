import { useNavigate } from "react-router-dom";
import SubmitBtn from "../components/Buttons/SubmitBtn";
import AuthInput from "../components/Inputs/AuthInput";
import { useState } from "react";

function SignInPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData(() => ({
      ...formData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-3">
      <AuthInput
        type="아이디"
        name="id"
        value={formData.id}
        onChange={handleInputChange}
      />
      <AuthInput
        type="비밀번호"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        isPassword
      />
      <SubmitBtn type="로그인" />
      <p className="text-sm text-center">
        계정이 없으신가요?{" "}
        <button
          className="underline underline-offset-2 hover:text-sky-600"
          onClick={() => navigate("/auth/signup")}
        >
          회원가입
        </button>
      </p>
    </div>
  );
}

export default SignInPage;
