import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
import { ViewLayout } from 'src/assets/styles/commonStyles'

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

    return (
        <ViewLayout>
            <div style={mainT}>
                {transitions(({ innerHeight, ...rest }, item) => (
                    <animated.div  {...(rest as any)} className={transitionsItemT} style={rest} onClick={reset}>
                        <animated.div   {...(rest as any)} style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
                    </animated.div>
                ))}
            </div>
        </ViewLayout>
    )
}
