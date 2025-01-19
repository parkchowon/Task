import AuthInput from "../components/Inputs/AuthInput";
import SubmitBtn from "../components/Buttons/SubmitBtn";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUser } from "../apis/auth.api";

function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nickname: "",
    id: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return confirm("비밀번호가 체크한 것과 다릅니다.");
    }
    const result = await createUser({
      id: formData.id,
      password: formData.password,
      nickname: formData.password,
    });
    if (result.success) {
      return navigate("/");
    } else {
      throw new Error(result.message);
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(() => ({
      ...formData,
      [name]: value,
    }));
  };

  return (
    <section className="flex flex-col gap-3">
      <form className="flex flex-col gap-3" onSubmit={handleSignUpSubmit}>
        <AuthInput
          type="닉네임"
          name="nickname"
          value={formData.nickname}
          onChange={handleInputChange}
        />
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
        <AuthInput
          type="비밀번호 확인"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          isPassword
        />
        <SubmitBtn type="회원가입" />
      </form>
      <p className="text-sm text-center">
        이미 계정이 있으신가요?{" "}
        <button
          className="underline underline-offset-2 hover:text-sky-600"
          onClick={() => navigate("/auth/signin")}
        >
          로그인하러
        </button>
      </p>
    </section>
  );
}

export default SignUpPage;
