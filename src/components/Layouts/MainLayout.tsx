import { Outlet } from "react-router-dom";
import Header from "../Header";

function MainLayout() {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <Header />
      <div className="flex flex-grow w-full items-center justify-center">
        <Outlet />
      </div>
      <div className="absolute w-full h-full backdrop-blur-sm -z-10" />
      <img
        src="/background_img.jpg"
        alt="바다 사진"
        className="absolute -z-20 w-full h-full"
      />
    </div>
  );
}

export default MainLayout;
