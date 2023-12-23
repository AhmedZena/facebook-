import React from "react";
import "./styles.scss";

import StoryCard from "./StoryCard";
import { Contacts } from "../../../contacts";
function Stories() {
  return (
    <div className="stories">
      <div className="storyCard">
        <div className="overlay"></div>
        <img
          src={process.env.PUBLIC_URL + "/mypic.jpg"}
          alt="My Picture"
          className="storyProfilePic"
        />
        <img
          src={process.env.PUBLIC_URL + "/mypic.jpg"}
          alt="My Picture"
          className="storyBackgroundPic"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992482.png?w=740&t=st=1686928685~exp=1686929285~hmac=2128716e86cd8d39ab662d0c3eff74ef8e360537ada357002009f5e9154f852b"
          alt="Add Story"
          className="storyAddIcon"
        />
        <span className="text">Ahmed Zena</span>
      </div>

      {Contacts.map((u) => (
        <StoryCard key={u.id} user={u} story={u.profilePic} />
      ))}
    </div>
  );
}

export default Stories;
