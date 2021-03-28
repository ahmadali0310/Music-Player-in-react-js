import React, { useState } from "react";

import Music from "./Comonents/Music";

function App() {
  const [state] = useState([
    { title: "hey", src: "./music/hey.mp3", img_src: "./images/hey.jpg" },
    {
      title: "summer",
      src: "./music/summer.mp3",
      img_src: "./images/summer.jpg",
    },
    {
      title: "ukulele",
      src: "./music/ukulele.mp3",
      img_src: "./images/ukulele.jpg",
    },
  ]);
  const [currentSong, setCurrentSong] = useState(0);

  return (
    <div className="music__container">
      <Music
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        state={state}
      />
    </div>
  );
}

export default App;
