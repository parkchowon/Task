import { useQuery } from "@tanstack/react-query";
import { getUser } from "../apis/auth.api";
import { useUserStore } from "../stores/user.store";
import { useEffect } from "react";

function HomePage() {
  const { setUser } = useUserStore();
  const { data, isPending } = useQuery({
    queryKey: ["userData"],
    queryFn: () => getUser(),
  });

  useEffect(() => {
    if (data) {
      setUser({
        avatar: data?.avatar || "",
        id: data.id,
        nickname: data.nickname,
      });
    } else {
      // token이 만료되었거나 서버 오류로 인한 user 정보가 없을 때 token 삭제
      localStorage.removeItem("accessToken");
    }
  }, [data]);

  if (isPending)
    return (
      <div className="fixed flex inset-0 bg-black/40 items-center justify-center">
        <p className="text-white font-bold">loading...</p>
      </div>
    );
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="">
        <p className="text-5xl text-white font-bold">Welcome to Task!</p>
        <p className="text-sm text-white font-thin">
          이 페이지는 내일배움캠프에서 주관하는 한달 인턴 프로그램의 과제로 만든
          사이트입니다.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
