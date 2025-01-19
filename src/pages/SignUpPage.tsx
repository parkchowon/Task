import AuthInput from "../components/Inputs/AuthInput";
import SubmitBtn from "../components/Buttons/SubmitBtn";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUser } from "../apis/auth.api";
import { useMutation } from "@tanstack/react-query";
import { RegisterBodyType } from "../types/auth.type";
import * as Sentry from "@sentry/react";

function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nickname: "",
    id: "",
    password: "",
    confirmPassword: "",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, password, nickname }: RegisterBodyType) =>
      createUser({ id, password, nickname }),
    onSuccess: () => {
      return navigate("/auth/signin");
    },
    onError: (error) => {
      Sentry.captureException(error.message);
    },
  });

  const handleSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return confirm("비밀번호가 체크한 것과 다릅니다.");
    }
    mutate({
      id: formData.id,
      password: formData.password,
      nickname: formData.nickname,
    });
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(() => ({
      ...formData,
      [name]: value,
    }));
  };

  if (isPending) {
    return (
      <div className="fixed flex inset-0 bg-black/40 items-center justify-center">
        <p className="text-white font-bold">loading...</p>
      </div>
    );
  }

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
