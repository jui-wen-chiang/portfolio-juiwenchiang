import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// component
import { FormControl, MenuItem, Select } from 'src/components/mui/components';
import { RatioRowContainer, ColContainer, ControlButton } from 'src/assets/styles/commonStyles'
import { Chrono } from 'react-chrono';
// icon
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
// data
import { timelineData } from "src/data/timeline"
// style
import 'src/assets/styles/timeline.css';
import LinearProgress from '@mui/material/LinearProgress';


export default function TimelinePage() {
    const { t } = useTranslation();
    const refs = useRef([]);

    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null); // Stores the JavaScript timer ID
    const slideDuration = 5000; // 5 seconds

    /* Control Bar event */
    const handlePrev = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev < timelineData.length - 1 ? prev + 1 : prev));
    };

    const handleSelect = (index: number) => {
        setActiveIndex(index);
    };


    /* Timeline event */
    // slideshow
    useEffect(() => {
        if (isPlaying) {
            // set a timer and update the status of the current timeline project
            intervalRef.current = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % timelineData.length);
            }, slideDuration);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }

        return () => {
            // re-execute or component unmount, perform cleanup first 
            // to avoid repeated timer opening or running secretly when leaving the page.
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPlaying]);

    // Move this page to the selected item
    const scrollSelect = (item, index) => {
        const el = refs.current[index]; // DOM
        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    };

    // test
    const customContent = [
        <div>
            <h3>Custom Card 1</h3>
            <p>This is the first custom card</p>
        </div>,
        <div>
            <h3>Custom Card 2</h3>
            <p>This is the second custom card</p>
        </div>,
    ];

    const items = [
      {
        title: "Item 1",
        cardSubtitle: "September 2019",
        media: {
          type: "IMAGE",
          source: {
            url: "https://picsum.photos/800/400",
          },
        },
      },
      {
        title: "Item 2",
        cardSubtitle: "October 2019",
        media: {
          type: "IMAGE",
          source: {
            url: "https://picsum.photos/800/400",
          },
        },
      },
      {
        title: "Item 3",
        cardSubtitle: "November 2019",
        media: {
          type: "IMAGE",
          source: {
            url: "https://picsum.photos/800/400",
          },
        },
      },
    ];
    
    const events = [
        {
            title: 'May 1945',
            cardTitle: 'Dunkirk',
            url: 'http://www.history.com',
            media: {
                name: 'dunkirk beach',
                source: {
                    url: 'https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg',
                },
                type: 'IMAGE',
            },
            cardSubtitle:
                'Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.',
            cardDetailedText: [
                `On 10 May 1940, <a href="http://www.google.com">Hitler</a> began his <strong>long-awaited</strong> offensive in the west by invading neutral Holland and Belgium and attacking northern France.
            <br>`,
                `<ul>
              <li>Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May.</li>
              <li>With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.</li>
              <li>
                Germany’s armoured spearheads reached the Channel coast on 20 May, and the British began to evacuate their troops from Dunkirk
              </li>
              <li>
              The evacuation was codenamed ‘Operation Dynamo’ and was directed by Admiral Bertram Ramsay from his headquarters deep in the cliffs at Dover.
              </li>
            </ul>
            `,
            ],
        },
    ];

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <RatioRowContainer ratio={[1, 9]}>
            {/* Customize Control Bar */}
            <ColContainer>
                <ControlButton aria-label="previous" size="large" onClick={handlePrev}>
                    <KeyboardArrowUpRoundedIcon fontSize="inherit" />
                </ControlButton>
                <ControlButton aria-label="next" size="large" onClick={handleNext}>
                    <KeyboardArrowDownRoundedIcon fontSize="inherit" />
                </ControlButton>
                <ControlButton aria-label="Play or Stop" size="large"
                    onClick={() => setIsPlaying((prev) => !prev)}>
                    {isPlaying
                        ? <PauseCircleFilledRoundedIcon fontSize="inherit" />
                        : <PlayCircleRoundedIcon fontSize="inherit" />}
                </ControlButton>

                <FormControl>
                    <Select
                        value={activeIndex}
                        onChange={(e) => handleSelect(Number(e.target.value))}>
                        <MenuItem disabled value="">
                            <em>PlaceholderChose</em>
                        </MenuItem>
                        {timelineData.map((item, idx) => (
                            <MenuItem key={idx} value={idx}>
                                {item.title}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </ColContainer>
            {/* Time line */}
            <div style={{ height: "80vh", overflowY: "auto", width: "100%" }}>
                {/* <LinearProgress variant="determinate" value={intervalRef} /> */}
                {/* <Chrono items={items}>{customContent}</Chrono>; */}
                {/* <Chrono mode="VERTICAL"
                    slideShow
                    slideItemDuration={4000}
                    scrollable={{ scrollbar: false }}>
                    <div>
                        <div style={{ width: "250px", height: "250px" }}>
                            <img
                                style={{ maxWidth: "100%", maxHeight: "100%" }}
                                alt="test"
                                src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
                            />
                        </div>
                    </div>
                    <div>
                        <h3>This is a List</h3>
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                            <li>Item 4</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Dunkirk</h3>
                        <p>
                            The Battle of Dunkirk (French: Bataille de Dunkerque) was fought
                            in Dunkirk (Dunkerque), France, during the Second World War,
                            between the Allies and Nazi Germany. As the Allies were losing the
                            Battle of France on the Western Front, the Battle of Dunkirk was
                            the defence and evacuation to Britain of British and other Allied
                            forces in Europe from 26 May to 4 June 1940.
                        </p>
                        <p>
                            After the Phoney War, the Battle of France began in earnest on 10
                            May 1940. To the east, the German Army Group B invaded the
                            Netherlands and advanced westward. In response, the Supreme Allied
                            Commander—French General Maurice Gamelin—initiated "Plan D" and
                            entered Belgium to engage the Germans in the Netherlands. The plan
                            relied heavily on the Maginot Line fortifications along the
                            German–French border, but German forces had already crossed
                            through most of the Netherlands before the French forces arrived.
                            Gamelin instead committed the forces under his command, three
                            mechanised armies, the French First and Seventh Armies and the
                            British Expeditionary Force (BEF), to the River Dyle.
                        </p>
                    </div>
                    <div style={{ margin: "1rem" }}>
                        <h3>Table</h3>
                        <table>
                            <thead>
                                <tr>
                                    <td>Column 1</td>
                                    <td>Column 2</td>
                                    <td>Column 3</td>
                                    <td>Column 4</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Value 1</td>
                                    <td>Value 2</td>
                                    <td>Value 3</td>
                                    <td>Value 4</td>
                                </tr>
                                <tr>
                                    <td>Value 5</td>
                                    <td>Value 6</td>
                                    <td>Value 7</td>
                                    <td>Value 8</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Chrono> */}
                {/* <Chrono items={events} mode="VERTICAL" enableOutline  parseDetailsAsHTML/> */}

                {/* <Chrono
                    mode="VERTICAL_ALTERNATING"
                    items={items}
                    textOverlay
                    // cardHeight={200} // sets the height of the timeline card to 200px
                    // mediaHeight={100} // sets the height of the media element to 100px
                    // contentDetailsHeight={80} // sets the height of the detailed text to 80px
                    // readMore={true} // enables the readMore function for larger chunks of text
                /> */}

                <Chrono
                    // mode="VERTICAL"
                    mode="VERTICAL_ALTERNATING"
                    // itemWidth={250}
                    // items={items}

                    items={timelineData}
                    slideShow={true}
                    slideShowType="reveal"
                    allowDynamicUpdate={true}
                    activeItemIndex={activeIndex}
                    disableToolbar={true}
                    // borderLessCards={true}

                    // parseDetailsAsHTML={true}
                    // readMore={true}
                    onItemSelected={(item, index) => scrollSelect(item, index)}
                    // theme={{
                    //     primary: "red",
                    //     secondary: "blue",
                    //     cardBgColor: "yellow",
                    //     cardForeColor: "violet",
                    //     titleColor: "black",
                    //     titleColorActive: "red",
                    // }}
                    cardHeight={300} // sets the height of the timeline card to 200px
                    mediaHeight={50} // sets the height of the media element to 100px
                    contentDetailsHeight={50} // sets the height of the detailed text to 80px
                    readMore={true}
                    parseDetailsAsHTML
                    // textOverlay
                >
                    {/* Custom card content */}
                    {/* {timelineData.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) refs.current[index] = el;
                            }}
                            style={{ width: "100%", padding: "10px", background: "white", position: "relative" }}
                        >
                            <h3>{item.cardTitle}</h3>
                            {isPlaying && index === activeIndex && (
                                <div className="progress-bar">
                                    <div className="filling" />
                                </div>
                            )}
                        </div>
                    ))} */}
                </Chrono>
            </div>
        </RatioRowContainer>
    )
}