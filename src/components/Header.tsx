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
    <div className="absolute flex top-5 w-[50%] h-12 items-center rounded-full border border-black gap-8">
      <button
        onClick={handleHomeClick}
        className="flex h-full w-28 items-center justify-center font-extrabold text-white bg-black border-2 border-white rounded-full"
      >
        Task
      </button>
      <div className="flex h-full py-1 text-sm items-center gap-4">
        <button
          onClick={handleHomeClick}
          className="w-24 h-full rounded-full hover:bg-gray-100"
        >
          홈
        </button>
        <button
          onClick={handleMyPageClick}
          className="w-24 h-full rounded-full hover:bg-gray-100"
        >
          마이페이지
        </button>
      </div>
      <div className="flex h-full py-1 pr-1 items-center gap-2 ml-auto">
        <p className="text-sm">
          <span className="font-semibold">박초원</span>님
        </p>
        <div className="h-full aspect-square bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}

export default Header;
