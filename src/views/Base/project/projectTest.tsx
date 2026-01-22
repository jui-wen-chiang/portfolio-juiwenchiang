// 線滑手機板
import React, { useState } from 'react';
import { Typography, Box, IconButton } from '@mui/material';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SchoolIcon, WorkIcon, SunnyIcon } from 'src/components/mui/icons';

// Styled Components
const ViewBox = ({ children }) => (
    <Box sx={{
        minHeight: '100vh',
        // background: 'linear-gradient(135deg, #1e293b 0%, #7e22ce 50%, #1e293b 100%)',
        padding: '5rem 2rem',
    }}>
        {children}
    </Box>
);

const ProjectRows = ({ children }) => (
    <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        maxWidth: '1400px',
        margin: '3rem auto',
        justifyContent: 'center',
        position: 'relative',
    }}>
        {children}
    </Box>
);

const OverlapTitle = ({ children }) => (
    <Box sx={{
        background: 'linear-gradient(90deg, #9333ea 0%, #ec4899 100%)',
        padding: '1rem 1.5rem',
        borderRadius: '12px 12px 0 0',
        position: 'relative',
        zIndex: 10,
        transform: 'translateY(2rem)',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        '&:hover': {
            transform: 'translateY(1.5rem)',
            boxShadow: '0 8px 16px rgba(147, 51, 234, 0.4)',
        },
        '& h3': {
            margin: 0,
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: 'white',
        }
    }}>
        {children}
    </Box>
);

const ColumnCard = ({ children }) => (
    <Box sx={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '12px',
        padding: '4rem 1.5rem 2rem',
        height: '320px',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
            background: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            transform: 'scale(1.05)',
            boxShadow: '0 20px 40px rgba(147, 51, 234, 0.3)',
        },
        '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0) 0%, rgba(236, 72, 153, 0) 100%)',
            transition: 'all 0.3s ease',
        },
        '&:hover::before': {
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
        },
        '& p': {
            margin: 0,
            //   color: '#e5e7eb',
            lineHeight: '1.7',
            fontSize: '0.95rem',
            flex: 1,
        }
    }}>
        {children}
        <Box sx={{
            height: '4px',
            background: 'linear-gradient(90deg, #9333ea 0%, #ec4899 100%)',
            borderRadius: '2px',
            width: '4rem',
            marginTop: '1.5rem',
            transition: 'all 0.3s ease',
            '.MuiBox-root:hover &': {
                width: '100%',
            }
        }} />
    </Box>
);

export default function ProjectShowcase() {
    const [currentPage, setCurrentPage] = useState(0);

    const projectData = [
        {
            title: "E-Commerce Platform",
            summary: "A full-stack online shopping platform with real-time inventory management, secure payment integration, and personalized product recommendations powered by machine learning algorithms."
        },
        {
            title: "Healthcare Dashboard",
            summary: "An intuitive medical analytics dashboard that visualizes patient data, tracks treatment outcomes, and provides predictive insights for healthcare professionals."
        },
        {
            title: "Smart City IoT System",
            summary: "An integrated IoT solution for urban management, featuring real-time monitoring of traffic flow, air quality, energy consumption, and public infrastructure maintenance."
        },
        {
            title: "Mobile Banking App",
            summary: "A secure and user-friendly mobile banking application with biometric authentication, instant transfers, budget tracking, and investment portfolio management."
        },
        {
            title: "AI Content Generator",
            summary: "An advanced AI-powered content creation tool that generates marketing copy, blog posts, and social media content while maintaining brand voice consistency."
        },
        {
            title: "Virtual Event Platform",
            summary: "A comprehensive virtual conference platform with live streaming, networking rooms, interactive workshops, and real-time engagement analytics."
        }
    ];

    const itemsPerPage = 3;
    const totalPages = Math.ceil(projectData.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const displayedProjects = projectData.slice(startIndex, startIndex + itemsPerPage);

    const handlePrev = () => {
        setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    };

    return (
        <ViewBox>
            <Typography
                variant="h3"
                component='h3'
                fontWeight="bold">
                Projects
            </Typography>

            <Box sx={{ position: 'relative', maxWidth: '1400px', margin: '0 auto' }}>
                {/* Previous Button */}
                <IconButton
                    onClick={handlePrev}
                    sx={{
                        position: 'absolute',
                        left: '-80px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        // color: 'white',
                        zIndex: 20,
                        '&:hover': {
                            background: 'rgba(255, 255, 255, 0.2)',
                            transform: 'translateY(-50%) scale(1.1)',
                        },
                        transition: 'all 0.3s ease',
                    }}
                >
                <SchoolIcon/>
                </IconButton>

                {/* Next Button */}
                <IconButton
                    onClick={handleNext}
                    sx={{
                        position: 'absolute',
                        right: '-80px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        // color: 'white',
                        zIndex: 20,
                        '&:hover': {
                            background: 'rgba(255, 255, 255, 0.2)',
                            transform: 'translateY(-50%) scale(1.1)',
                        },
                        transition: 'all 0.3s ease',
                    }}
                >
                <SchoolIcon/>
                </IconButton>

                <ProjectRows>
                    {displayedProjects.map((item, index) => (
                        <Box
                            key={startIndex + index}
                            sx={{
                                width: '100%',
                                maxWidth: '380px',
                                flex: '1 1 300px',
                            }}
                        >
                            <OverlapTitle>
                                <h3>{item.title}</h3>
                            </OverlapTitle>
                            <ColumnCard>
                                <p>{item.summary}</p>
                            </ColumnCard>
                        </Box>
                    ))}
                </ProjectRows>

                {/* Page Indicators */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    marginTop: '3rem'
                }}>
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <Box
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            sx={{
                                width: index === currentPage ? '32px' : '8px',
                                height: '8px',
                                borderRadius: '4px',
                                background: index === currentPage
                                    ? '#9333ea'
                                    : 'rgba(255, 255, 255, 0.3)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    background: index === currentPage
                                        ? '#9333ea'
                                        : 'rgba(255, 255, 255, 0.5)',
                                }
                            }}
                        />
                    ))}
                </Box>
            </Box>
        </ViewBox>
    );
}