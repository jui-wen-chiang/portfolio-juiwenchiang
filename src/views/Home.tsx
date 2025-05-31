import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
import { ViewLayout } from 'src/assets/styles/commonStyles'
import { Container, Box, Button, Typography, IconButton } from 'src/components/mui/components';
import ReactEcharts from "echarts-for-react";
import { SchoolIcon, GitHubIcon, LinkedInIcon, EmailRoundedIcon } from 'src/components/mui/icons';

const mainT: React.CSSProperties = {
    minWidth: '100px',
    padding: '0 20px',
    margin: '0 auto',
    height: '260px',
};

const transitionsItemT: React.CSSProperties = {
    overflow: 'hidden',
    width: '100%',
    color: '#00BFFF',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '5rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    willChange: 'transform, opacity, height',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    lineHeight: '80px',
};


export default function AboutView() {
    const ref = useRef<ReturnType<typeof setTimeout>[]>([]);
    const [items, set] = useState<string[]>([]);


    // console.log('items', items)
    const transitions = useTransition(items, {
        from: {
            opacity: 0,
            height: 0,
            innerHeight: 0,
            transform: 'perspective(600px) rotateX(0deg)',
            color: '#8fa5b6',
        },
        enter: [
            { opacity: 1, height: 'auto', innerHeight: 'auto' },
            { transform: 'perspective(600px) rotateX(0deg)', color: '#28d79f' },
            { transform: 'perspective(600px) rotateX(0deg)' },
        ],
        leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
        update: { color: '#28b4d7' },
    })

    const reset = useCallback(() => {
        ref.current.forEach(clearTimeout)
        ref.current = []
        set([])
        ref.current.push(setTimeout(() => set(['Hello there,\nI am JUI-WEN CHIANG', 'a devorper']), 8000))
        // ref.current.push(setTimeout(() => set(['Hello there,\nI am JUI-WEN CHIANG', 'and']), 2000))
        ref.current.push(setTimeout(() => set(['Hello there,\nI am JUI-WEN CHIANG', 'and a Kiwis']), 8000))
    }, [])

    useEffect(() => {
        reset()
        return () => ref.current.forEach(clearTimeout)
    }, [])


    const MyNmae = () => {
        const option = {
            graphic: {
                elements: [
                    {
                        type: 'text',
                        // left: 'left',
                        right: '0',
                        top: 'center',
                        style: {
                            text: 'Jui-Wen Chiang',
                            fontSize: 80,
                            fontWeight: 'bold',
                            fill: '#999',
                            // lineDash: [0, 200],
                            // lineDashOffset: 0,
                            // fill: 'transparent',
                            // stroke: '#000',
                            // lineWidth: 1
                        },
                        keyframeAnimation: {
                            duration: 3000,
                            loop: true,
                            keyframes: [
                                {
                                    percent: 1,
                                    style: {
                                        fill: 'blue' // 轉變為黑色
                                    }
                                }
                            ]
                            // keyframes: [
                            //     {
                            //         percent: 0.5,
                            //         style: {
                            //             fill: 'transparent',
                            //             lineDashOffset: 200,
                            //             lineDash: [200, 0]
                            //         }
                            //     },
                            //     {
                            //         // Stop for a while.
                            //         percent: 0.1,
                            //         style: {
                            //             fill: 'transparent'
                            //         }
                            //     },
                            //     {
                            //         percent: 0.81,
                            //         style: {
                            //             fill: 'black',
                            //             lineDashOffset: 200,
                            //             lineDash: [200, 0]
                            //         }
                            //     },
                            //     {
                            //         percent: 1,
                            //         style: {
                            //             fill: 'black'
                            //         }
                            //     }
                            // ]
                        }
                    }
                ]
            }
        };
        // style={{ height: '400px', width: '100%' }}

        return <ReactEcharts option={option} style={{ height: '10rem' }} />;
    };

    return (
        // <Box
        // sx={{
        //     backgroundImage: `url('/test.jpg')`,
        //     backgroundSize: 'cover',
        //     backgroundRepeat: 'no-repeat',
        //     backgroundPosition: 'center'
        // }}>
        <ViewLayout
            sx={{
                // background: "radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 75%)"
                // backgroundImage: `url('/test.jpg')`,
                // backgroundSize: 'cover',
                // backgroundRepeat: 'no-repeat',
                // backgroundPosition: 'center'
            }}
        >
            <Container sx={{ padding: '10rem' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: '0 0 1rem 0' }}>
                    <Typography variant="subtitle1">Hello, I'm</Typography>
                    <Typography variant="h1">Jui-Wen Chiang</Typography>
                    {/* <MyNmae /> */}
                    <Typography variant="subtitle1">
                        A Full Stack Developer and UI/UX designer.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', padding: '0 0 1rem 0' }}>
                    <Button variant="contained" size="small" sx={{ padding: '1rem' }}>Get Resume</Button>
                    <IconButton aria-label="go to my Linkedin" color="primary" sx={{ padding: '1rem' }}> <LinkedInIcon /></IconButton>
                    <IconButton aria-label="get in touch" color="primary" sx={{ padding: '1rem' }}> <EmailRoundedIcon /></IconButton>
                    <IconButton aria-label="go to my Github" color="primary" sx={{ padding: '1rem' }}> <GitHubIcon /></IconButton>
                </Box>
                {/* <div style={mainT}>
                    {transitions(({ innerHeight, ...rest }, item) => (
                        <animated.div  {...(rest as any)} className={transitionsItemT} style={rest} onClick={reset}>
                            <animated.div   {...(rest as any)} style={{ overflow: 'hidden', fontSize: '3rem', height: innerHeight }}>{item}</animated.div>
                        </animated.div>
                    ))}
                </div> */}
            </Container>
        </ViewLayout>
        // </Box>
    )
}