import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>;
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D16AQGv4TKoafzTtw/profile-displaybackgroundimage-shrink_200_800/0/1603593311122?e=1616025600&v=beta&t=z5DKfAMmrMG8R3qoKJSw9_H-25qPse9sjXZ3CWvV59U"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">3124</p>
        </div>
        <div className="sidebar__stat">
          <p>views on post</p>
          <p className="sidebar__statNumber">3000</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("webdeveloper")}
        {recentItem("javascript")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
