import * as React from 'react';
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
// data
import { timelineData } from "src/data/timeline"
// style
import { ViewLayout } from 'src/assets/styles/commonStyles'
import { TimelineContainer, VerticalLine, TimeLinePoint } from 'src/assets/styles/views/Timeline'
import { Container, Box, Typography, Card, CardContent, CardMedia, CardActionArea } from 'src/components/mui/components';
import { AirplanemodeActiveIcon } from 'src/components/mui/icons';


export default function TimelineView() {
    const { t } = useTranslation(); // 取得翻譯函式


    const [currentStep, setCurrentStep] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const containerRef = useRef(null);

    const styles: any = {
        container: {
            position: 'relative',
            width: '80%',
            margin: '50px auto',
            padding: '20px 0',
        },
        verticalLine: {
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            backgroundColor: '#ccc',
            transform: 'translateX(-50%)',
            zIndex: 0,
        },
        itemContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            margin: '40px 0',
        },
        side: {
            flex: 1,
            display: 'flex',
        },
        card: {
            backgroundColor: 'white',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            maxWidth: '80%',
            margin: '1rem',
        },
        circle: {
            width: '16px',
            height: '16px',
            backgroundColor: '#3498db',
            borderRadius: '50%',
            border: '4px solid white',
            zIndex: 1,
            // marging:'1rem',
        },
        title: {
            margin: 0,
            fontWeight: 'bold',
        },
        date: {
            margin: 0,
            fontSize: '12px',
            color: '#888',
        },
    };


    // 播放控制
    useEffect(() => {
        let interval;
        if (isPlaying && currentStep < timelineData.length - 1) {
            interval = setInterval(() => {
                setCurrentStep((prev) => prev + 1);
            }, 2000);
        }
        return () => clearInterval(interval);
    }, [isPlaying, currentStep]);

    // 自動滾動效果
    useEffect(() => {
        const item = document.getElementById(`step-${currentStep}`);
        if (item && containerRef.current) {
            item.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [currentStep]);


    /* Item Card Layout */
    function ItemCardLayout({ item, showOnlyDate = false }) {
        if (showOnlyDate) {
            return (
                <Box sx={{ display: 'flex', width: '100%' }}>
                    {item.year} / {item.month}
                </Box>
            )
        }

        return (
            <Card sx={{ width: '25rem', minWidth: '100%' }}>
                <CardActionArea sx={{ width: '25rem', minWidth: '100%' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={item.cardImage.url}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Box sx={{ display: 'flex', width: '100%' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <AirplanemodeActiveIcon />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'flex-end', fontSize: '0.5rem' }}>
                                {item.country} - {item.location}
                            </Box>
                        </Box>
                        <Typography sx={{ padding: '1rem 0', fontSize: '1.5rem' }} >
                            {item.title}
                        </Typography>

                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {item.subtitle}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }

    return (
        <ViewLayout>
            <TimelineContainer>
                <VerticalLine />

                {timelineData.map((item, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <Container key={index} sx={styles.itemContainer} >
                            {/* 左側 */}
                            <Box sx={{ ...styles.side, justifyContent: 'flex-end' }}>
                                <div style={{
                                    textAlign: 'right',
                                    opacity: isLeft ? 1 : 0.6
                                }}>
                                    <ItemCardLayout item={item} showOnlyDate={!isLeft} />
                                </div>
                            </Box>

                            {/* <AirplanemodeActiveIcon sx={{ margin:'0 1rem', border: '0.3rem solid blue',borderRadius: '50%', backgroundColor: 'red'}}/> */}

                            <TimeLinePoint />

                            {/* 右側 */}
                            <div style={styles.side}>
                                <div style={{
                                    textAlign: 'left',
                                    opacity: isLeft ? 0.6 : 1
                                }}>
                                    <ItemCardLayout item={item} showOnlyDate={isLeft} />
                                </div>
                            </div>
                        </Container>
                    );
                })}
            </TimelineContainer>
        </ViewLayout>
    )
}