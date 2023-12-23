import React from "react";
import "./styles.scss";
function StoryCard({ user, story }) {
  return (
    <div className="storyCard">
      <div className="overlay"></div>
      <img src={user.profilePic} alt="Story" className="storyProfilePic" />
      <img src={user.profilePic} alt="Profile" className="storyBackgroundPic" />
      <span className="text">{user.name}</span>
    </div>
  );
}

export default StoryCard;
