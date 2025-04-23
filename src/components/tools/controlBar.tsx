import * as React from 'react';
import { Container, Box, Button, IconButton, FormControl, MenuItem, Select } from 'src/components/mui/components';
import { RatioRowContainer, ColPageContainer, ControlButton } from 'src/assets/styles/commonStyles'

import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';

import { ControlBarProps } from "src/types/components/tools"

export default function ControlBar({
    activeIndex,
    isPlaying,
    items,
    handleSelect,
    handleNext,
    handlePrev,
    setIsPlaying,
}: ControlBarProps) {
    // layout
    return (
        <Container>
            <ControlButton aria-label="previous" onClick={handlePrev}>
                <KeyboardArrowUpRoundedIcon />
            </ControlButton>
            <IconButton aria-label="next" onClick={handleNext}>
                <KeyboardArrowDownRoundedIcon />
            </IconButton>
            <IconButton aria-label="Play or Stop" onClick={() => setIsPlaying((prev) => !prev)}>
                {isPlaying ? <PauseCircleFilledRoundedIcon /> : <PlayCircleRoundedIcon />}
            </IconButton>
            <FormControl>
                <Select
                    value={activeIndex}
                    onChange={(e) => handleSelect(Number(e.target.value))}>
                    <MenuItem disabled value="">
                        <em>PlaceholderChose</em>
                    </MenuItem>
                    {items.map((item, idx) => (
                        <MenuItem key={idx} value={idx}>
                            {item.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Container>
    )
}