import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import { paragraphProfessional } from "src/data/aboutData";

import { ColContainer } from 'src/assets/styles/commonStyles';
import { Container, Box, Button, Typography, List, ListItem } from 'src/components/mui/components';


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
    fontSize: '4em',
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
            { opacity: 1, height: 80, innerHeight: 80 },
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
        ref.current.push(setTimeout(() => set(['Apples', 'Oranges', 'Kiwis']), 2000))
        ref.current.push(setTimeout(() => set(['Apples', 'Kiwis']), 5000))
        ref.current.push(setTimeout(() => set(['Apples', 'Bananas', 'Kiwis']), 8000))
    }, [])

    useEffect(() => {
        reset()
        return () => ref.current.forEach(clearTimeout)
    }, [])

    const p1 = "I'm Jui-Wen, Chiang, a software developer with a background in art and design. I'm passionate about crafting interfaces that are not only visually appealing but also user-friendly. My journey into development was driven by my love for combining aesthetics and functionality and loves learning new things and thinking on their feet."

    const p2 = "Beyond coding, I enjoy solo travel, watching musicals, and painting. While working and traveling in Australia, I even participated in a local community art exhibition. I'm constantly seeking new experiences and challenges because stagnation just isn't my style."

    const skillsList = [
        'Coding',
        'UI&UX',
        'Problem Solving',
        'Team Management',
    ]

    return (
        <ColContainer>
            <Typography variant="caption" component='h2'>ABOUT</Typography>
            <Container sx={{ width: '100%', display: 'flex' }}>
                <Box
                    component="img"
                    sx={{
                        width: '35%',
                        height: 'auto',
                        objectFit: 'cover',
                        borderRadius: '1rem',
                    }}
                    alt="The house from the offer."
                    src="/image_2022_professional portrait_half_body.jpeg"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: '0 2rem' }}>
                    <Typography>{paragraphProfessional}</Typography>
                    <Typography>
                        Here are a few of the other activities that I love to do!
                    </Typography>
                    <List
                        sx={{
                            listStyleType: 'disc',
                            listStylePosition: 'inside'
                        }}
                    >
                        {skillsList.map((item, index) => {
                            return (
                                <ListItem sx={{ display: 'list-item' }}>
                                    {item}
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
            </Container>

            {/* <div style={mainT}>
                {transitions(({ innerHeight, ...rest }, item) => (
                    <animated.div  {...(rest as any)} className={transitionsItemT} style={rest} onClick={reset}>
                        <animated.div   {...(rest as any)} style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
                    </animated.div>
                ))}
            </div> */}
        </ColContainer>
    )
}
