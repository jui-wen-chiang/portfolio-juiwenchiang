import ProfessionalAppBar from 'src/app/professional/components/ProfessionalAppBar';
import BackToTop from 'src/components/tools/BackToTop/BackToTop.tsx';
import IndexViews from "src/app/professional/views/IndexViews";
// style
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@xyflow/react/dist/style.css';
import { useState, useEffect } from 'react';
import { AppLayoutContainer, ViewSection } from 'src/app/professional/assets/styles/layoutStyles';
import { BGCOLORS } from 'src/theme/UIstandard'
// import BackgroundLayer from "src/components/tools/Background/BackgroundLayer";
// animation
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ProfessionalLayout() {
    const [bgColor, setBgColor] = useState(BGCOLORS.home);
    const [sectionId, setSectionId] = useState('home');

    useEffect(() => {
        AOS.init({
            duration: 1000,
            mirror: true,
            once: false,
        });
    }, []);

    return (
        <AppLayoutContainer maxWidth={false} bgColor={bgColor}>
            {/* <ViewSection component="header" flex={5}> */}
            <ViewSection flex={5}>
                <ProfessionalAppBar />
            </ViewSection>
            {/* <ViewSection component="main" flex={95} sx={{ mb: 0, pb: 0 }}> */}
            <ViewSection flex={95} sx={{ mb: 0, pb: 0 }}>
                <IndexViews onColorChange={setBgColor} onSectionChange={setSectionId} />
            </ViewSection>
            <BackToTop variant={''} />
        </AppLayoutContainer>
    );
}