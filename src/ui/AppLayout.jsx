import { Outlet } from "react-router-dom";
import Header from "./Header";
// import Sidebar from "./Sidebar";

function AppLayout({children}) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <Header />
      {/* <Sidebar /> */}
      {children}
      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-lg flex">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
 

// میخایم این قسمت داینامیک باشه:
// owner,admin,freelancer(multi app layout)
// owner=> Dashboard,project,..
// freelancer=> Dashboard,proposal,transaction,..
// admin=> user,project,proposal ,..