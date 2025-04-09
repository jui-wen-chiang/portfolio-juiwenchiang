import * as React from 'react';
// import { useState } from "react";
import { useRef, useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

import { Container, Box, Button, IconButton, FormControl, MenuItem,Select } from 'src/components/mui';
import { RatioRowContainer, ColPageContainer, ControlButton } from 'src/assets/styles/commonStyles'

import { Chrono } from 'react-chrono';

import ModalDialog from 'src/components/tools/emtionDialog'
import 'src/assets/styles/timeline.css';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';


const chartBoard1: React.CSSProperties = {
    border: "2px solid red",
    padding: "1rem",
    height: "300px",
    width: "20%"
};

const chartBoard2: React.CSSProperties = {
    border: "2px solid red",
    padding: "1rem",
    height: "300px",
    width: "80%"
};


const items = [
    {
        title: 'Timeline title 1',
        cardTitle: 'Card Title 1',
        items: [
            { cardTitle: 'nested card title 1' },
            { cardTitle: 'nested card title 2' },
        ],
    },
    {
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
            type: "IMAGE",
            source: {
                url: "http://someurl/image.jpg"
            }
        }
    },
    {
        title: "01 2022",
        cardTitle: "Event 1",
        cardSubtitle: "Event 1 Subtitle",
        cardDetailedText: "This is the first event on the timeline.",
    },
    {
        title: "02 2022",
        cardTitle: "Event 2",
        cardSubtitle: "Event 2 Subtitle",
        cardDetailedText: "This is the second event on the timeline.",
    },
    {
        title: "03 2022",
        cardTitle: "Event 3",
        cardSubtitle: "Event 3 Subtitle",
        cardDetailedText: "This is the third event on the timeline.",
    },
    {
        title: "04 2022",
        cardTitle: "Event 4",
        cardSubtitle: "Event 4 Subtitle",
        cardDetailedText: "This is the first event on the timeline.",
    },
    {
        title: "05 2022",
        cardTitle: "Event 5",
        cardSubtitle: "Event 5 Subtitle",
        cardDetailedText: "This is the second event on the timeline.",
    },
    {
        title: "06 2022",
        cardTitle: "Event 6",
        cardSubtitle: "Event 6 Subtitle",
        cardDetailedText: "This is the third event on the timeline.",
    }
];



export default function TimelinePage() {
    const [activeDialog, setActiveDialog] = useState(null);
    const { t } = useTranslation(); // 取得翻譯函式

    const refs = useRef([]);

    const [activeIndex, setActiveIndex] = useState(0);
    console.log('activeIndex', activeIndex)
    const [isPlaying, setIsPlaying] = useState(false);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const slideDuration = 2000; // 2 seconds

    // 幻燈片播放邏輯
    useEffect(() => {
        console.log('isPlaying:', isPlaying); // 確認狀態更新

        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % items.length);
            }, slideDuration);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPlaying]);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev < items.length - 1 ? prev + 1 : prev));
    };

    const handleSelect = (index: number) => {
        setActiveIndex(index);
    };

    const scrollSelect = (item, index) => {
        const el = refs.current[index];
        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
                // block: "center", // 中間對齊效果更好
                block: "end", // 中間對齊效果更好

            });
        }
    };


    return (
        <RatioRowContainer ratio={[1, 9]}>
            {/* Customize Control Bar */}
            <ColPageContainer>
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
            </ColPageContainer>

            {/* Time line */}
            <div style={{ height: "80vh", overflowY: "auto" }}>
                <Chrono
                    items={items}
                    mode="VERTICAL"
                    slideShow={true}
                    slideItemDuration={3000}
                    slideShowType="reveal"
                    allowDynamicUpdate={true}
                    enableOutline={true}
                    scrollable={{ scrollbar: true }}
                    onItemSelected={(item, index) => scrollSelect(item, index)}
                    activeItemIndex={activeIndex}
                    disableToolbar={true}
                >
                    {/* Custom card content */}
                    {items.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) refs.current[index] = el;
                            }}
                            style={{ width: "100%", padding: "10px", background: "white", position: "relative" }}
                        >
                            <h3>{item.cardTitle}</h3>
                            {/* Progress bar */}
                            {isPlaying && index === activeIndex && (
                                <div className="progress-bar">
                                    <div className="filling" />
                                </div>
                            )}
                        </div>
                    ))}
                </Chrono>
            </div>
            {/* textOverlay */}

            {/* enableOutline
                timelinePointDimension={30}
                disableNavOnKey */}

            {/* theme={{
                    primary: "red",
                    secondary: "blue",
                    cardBgColor: "yellow",
                    cardForeColor: "violet",
                    titleColor: "black",
                    titleColorActive: "red",
                }} */}

        </RatioRowContainer>
    )
}