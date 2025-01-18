function MyPage() {
  return (
    <div className="flex flex-col w-[80%] min-w-[300px] h-[90%] py-[1.7%] px-[2%] items-center bg-white/50 rounded-lg">
      <p className="text-2xl font-thin w-full">마이페이지</p>
      <div className="h-[1px] w-full bg-sky-700 my-2"></div>
      <div className="flex flex-col w-full h-full lg:pt-10 py-1 px-1 items-center lg:gap-10 gap-2">
        <img
          src="/"
          alt="프로필"
          className="border rounded-full lg:w-64 lg:h-64 w-40 h-40 bg-gray-300"
        />
        <div className="flex flex-col gap-3 justify-center">
          <p>
            <span className="font-bold mr-2">닉네임</span>사용자 닉네임
          </p>
          <p>
            <span className="font-bold mr-2">아이디</span>사용자 아이디
          </p>
        </div>
        <button className="lg:w-64 w-40 bg-black text-white rounded-full lg:py-3 py-2">
          수정하기
        </button>
      </div>
    </div>
  );
}

export default MyPage;
