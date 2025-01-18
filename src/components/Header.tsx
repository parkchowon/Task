import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/user.store";

function Header() {
  const { user } = useUserStore();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleMyPageClick = () => {
    navigate("/mypage");
  };
  return (
    <div className="flex lg:w-[50%] w-[80%] mt-[1.8%] h-12 items-center rounded-full bg-white/35 lg:gap-8 gap-2">
      <button
        onClick={handleHomeClick}
        className="flex h-full lg:w-32 px-3 items-center justify-center font-extralight text-sky-700 bg-white/35 text-xl border-2 border-transparent rounded-full hover:brightness-125"
      >
        Task
      </button>
      <div className="flex h-full py-1 text-sm items-center lg:gap-4 gap-2">
        <button
          onClick={handleHomeClick}
          className="lg:w-24 w-10 h-full rounded-full text-xs hover:bg-white/20 hover:text-sky-700"
        >
          홈
        </button>
        <button
          onClick={handleMyPageClick}
          className="lg:w-24 w-20 h-full rounded-full text-xs hover:bg-white/20 hover:text-sky-700"
        >
          마이페이지
        </button>
      </div>
      <div className="flex h-full py-1 pr-1 items-center gap-2 ml-auto">
        <div className="flex text-xs gap-2 mr-4">
          <button
            onClick={() => navigate("/auth/signin")}
            className="px-2 py-2 border border-sky-700 rounded-lg text-sky-700 lg:block hidden hover:bg-black/5"
          >
            로그인
          </button>
          <button
            onClick={() => navigate("/auth/signup")}
            className="px-2 py-2 border border-sky-700 rounded-lg text-white bg-sky-700 lg:block hidden hover:brightness-75"
          >
            회원가입
          </button>
        </div>
        <p className="text-sm lg:block hidden">
          <span className="font-semibold">
            {user.nickname ? user.nickname : "게스트"}
          </span>
          님
        </p>
        <div className="h-full aspect-square bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}

export default Header;
