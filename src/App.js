import React, { useCallback, useEffect, useRef, useState } from "react";

import GlobalStyle from "../styles/global";
import { AppDiv, Section, PlayWithScroll, VideoSource } from "./styles";

import backgroundVideo from "../assets/VisualEffectsCompilation.mp4";

export default function App() {
  // lower numbers = faster playback
  const playbackConst = 500;

  // get total video duration
  const [duration, setDuration] = useState(0);
  const handleDuration = useCallback((e) => {
    setDuration(e.target.duration);
  }, []);

  // dynamically set the page height according to video length
  const [videoHeight, setVideoHeight] = useState("0px");
  useEffect(() => {
    const newHeight = Math.floor(duration) * playbackConst + "px";
    setVideoHeight(newHeight);
  }, [duration]);

  // start video at frame 0, changes when scroll
  const videoFrame = useRef(0);
  const videoEl = useRef();
  const nextFrameRef = React.useRef();

  const scrollPlay = () => {
    videoFrame.current = window.pageYOffset / playbackConst;
    videoEl.current.currentTime = videoFrame.current;
    window.requestAnimationFrame(scrollPlay);
  };

  useEffect(() => {
    nextFrameRef.current = window.requestAnimationFrame(scrollPlay);
    return () => cancelAnimationFrame(nextFrameRef.current);
  });

  return (
    <>
      <GlobalStyle />
      <AppDiv>
        <Section>
          <div class="content">
            <h1>Section 1</h1>
            <p>And a description to see some magic happen</p>
          </div>
        </Section>

        <Section>
          <div class="content">
            <h1>Section 2</h1>
            <p>And a description to see some magic happen</p>
          </div>
        </Section>

        <Section>
          <div class="content">
            <h1>Section 3</h1>
            <p>And a description to see some magic happen</p>
          </div>
        </Section>

        <Section>
          <div class="content">
            <h1>Section 4</h1>
            <p>And a description to see some magic happen</p>
          </div>
        </Section>

        <Section>
          <div class="content">
            <h1>Section {videoHeight}</h1>
            <p>And a description to see some magic happen</p>
          </div>
        </Section>

        <PlayWithScroll timeHeight={videoHeight} />

        <VideoSource
          ref={videoEl}
          tabindex="0"
          autobuffer
          preload
          onLoadedMetadata={handleDuration}
        >
          <source
            type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
            src={backgroundVideo}
          ></source>
        </VideoSource>
      </AppDiv>
    </>
  );
}
