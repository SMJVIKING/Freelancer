import { NavLink } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import DarkModeToggle from "../ui/DarkModeToggle";
import Logout from "./Logout";


function Header() {
  const { isLoading, user } = useUser();

  return (
    <div className="bg-secondary-0 text-secondary-800 p-2 border-b border-secondary-200 shadow-lg">
      <div
        className={`container flex justify-between items-center gap-x-8 
        ${isLoading ? "blur-sm " : ""}`}
      >
        <div className="flex items-center gap-x-2">

          <img
            className="w-10 h-9"
            src="/public/images/splash_1045684.png"
            alt="JobNest image"
          />
          <h1 className="text-xl font-bold flex items-center">JobNest</h1>

          <ul className="items-center justify-center gap-x-3 mr-4  hidden md:flex ">
            <li>
              <NavLink
                aria-current="page"
                className="p-2 text-primary-900 text-lg font-semibold transition-all duration-500 rounded-lg hover:bg-primary-200 hover:text-primary-900"
                to="/"
              >
                صفحه اصلی
              </NavLink>
            </li>
            <li>
              <NavLink
                className="p-2 hover:text-primary-900 text-secondary-800 text-lg font-semibold transition-all duration-500 rounded-lg hover:bg-primary-200"
                to="/AboutUs"
              >
                درباره ما
              </NavLink>
            </li>
          </ul>
        </div>

        <div
          className={`flex justify-end items-center gap-x-2 ${
            isLoading ? "blur-sm " : ""
          }`}
        >
          <div className="flex items-center gap-x-2 text-secondary-600 ">
            <img
              className="w-7 h-7 rounded-full object-cover object-center"
              src="/public/images/3d-simple-user-icon-png.webp"
              alt="user-account"
            />
            <span>{user?.name}</span>
          </div>
          <ul className="flex gap-x-4 items-center">
            <li className="flex">
              <DarkModeToggle />
            </li>
            <li className="flex">
              <Logout />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

/* <button></button> =>اینجا میتونستی ب جای لینک از باتن استفاده کنی */
// ولی برای انتقالش ب صفحه دیگه باید از نویگیت استفاده کنی
