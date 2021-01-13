import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notification";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1610411906~hmac=ba0de9406335d4e3e0bb586c1d359f88"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption icon={HomeIcon} title="home" />
        <HeaderOption icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption icon={ChatIcon} title="Messaging" />
        <HeaderOption icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://media-exp1.licdn.com/dms/image/C4D35AQHSjX0yVzp6Hg/profile-framedphoto-shrink_100_100/0/1609694941139?e=1610571600&v=beta&t=cSB5sUMDZuB1eFMeCmGt2c67dSMWF-NSSybCJS8r-Ls"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
