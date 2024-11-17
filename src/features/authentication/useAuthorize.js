import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthorize() {
  const { isLoading, user } = useUser();
  const { pathname } = useLocation();

  let Authenticated = false;
  if (user) Authenticated = true;

  /////////////////////////////////////////
  let Authorized = false;

  // 2 solution:
  //   1.
  //   if (pathname.includes("owner")) {
  //     if (user && user.role === "OWNER") Authorized = true;
  //   }

  //   if (pathname.includes("freelancer")) {
  //     if (user && user.role === "FREELANCER") Authorized = true;
  //   }

  //   if (pathname.includes("amin")) {
  //     if (user && user.role === "ADMIN") Authorized = true;
  //   }

  // 2.dynamic way
  const ROLES = {
    admin: "ADMIN",
    freelancer: "FREELANCER",
    owner: "OWNER",
  };

  const desiredRole = pathname.split("/").at(1);

  if (Object.keys(ROLES).includes(desiredRole)) {
    if (user && user.role === ROLES[desiredRole]) Authorized = true;
  }
  /////////////////////////////////////////
  let Verified = false;
  if (user && Number(user.status) === 2) Verified = true;

  
  return { isLoading, Authenticated, Authorized, Verified, user };
}
