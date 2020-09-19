import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const VideoSource = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

export default function VideoBackground(props) {
  // select video element
  const videoEl = useRef(null);

  useEffect(() => {
    videoEl.current.currentTime = 10;
  }, [props.setFrame]);

  return (
    <>
      <VideoSource tabindex="0" autobuffer preload ref={videoEl} {...props}>
        {props.children}
      </VideoSource>
      <p>Frame number: {props.setFrame}</p>
    </>
  );
}
