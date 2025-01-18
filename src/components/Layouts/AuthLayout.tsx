import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="relative flex flex-col w-full h-screen items-center justify-center">
      <img
        src="/background_img.jpg"
        alt="바다 사진"
        className="absolute -z-10 w-full h-full"
      />
      <div className="flex flex-col h-full px-14 bg-white/30 justify-center items-center backdrop-blur-sm">
        <p className="text-5xl font-thin mb-10 text-sky-700">Task</p>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
