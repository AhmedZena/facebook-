import React from "react";
import "./styles.scss";
function Share() {
  return (
    <div>
      <div className="shareContainer">
        <img
          src={process.env.PUBLIC_URL + "/mypic.jpg"}
          alt="My Picture"
          className="storyProfilePic"
        />
        <div className="shareWrapper">
          <input placeholder="What's in your mind?" className="shareInput" />
          <div className="shareIcons">
            <img
              className="shareIcon"
              src="https://cdn-icons-png.flaticon.com/512/561/561259.png?w=740&t=st=1687007447~exp=1687008047~hmac=46da752363b18dcf1e4441a61c1ce753434d61459e4d512eaaed393f2c818302"
              alt="upload"
            />
            <img
              className="shareIcon"
              src="https://cdn-icons-png.flaticon.com/512/742/742749.png?w=740&t=st=1687007766~exp=1687008366~hmac=95f8b4053f18834df30fc8cecdfc8ee05ae8bd007768442ec902c370fdf7f103"
              alt="feeling"
            />
            <img
              className="shareIcon"
              src="https://cdn-icons-png.flaticon.com/512/787/787535.png?w=740&t=st=1687007927~exp=1687008527~hmac=aa41ac93ba76575e98e178f4c7ebc0879497406a18ac496b07641eff53aea721"
              alt="location"
            />
            <img
              className="shareIcon"
              src="https://cdn-icons-png.flaticon.com/512/179/179447.png?w=740&t=st=1687008014~exp=1687008614~hmac=3e74d499a8c83a49d361b39b725f9b15051a4f8879809d517b215ea0134f1ae4"
              alt="tag"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
