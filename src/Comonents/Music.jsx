import React, { useEffect, useState, useRef } from "react";
import MusicControls from "./MusicControls";
import MusicDetail from "./MusicDetail";
import MusicProgress from "./MusicProgress";

const Music = (props) => {
  const audioEl = useRef(null);
  const imgEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
      imgEl.current.classList.add("active");
    } else {
      audioEl.current.pause();
      imgEl.current.classList.remove("active");
    }
  });

  const skipSong = (forward = true) => {
    if (forward) {
      props.setCurrentSong(() => {
        let temp = props.currentSong;
        temp++;
        if (temp > props.state.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      props.setCurrentSong(() => {
        let temp = props.currentSong;
        temp--;
        if (temp < 0) {
          temp = props.state.length - 1;
        }
        return temp;
      });
    }
  };

  const timeUpdate = (e) => {
    const currentTime = audioEl.current.currentTime;
    const duration = audioEl.current.duration;
    let totalProgress = (currentTime / duration) * 100;
    setProgress(() => {
      return totalProgress;
    });
  };

  return (
    <div className="main__music__container">
      <div className="img__container">
        <img
          ref={imgEl}
          className=""
          src={props.state[props.currentSong].img_src}
          alt=""
        />
        <audio
          onTimeUpdate={timeUpdate}
          ref={audioEl}
          src={props.state[props.currentSong].src}
        ></audio>
      </div>
      <MusicDetail songTitle={props.state[props.currentSong].title} />
      <MusicProgress progress={progress} audio={audioEl} />
      <MusicControls
        skipSong={skipSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
};

export default Music;
