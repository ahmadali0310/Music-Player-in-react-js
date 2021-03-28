import React, { useRef } from "react";

function MusicProgress(props) {
  const progress = useRef(null);
  const handleProgress = (e) => {
    const offSet = e.nativeEvent.offsetX;
    const width = progress.current.clientWidth;
    const duration = props.audio.current.duration;
    props.audio.current.currentTime = (offSet / width) * duration;
  };
  return (
    <>
      <div
        ref={progress}
        className="progress__bar__container"
        onClick={handleProgress}
      >
        <div
          className="progress__bar"
          style={{ width: props.progress + "%" }}
        ></div>
      </div>
    </>
  );
}

export default MusicProgress;
