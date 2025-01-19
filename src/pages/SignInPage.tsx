import { useNavigate } from "react-router-dom";
import SubmitBtn from "../components/Buttons/SubmitBtn";
import AuthInput from "../components/Inputs/AuthInput";
import { useState } from "react";
import { signInUser } from "../apis/auth.api";
import { useMutation } from "@tanstack/react-query";
import { LoginBodyType } from "../types/auth.type";
import * as Sentry from "@sentry/react";

function SignInPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  const { mutate, isPending, data } = useMutation({
    mutationFn: ({ id, password }: LoginBodyType) =>
      signInUser({ id, password }),
    onSuccess: () => {
      navigate("/");
      if (data) {
        localStorage.setItem("accessToken", data.accessToken);
      }
    },
    onError: () => {
      Sentry.captureException("로그인 실패");
    },
  });

  // submit 버튼 클릭 로직
  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ id: formData.id, password: formData.password });
  };

  // input change 함수
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
    <div className="flex flex-col gap-3">
      <form className="flex flex-col gap-3" onSubmit={handleLoginSubmit}>
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
      </form>
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
