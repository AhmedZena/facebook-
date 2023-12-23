import React from "react";
import "./sidebar.scss";
import Items from "./Items";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <Items pic="most-recent" text="Most Recent" />
          <Items pic="covid" text="Covid-19 Information" />
          <Items pic="groups" text="Groups" />
          <Items pic="messenger" text="Messenger" />
          <Items pic="watch-videos" text="Watch Videos" />
          <Items pic="market" text="Market" />
          <Items pic="manage-pages" text="Manage Pages" />
          <Items pic="event" text="Events" />
          <Items pic="fund" text="Fundraisers" />
          <Items pic="3d-favourite" text="Saved" />
          <Items pic="friends-list" text="Friends List" />
          <Items pic="messenger-kids" text="Messenger Kids" />
          <Items pic="games" text="Games" />
          <Items pic="discount" text="Discounts" />
          <Items pic="movies" text="Movies" />
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
