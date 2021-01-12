import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

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
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
