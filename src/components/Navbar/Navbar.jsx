import React from "react";
import "./Navbar.scss";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import HouseIcon from "@mui/icons-material/House";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import GroupsSharpIcon from "@mui/icons-material/GroupsSharp";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";

import { TiVideo } from "react-icons/ti";
import { IoGameController } from "react-icons/io5";
import { RiMessengerFill } from "react-icons/ri";
import { IoNotificationsSharp } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
  return (
    <>
      <div className="navbarContainer">
        <div className="navbarLeft">
          <FacebookRoundedIcon className="facebookIcon" />
          <div className="searchBar">
            <input
              type="text"
              placeholder="Search Facebook"
              className="searchInput"
            />
            <SearchIcon className="searchIcon" />
          </div>
        </div>
        <div className="navbarCenter">
          <div className="navbarIconItem">
            <HouseIcon className="navbarIconItemIcon" />
            <p className="navbarIconItemText">Home</p>
          </div>
          <div className="navbarIconItem">
            <TiVideo className="navbarIconItemIcon" />
            <span className="navBarIconBadge">5</span>
            <p className="navbarIconItemText">Watch</p>
          </div>
          <div className="navbarIconItem">
            <GroupsSharpIcon className="navbarIconItemIcon" />
            <p className="navbarIconItemText">Groups</p>
          </div>
          <div className="navbarIconItem">
            <IoGameController className="navbarIconItemIcon" />
            <p className="navbarIconItemText">Gaming</p>
          </div>
          <div className="navbarIconItem">
            <AddBusinessRoundedIcon className="navbarIconItemIcon" />
            <p className="navbarIconItemText">Market</p>
          </div>
          <div className="navbarIconItem">
            <RiMessengerFill className="navbarIconItemIcon" />
            <span className="navBarIconBadge">5</span>
            <p className="navbarIconItemText">Messenger</p>
          </div>

          <div className="navbarIconItem">
            <IoNotificationsSharp className="navbarIconItemIcon" />
            <span className="navBarIconBadge">8</span>
            <p className="navbarIconItemText">Notifications</p>
          </div>
        </div>

        <div className="navbarRight">
          <div className="creating">
            <AddIcon className="navbarRightProfileIcon" />
            <p className="navbarRightProfileText">Create</p>
          </div>

          <div className="navbarRightProfile">
            <img
              src={process.env.PUBLIC_URL + "/mypic.jpg"}
              alt="My Picture"
              className="profilePic"
            />
            <span className="navbarRightProfileText">Profile</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
