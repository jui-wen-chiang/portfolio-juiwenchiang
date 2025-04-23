import React, { useRef } from "react";
import { galleryData } from "src/data/galleryData"

import { ViewLayout } from 'src/assets/styles/commonStyles'
import { Container, Box, IconButton, Typography } from 'src/components/mui/components';
import { ArrowBackRoundedIcon, ArrowForwardRoundedIcon } from 'src/components/mui/icons';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function GalleryView() {
    const slider = React.useRef(null);

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        console.log('style',)
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 3500,
        cssEase: "linear",
        // autoplay: true,
        // autoplaySpeed: 5000,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
    };

    /* Auto Play Methods */
    // const sliderRef = useRef<Slider | null>(null);

    // const play = () => {
    //     sliderRef.current?.slickPlay();
    // };

    // const pause = () => {
    //     sliderRef.current?.slickPause();
    // };


    return (
        <ViewLayout sx={{ justifyContent: 'center' }}>
            <IconButton sx={{ padding: '1rem 0' }} onClick={() => slider?.current?.slickPrev()} color="primary">
                <ArrowBackRoundedIcon />
            </IconButton>
            <Container sx={{ height: '60vh' }}>
                <Slider ref={slider} {...settings} >
                    {galleryData.map((item, index) => {
                        return (
                            <Container sx={{
                                height: '80vh',
                                display: 'flex',
                                justifyItems: 'center',

                            }}>
                                <Box
                                    component="img"
                                    sx={{ height: '90%' }}
                                    src={item.cardImage.url}
                                    alt={item.cardImage.lable}
                                />
                                <Typography sx={{ padding: '1rem 0', fontSize: '1.5rem' }} >
                                    {item.title}
                                </Typography>
                            </Container>
                        )
                    })}
                </Slider>
            </Container>
            <IconButton onClick={() => slider?.current?.slickNext()} color="primary">
                <ArrowForwardRoundedIcon />
            </IconButton>

            {/* Auto Play Methods */}
            {/* <div style={{ textAlign: "center" }}>
                <button className="button" onClick={play}>
                    Play
                </button>
                <button className="button" onClick={pause}>
                    Pause
                </button>
            </div> */}
        </ViewLayout >
    );
}