import React from "react";
import styled from "styled-components";

export const AppDiv = styled.div``;

export const Section = styled.section``;

export const PlayWithScroll = styled.div`
  display: block;
  height: ${(props) => props.timeHeight || "0px"};
`;

export const VideoSource = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;
