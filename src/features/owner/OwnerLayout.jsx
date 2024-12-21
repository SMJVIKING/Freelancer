import AppLayout from "../../ui/AppLayout";
import Sidebar from "../../ui/Sidebar";
import CustomNavlink from "../../ui/CustomNavLink";
import { HiHome, HiOutlineViewGrid } from "react-icons/hi";

function OwnerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavlink to="dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavlink>

        <CustomNavlink to="projects">
        <HiOutlineViewGrid />
          <span>پروژه ها</span>
        </CustomNavlink>
      </Sidebar>
    </AppLayout>
  );
}

export default OwnerLayout;