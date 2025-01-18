import { useNavigate } from "react-router-dom";

function Header() {
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
          className="lg:w-24 w-20 h-full rounded-full text-xs hover:bg-white/20 hover:text-sky-700"
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
        <p className="text-sm lg:block hidden">
          <span className="font-semibold">박초원</span>님
        </p>
        <div className="h-full aspect-square bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}

export default Header;
