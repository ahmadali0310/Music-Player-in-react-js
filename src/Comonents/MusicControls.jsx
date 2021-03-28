import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faForward,
  faBackward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

function MusicControls(props) {
  return (
    <div className="music__control">
      <button
        className="btn btn__backword"
        onClick={() => props.skipSong(false)}
      >
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button
        className="btn btn__play"
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
      </button>
      <button className="btn btn__forward" onClick={() => props.skipSong(true)}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}

export default MusicControls;
