import "./Navbar.scss";
import { BsBuildingFillDash } from "react-icons/bs";
import { PiSquaresFourBold } from "react-icons/pi";
import { FaExpand } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <BsBuildingFillDash />
        <span>Sam Admin</span>
      </div>
      <div className="icons">
        <IoSearch />
        <PiSquaresFourBold />
         <FaExpand />
          <IoSearch />
        <div className="notification">
          <IoNotifications />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"
            alt=""
          />
        </div>
        <IoIosSettings />
      </div>
    </div>
  );
};

export default Navbar;
