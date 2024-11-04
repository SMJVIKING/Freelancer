import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "../features/authentication/useLogout";
import Loading from "./Loading";

function Logout() {
  const { isLoading, logout } = useLogout();

  return isLoading ? (
    <Loading />
  ) : (
    <button onClick={logout}>
      <HiArrowRightOnRectangle className="w-7 h-7 text-secondary-500 hover:text-error" />
    </button>
  );
}
export default Logout;
