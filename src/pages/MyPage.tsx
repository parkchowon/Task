import { useQuery } from "@tanstack/react-query";
import { useUserStore } from "../stores/user.store";
import { getUser, patchUserProfile } from "../apis/auth.api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyPage() {
  const { user, setUser } = useUserStore();

  const [id, setId] = useState<string>(user.id);
  const [nickname, setNickname] = useState<string>(user.nickname);
  const [profileUrl, setProfileUrl] = useState<string>(user.avatar);

  const [file, setFile] = useState<File | null>(null);

  const navigate = useNavigate();
  const { data, isPending } = useQuery({
    queryKey: ["userData"],
    queryFn: () => getUser(),
  });

  useEffect(() => {
    if (data && user.id === "") {
      setUser({
        avatar: data?.avatar || "",
        id: data.id,
        nickname: data.nickname,
      });
      setNickname(data.nickname);
      setProfileUrl(data.avatar || "");
      setId(data.id);
    } else {
      // token이 만료되었거나 서버 오류로 인한 user 정보가 없을 때 token 삭제
      navigate("/auth/signin");
      localStorage.removeItem("accessToken");
    }
  }, [data]);

  // input change 시
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  // 사진 등록 버튼 클릭 시
  const handleImageClick = () => {
    document.getElementById("profile-file")?.click();
  };

  // 사진 change 시
  const handleFileSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      const previewUrl = URL.createObjectURL(file);
      setProfileUrl(previewUrl);
    }
  };

  // 수정하기 버튼 클릭 시
  const handleProfileEditClick = async () => {
    const formData = new FormData();
    if (file) {
      formData.append("avatar", file);
    }
    formData.append("nickname", nickname);
    await patchUserProfile(formData);
  };

  if (isPending)
    return (
      <div className="fixed flex inset-0 bg-black/40 items-center justify-center">
        <p className="text-white font-bold">loading...</p>
      </div>
    );

  return (
    <div className="flex flex-col w-[80%] min-w-[300px] h-[90%] py-[1.7%] px-[2%] items-center bg-white/50 rounded-lg">
      <p className="text-2xl font-thin w-full">마이페이지</p>
      <div className="h-[1px] w-full bg-sky-700 my-2"></div>
      <div className="flex flex-col w-full h-full lg:pt-10 py-1 px-1 items-center lg:gap-10 gap-2">
        <div className="flex flex-col items-center gap-2">
          <img
            src={profileUrl ? profileUrl : "../src/assets/mypage_line.svg"}
            alt="프로필"
            className="border rounded-full lg:w-64 lg:h-64 w-40 h-40 bg-black/30"
          />
          <button
            onClick={handleImageClick}
            className="px-3 py-1 bg-white rounded-lg text-sm"
          >
            사진 등록
          </button>
        </div>
        <input
          id="profile-file"
          type="file"
          accept="image/*"
          onChange={handleFileSelectChange}
          className="hidden"
        />
        <div className="flex flex-col gap-3 justify-center">
          <div>
            <p className="font-bold mb-2">닉네임</p>
            <input
              type="text"
              value={nickname}
              placeholder={nickname}
              onChange={handleInputChange}
              className="py-2 px-3 rounded-xl bg-black/20 text-sm outline-none border-2 border-transparent focus:border-white"
            />
          </div>
          <div>
            <p className="font-bold mb-2">아이디</p>
            <p>{id}</p>
          </div>
        </div>
        <button
          onClick={handleProfileEditClick}
          className="lg:w-64 w-40 bg-black text-white rounded-full lg:py-3 py-2"
        >
          수정하기
        </button>
      </div>
    </div>
  );
}

export default MyPage;
