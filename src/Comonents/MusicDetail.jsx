import React from "react";

function MusicDetail(props) {
  return (
    <div className="song__detail">
      <h3>{props.songTitle}</h3>
    </div>
  );
}

export default MusicDetail;
