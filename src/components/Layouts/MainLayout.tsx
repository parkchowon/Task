import { Outlet } from "react-router-dom";
import Header from "../Header";

function MainLayout() {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <Header />
      <Outlet />
    </div>
  );
}

export default MainLayout;
