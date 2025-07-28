// // import * as motion from "motion/react-client"
// import { motion, Variants } from "framer-motion"

// // import type { Variants } from "motion/react"

// export default function ScrollTriggered() {
//     return (
//         <div style={container}>
//             {food.map(([emoji, hueA, hueB], i) => (
//                 <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
//             ))}
//         </div>
//     )
// }

// interface CardProps {
//     emoji: string
//     hueA: number
//     hueB: number
//     i: number
// }

// function Card({ emoji, hueA, hueB, i }: CardProps) {
//     const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

//     return (
//         <motion.div
//             className={`card-container-${i}`}
//             style={cardContainer}
//             initial="offscreen"
//             whileInView="onscreen"
//             viewport={{ amount: 0.8 }}
//         >
//             <div style={{ ...splash, background }} />
//             <motion.div style={card} variants={cardVariants} className="card">
//                 {emoji}
//             </motion.div>
//         </motion.div>
//     )
// }

// const cardVariants: Variants = {
//     offscreen: {
//         y: 300,
//     },
//     onscreen: {
//         y: 50,
//         rotate: -10,
//         transition: {
//             type: "spring",
//             bounce: 0.4,
//             duration: 0.8,
//         },
//     },
// }

// const hue = (h: number) => `hsl(${h}, 100%, 50%)`

// /**
//  * ==============   Styles   ================
//  */

// const container: React.CSSProperties = {
//     margin: "100px auto",
//     maxWidth: 500,
//     paddingBottom: 100,
//     width: "100%",
// }

// const cardContainer: React.CSSProperties = {
//     overflow: "hidden",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     position: "relative",
//     paddingTop: 20,
//     marginBottom: -120,
// }

// const splash: React.CSSProperties = {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
// }

// const card: React.CSSProperties = {
//     fontSize: 164,
//     width: 300,
//     height: 430,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 20,
//     background: "#f5f5f5",
//     boxShadow:
//         "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
//     transformOrigin: "10% 60%",
// }

// /**
//  * ==============   Data   ================
//  */

// const food: [string, number, number][] = [
//     ["🍅", 340, 10],
//     ["🍊", 20, 40],
//     ["🍋", 60, 90],
//     ["🍐", 80, 120],
//     ["🍏", 100, 140],
//     ["🫐", 205, 245],
//     ["🍆", 260, 290],
//     ["🍇", 290, 320],
// ]


import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"
import { useRef } from "react"

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}

function Image({ id }: { id: number }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 300)

    return (
        <section className="img-container">
            <div ref={ref}>
                <img
                    src={`/photos/cityscape/${id}.jpg`}
                    alt="A London skyscraper"
                />
            </div>
            <motion.h2
                // Hide until scroll progress is measured
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                style={{ y }}
            >
              {`#00${id}`}
            </motion.h2>
        </section>
    )
}

export default function Parallax() {
    // const { scrollYProgress } = useScroll()
    // const scaleX = useSpring(scrollYProgress, {
    //     stiffness: 100,
    //     damping: 30,
    //     restDelta: 0.001,
    // })

    return (
        <div id="example">
            {[1, 2, 3, 4, 5].map((image) => (
                <Image key={image} id={image} />
            ))}
            {/* <motion.div className="progress" style={{ scaleX }} /> */}
            <StyleSheet />
        </div>
    )
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
    return (
        <style>{`
        html {
            scroll-snap-type: y mandatory;
        }

        .img-container {
            height: 100vh;
            scroll-snap-align: start;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .img-container > div {
            width: 300px;
            height: 400px;
            margin: 20px;
            background: #f5f5f5;
            overflow: hidden;
        }

        .img-container img {
            width: 300px;
            height: 400px;
        }

        @media (max-width: 500px) {
            .img-container > div {
                width: 150px;
                height: 200px;
            }

            .img-container img {
                width: 150px;
                height: 200px;
            }
        }

        .img-container h2 {
            color: #8df0cc;
            margin: 0;
            font-family: "Azeret Mono", monospace;
            font-size: 50px;
            font-weight: 700;
            letter-spacing: -3px;
            line-height: 1.2;
            position: absolute;
            display: inline-block;
            top: calc(50% - 25px);
            left: calc(50% + 120px);
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 5px;
            background: #8df0cc;
            bottom: 50px;
            transform: scaleX(0);
        }
    `}</style>
    )
}