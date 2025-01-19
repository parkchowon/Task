import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

function ProtectRouter({ children }: PropsWithChildren) {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    // replace 옵션으로 기존 히스토리 페이지 교체
    return <Navigate to={"/auth/signin"} replace />;
  }
  return <>{children}</>;
}

export default ProtectRouter;
