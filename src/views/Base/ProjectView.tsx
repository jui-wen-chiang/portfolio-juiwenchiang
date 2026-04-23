import { useState } from 'react';
import { projecstData } from "src/data/projectsData";
import { Typography, Box, Chip, Dialog, Button, Link, IconButton } from 'src/components/mui/components';
import { ViewBox } from 'src/assets/styles/layoutStyles';
import { ProjectRows, CardRoot, CardImg, CardOverlay, CardCover, DetailBox } from 'src/assets/styles/views/ProjectStyle';
import CloseIcon from '@mui/icons-material/Close';
import { ReadMoreIcon, GitHubIcon, DescriptionIcon } from 'src/components/mui/icons'
// import BackgroundBlobs from "src/components/tools/Background/BackgroundBlobs";


export default function ProjectsView() {
    const [selected, setSelected] = useState<typeof projecstData[0] | null>(null);
    const handleOpen = (item: typeof projecstData[0]) => setSelected(item);
    const handleClose = () => setSelected(null);

    return (
        <ViewBox data-aos="zoom-in">
            <Typography variant="h2" sx={{ textAlign: "center", padding: '2rem' }}>Projects</Typography>
            <ProjectRows>
                {projecstData.map((item, index) => (
                    <CardRoot className="card-root" key={index}>
                        <CardImg
                            className="card-img"
                            src={item.img.url}
                            alt={item.img.lable}
                            loading="lazy"
                        />
                        <CardOverlay className="card-overlay" />
                        <CardCover className="card-title-always">
                            <p className="title">{item.title}</p>
                            <p className="role">Role: {item.role}</p>
                            {item.tech.some(t => t.display === 'cover' && t.icon) && (
                                <Box className="chips-box">
                                    {item.tech
                                        .filter(t => t.display === 'cover' && t.icon)
                                        .map((tech, i) => (
                                            <Chip key={i} label={tech.lable} className="chip" />
                                        ))}
                                </Box>
                            )}
                            <Box className="button" >
                                {item.link?.map((link, i) => (
                                    <Button
                                        key={i}
                                        component="label"
                                        variant="contained"
                                        fullWidth
                                        startIcon={
                                            link.type === 'repo'
                                                ? <GitHubIcon sx={{ fontSize: 18 }} />
                                                : <DescriptionIcon sx={{ fontSize: 18 }} />
                                        }
                                    >
                                        <Link href={link.url} underline="none">{link.label}</Link>
                                    </Button>
                                ))}
                                <Button
                                    component="label"
                                    variant="contained"
                                    fullWidth
                                    onClick={() => handleOpen(item)}
                                    startIcon={<ReadMoreIcon />}
                                >Read More</Button>
                            </Box>
                        </CardCover>
                    </CardRoot>
                ))}
            </ProjectRows>

            <Dialog
                open={!!selected}
                onClose={handleClose}
                sx={{
                    '& .MuiDialog-paper': {
                        width: '80vw',
                        height: '80vh',
                        maxWidth: 'none',
                    }
                }}
            >
                {selected && (
                    <>
                        {/* <BackgroundBlobs variant="hero" /> */}
                        <DetailBox>
                            <Box className="close-button" >
                                <IconButton onClick={handleClose} > <CloseIcon /> </IconButton>
                            </Box>

                            <Box className="main-section">
                                <Box className="info">
                                    <Typography variant="h6" sx={{ mb: 2 }}> {selected.title} </Typography>
                                    {selected.link?.map((link, i) => (
                                        <IconButton color='primary' size='large' href={link.url}
                                            target="_blank">
                                            {link.type === 'repo'
                                                ? <GitHubIcon />
                                                : <DescriptionIcon />}
                                        </IconButton>
                                    ))}
                                    <Typography variant="body2" sx={{ mb: 2 }}> Role: {selected.role}</Typography>
                                    <Box className="chips">
                                        {selected.tech.map((tech, i) => (
                                            <Chip
                                                key={i}
                                                label={tech.lable}
                                                icon={tech?.icon && <tech.icon />}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                                <Typography variant="subtitle2" color='primary' sx={{ my: '1.5rem' }}>
                                    {selected.summary}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ my: '0.5rem' }}> Problem: </Typography>
                                <Typography> {selected.problem} </Typography>
                                <Typography variant="subtitle1" sx={{ my: '0.5rem' }}> Solution: </Typography>
                                <Typography> {selected.solution} </Typography>
                                <Typography variant="subtitle1" sx={{ my: '0.5rem' }}> Impact: </Typography>
                                <Typography> {selected.impact} </Typography>
                            </Box>
                        </DetailBox>
                    </>
                )}
            </Dialog>
        </ViewBox>
    );
}
