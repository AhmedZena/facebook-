import React from "react";
import "./feed.scss";
import Stories from "./Stories";
import Share from "./Share";
function Feed() {
  return (
    <div className="feed">
      <Stories />
      <Share />
    </div>
  );
}

export default Feed;
