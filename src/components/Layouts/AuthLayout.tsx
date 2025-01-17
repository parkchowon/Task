import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <p className="text-5xl font-extrabold mb-10">Task</p>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
