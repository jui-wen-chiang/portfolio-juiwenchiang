import { useState } from 'react';
import { projecstData } from "src/data/projectsData";
import { Typography, Box, Chip, Dialog, DialogContent, Link, DialogTitle, IconButton, Alert, AlertTitle } from 'src/components/mui/components';
import { ViewBox } from 'src/assets/styles/layoutStyles';
import { ProjectRows, CardRoot, CardImg, CardOverlay, CardTitleAlways, CardSummaryText, CardBody, ViewButton, PopupImg } from 'src/assets/styles/views/ProjectStyle';
import CloseIcon from '@mui/icons-material/Close';
import { ReadMoreIcon, GitHubIcon, DescriptionIcon } from 'src/components/mui/icons'
import Divider from '@mui/material/Divider';


export default function ProjectsView() {
    const [selected, setSelected] = useState<typeof projecstData[0] | null>(null);
    const handleOpen = (item: typeof projecstData[0]) => setSelected(item);
    const handleClose = () => setSelected(null);

    return (
        <ViewBox data-aos="zoom-in">
            <Typography variant="h2" sx={{ textAlign: "center", padding: '2rem' }}>Projects</Typography>
            <ProjectRows>
                {projecstData.map((item, index) => (
                    <CardRoot className="card-root" key={index} onClick={() => handleOpen(item)}>
                        <CardImg
                            className="card-img"
                            src={item.img.url}
                            alt={item.img.lable}
                            loading="lazy"
                        />
                        <CardOverlay className="card-overlay" />
                        <CardTitleAlways className="card-title-always">
                            <Box sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem', color: "#FFF" }}>
                                {/* {item.link?.map((link, i) => (
                                    <Box key={i} sx={{ color: '#fff', display: 'flex', alignItems: 'center' }}>
                                        {link.type === 'repo'
                                            ? <GitHubIcon sx={{ fontSize: 18 }} />
                                            : <DescriptionIcon sx={{ fontSize: 18 }} />
                                        }
                                    </Box>
                                ))} */}
                                <ReadMoreIcon />
                            </Box>
                            <p className="title">{item.title}</p>
                            <p className="role">Role: {item.role}</p>
                            {item.tech.some(t => t.display === 'cover' && t.icon) && (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: '8px',
                                        alignItems: 'center',
                                        mt: '8px',
                                    }}
                                >
                                    {item.tech
                                        .filter(t => t.display === 'cover' && t.icon)
                                        .map((tech, i) => (
                                            <Chip
                                                key={i}
                                                label={tech.lable}
                                                size="small"
                                                sx={{
                                                    fontSize: 11,
                                                    height: 22,
                                                    color: '#fff',
                                                    background: 'rgba(255,255,255,0.18)',
                                                    border: '0.5px solid rgba(255,255,255,0.35)',
                                                    '& .MuiChip-label': { px: '10px' },
                                                }}
                                            />
                                        ))}
                                </Box>
                            )}
                        </CardTitleAlways>
                    </CardRoot>
                ))}
            </ProjectRows>

            {/* Modal */}
            <Dialog
                open={!!selected}
                onClose={handleClose}
                maxWidth="sm"
                fullWidth
                sx={{
                    '& .MuiDialog-paper': {
                        width: '80%',
                        height: '80%',
                        maxWidth: 'none',
                    },
                }}
            >
                {selected && (
                    <>
                        <Box sx={{ position: 'relative' }}>
                            {/* <PopupImg
                                src={selected.img.url}
                                alt={selected.img.lable}
                                style={{ borderRadius: 0, marginBottom: 0 }}
                            /> */}
                            <IconButton
                                onClick={handleClose}
                                sx={{
                                    position: 'absolute',
                                    top: 10,
                                    right: 10,
                                    color: '#fff',
                                    background: 'rgba(0,0,0,0.45)',
                                    '&:hover': { background: 'rgba(0,0,0,0.65)' },
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                        </Box>

                        <Box sx={{ p: '1.5rem' }}>
                            <Typography variant="h6" sx={{ mb: 2 }}> {selected.title} </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}> Role: {selected.role}</Typography>

                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', mb: 2 }}>
                                {selected.tech.map((tech, i) => (
                                    <Chip
                                        key={i}
                                        label={tech.lable}
                                        icon={tech?.icon && <tech.icon />}
                                    />
                                ))}
                            </Box>
                            <Alert icon={false} severity="info" sx={{ fontSize: '1.25rem', color: '#FFF', bgcolor: '#54a8f6' }} >
                                {selected.summary}
                            </Alert>
                            <Typography variant="subtitle1" sx={{ my: '0.5rem' }}> Problem: </Typography>
                            <Typography> {selected.problem} </Typography>
                            <Typography variant="subtitle1" sx={{ my: '0.5rem' }}> Solution: </Typography>
                            <Typography> {selected.solution} </Typography>
                            <Typography variant="subtitle1" sx={{ my: '0.5rem' }}> Impact: </Typography>
                            <Typography> {selected.impact} </Typography>
                        </Box>
                    </>
                )}
            </Dialog>
        </ViewBox>
    );
}
