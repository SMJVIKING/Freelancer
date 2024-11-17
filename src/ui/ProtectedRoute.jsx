import { useNavigate } from "react-router-dom";
import useAuthorize from "../features/authentication/useAuthorize";
import { useEffect } from "react";
import Loading from "./Loading";
import toast from "react-hot-toast/headless";

// ProtectRoute:
function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // steps to do:
  // 1.load the authenticated user data
  const { isLoading, Authenticated, Authorized, Verified } = useAuthorize();

  // 2.check if is authenticated or not and check if is authorized or not
  useEffect(() => {
    if (!Authenticated && !isLoading) navigate("/auth");
    if (!Verified && !isLoading) {
      toast.error("پروفایل شما هنوز تایید نشده است");
      navigate("/", { replace: true });
    }
    if (!Authorized && !isLoading) navigate("/not-access", { replace: true });
  }, [Authorized, Authenticated, isLoading, Verified, navigate]);

  // 3.while loading => show a loading
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loading />
      </div>
    );

  // 4.if user isauthenticated and isauthorized => render the app
  if (Authenticated && Authorized) return children;
}

export default ProtectedRoute;
