import React from "react";
import "./styles.scss";
function Items({ pic, text }) {
  return (
    <>
      <li className="sidebarListItem">
        <img
          src={process.env.PUBLIC_URL + "/assets/icons/" + pic + ".png"}
          alt={text}
          className="sidebarListIcon"
        />

        <span className="sidebarListItemText">{text}</span>
      </li>
    </>
  );
}

export default Items;
