import React from "react";

//search icon
import { BiSearchAlt } from "react-icons/bi";

// three dots icon
import { BiDotsHorizontalRounded } from "react-icons/bi";

//import js data
import { Contacts } from "../../../contacts";

import "./styles.scss";
function ContactsContainer() {
  return (
    <>
      <div className="mainContactContainer">
        <div className="rightbarTop">
          <h4 className="rightbarTitle">Contacts</h4>
          <div className="contactIcons">
            <BiSearchAlt className="rightbarSearchIcon" />
            <BiDotsHorizontalRounded className="rightbarDotsIcon" />
          </div>
        </div>
        <div className="rightbarWrapper">
          <ul className="rightbarFriendList">
            {Contacts.map((u) => (
              <li className="rightbarFriend">
                <div className="imageContainer">
                  <img
                    src={u.profilePic}
                    alt=""
                    className="rightbarProfileImg"
                  />
                  <span
                    className={
                      u.lastSeen === "online"
                        ? "rightbarOnline"
                        : "rightbarOffline"
                    }
                  ></span>
                </div>

                <div className="namesAndStatus">
                  <p className="rightbarUsername">{u.name}</p>
                  <p
                    className={
                      u.lastSeen === "online"
                        ? "rightbarOnlineStatus"
                        : "rightbarLastSeen"
                    }
                  >
                    {u.lastSeen}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ContactsContainer;
