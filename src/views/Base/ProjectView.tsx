import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { projectData } from "src/data/projectsData";
import { Typography, Box, Chip, Dialog, DialogContent, DialogTitle, IconButton } from 'src/components/mui/components';
import { ViewBox } from 'src/assets/styles/layoutStyles';
import { ProjectRows, CardRoot, CardImg, CardOverlay, CardTitleAlways, CardImgSourceText, CardImgTitleText, CardSummaryText, CardBody, ViewButton } from 'src/assets/styles/views/ProjectStyle';
import CloseIcon from '@mui/icons-material/Close';

// const { VITE_PUBLIC_URL: PUBLIC_URL } = import.meta.env;


export default function ProjectsView() {
    const [selected, setSelected] = useState<typeof projectData[0] | null>(null);
    // const theme = useTheme();

    return (
        <ViewBox data-aos="zoom-in">
            <Typography variant="h2" sx={{ textAlign: "center" }}>Projects</Typography>
            <ProjectRows>
                {projectData.map((item, index) => (
                    <CardRoot className="card-root" key={index}>
                        <CardImg
                            className="card-img"
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                        />
                        <CardOverlay />

                        <CardTitleAlways className="card-title-always">
                            {item.title}
                            <CardImgSourceText>
                                {item.imgsource}
                            </CardImgSourceText>
                        </CardTitleAlways>

                        <CardBody className="card-body">
                            <CardImgTitleText>
                                {item.title}
                            </CardImgTitleText>
                            <CardSummaryText>
                                {item.summary}
                            </CardSummaryText>

                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                    {/* {item.techStack?.map((tech, i) => (
                                        <Chip
                                            key={i}
                                            label={tech}
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
                                    ))} */}
                                    {item.icons?.slice(0, 5).map((tech, i) => (
                                        <Box sx={{ paddingTop: '0.5rem', paddingBottom: '0'}}>
                                            {tech.src && <tech.src size={25} color='#fff' />}
                                        </Box>
                                    ))}
                                </Box>
                                {/* <ViewButton
                                    variant="outlined"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelected(item);
                                    }}
                                >
                                    View
                                </ViewButton> */}
                            </Box>
                        </CardBody>
                    </CardRoot>
                ))}
            </ProjectRows>

            {/* Modal */}
            <Dialog
                open={!!selected}
                onClose={() => setSelected(null)}
                maxWidth="sm"
                fullWidth
                // PaperProps={{ sx: { borderRadius: 3, p: 1 } }}
            >
                <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 1 }}>
                    {/* <Typography variant="h6" fontWeight={500}>{selected?.title}</Typography> */}
                    <IconButton size="small" onClick={() => setSelected(null)}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    {selected?.image && (
                        <Box
                            component="img"
                            src={selected.image}
                            alt={selected.title}
                            sx={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 2, mb: 2 }}
                        />
                    )}
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                        {selected?.summary}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {selected?.techStack?.map((tech, i) => (
                            <Chip key={i} label={tech} size="small" variant="outlined" />
                        ))}
                    </Box>
                </DialogContent>
            </Dialog>
        </ViewBox>
    );
}
