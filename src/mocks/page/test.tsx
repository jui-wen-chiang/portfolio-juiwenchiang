import * as React from 'react';
import Box from '@mui/material/Box';
import { experienceData } from "src/data/experienceData"
import { StyledTab, ExperienceCard } from "src/assets/styles/views/ExperienceTabStyle"
import { Tabs, Typography, Card, CardContent, CardActions, Button } from 'src/components/mui/components';
import { ColContainer, TextCard, ListContainer, ListContent } from 'src/assets/styles/commonStyles';

const testStyle = {
  backgroundColor: "hsla(0,100%,50%,0.02)",

  backgroundImage: `
  radial-gradient(at 44% 25%, hsla(23,100%,74%,1) 0px, transparent 50%),
  radial-gradient(at 80% 0%, hsla(184,100%,56%,1) 0px, transparent 50%),
  radial-gradient(at 0% 50%, hsla(350,100%,93%,1) 0px, transparent 50%),
  radial-gradient(at 98% 49%, hsla(335,100%,76%,1) 0px, transparent 50%),
  radial-gradient(at 99% 100%, hsla(237,100%,70%,1) 0px, transparent 50%),
  radial-gradient(at 0% 0%, hsla(338,100%,76%,1) 0px, transparent 50%)
  `,

  position: "absolute",
  width: "100vw",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: -1,
  padding: 0,
  margin: 0,
  pointerEvents: "none",
  // test
  // backgroundColor: "hsla(0,100%,50%,0.5)",
  // backgroundColor: "#f0f0f0", // 或背景圖片、漸層等
  // width: "500px",
  // height: "500px",
};

export default function BasicTabs() {
  return (
    <div
      style={
        {
          backgroundColor: "hsla(0,100%,50%,0.02)",
          backgroundImage: `
      radial-gradient(at 44% 25%, hsla(23,100%,74%,1) 0px, transparent 50%),
      radial-gradient(at 80% 0%, hsla(184,100%,56%,1) 0px, transparent 50%),
      radial-gradient(at 0% 50%, hsla(350,100%,93%,1) 0px, transparent 50%),
      radial-gradient(at 98% 49%, hsla(335,100%,76%,1) 0px, transparent 50%),
      radial-gradient(at 99% 100%, hsla(237,100%,70%,1) 0px, transparent 50%),
      radial-gradient(at 0% 0%, hsla(338,100%,76%,1) 0px, transparent 50%)
      `,
          position: "absolute",
          width: "100vw",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: -1,
          padding: 0,
          margin: 0,
          pointerEvents: "none",
        }
      }
    ></div>
  );
};