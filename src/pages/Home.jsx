// import { HiHome, HiOutlineViewGrid } from "react-icons/hi";
// import CustomNavlink from "../ui/CustomNavLink";
import HomeBody from "../ui/HomeBody";
import HomeHeader from "../ui/HomeHeader";

function Home() {
  return (
    <div className="bg-secondary-0 min-h-screen flex flex-col">
      <HomeHeader />
      <HomeBody />

      {/* <CustomNavlink to="/">
        <HiHome />
        <span>صفحه اصلی</span>
      </CustomNavlink>

      <CustomNavlink to="AboutUs">
        <HiOutlineViewGrid />
        <span>درباره ما</span>
      </CustomNavlink> */}
    </div>
  );
}

export default Home;
