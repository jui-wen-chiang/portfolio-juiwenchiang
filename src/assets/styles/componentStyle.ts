import { styled } from "@mui/material/styles";
// import styled from "styled-components";
import { Container, Box, Card, Button,IconButton } from "src/components/mui";
import * as styles from "./componentStyle";
import React, { ReactNode, Children } from "react";


export const fullSize = {
    'width': '100%',
    'height': '100%',
};

export const rowFlexContainer = {
    'display': 'flex',
    'flex-direction': 'row',
    'gap': '1rem'
};

export const colFlexContainer = {
    'display': 'flex',
    'flex-direction': 'column',
    'gap': '1rem'
}

export const ControlButton = styled(IconButton)({
    color:'bule',
    '&:active': {
        color: 'red',
      }
});