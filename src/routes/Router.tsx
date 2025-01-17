import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";
import AuthLayout from "../components/Layouts/AuthLayout";
import HomePage from "../pages/HomePage";
import MyPage from "../pages/MyPage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "mypage",
        element: <MyPage />,
      },
    ],
  },
  {
    path: "auth/",
    element: <AuthLayout />,
    children: [
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "signin",
        element: <SignInPage />,
      },
    ],
  },
]);

export default router;
