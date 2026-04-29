import { useState } from 'react';
import { projecstData } from "src/data/projectsData";
import { Typography, Box, Chip, Dialog, Button, IconButton, Divider } from 'src/components/mui/components';
import { ViewBox } from 'src/assets/styles/layoutStyles';
import { ProjectRows, CardRoot, CardImg, CardCover, DetailBox } from 'src/assets/styles/views/ProjectStyle';
import { CloseIcon, ReadMoreIcon, GitHubIcon, DescriptionIcon } from 'src/components/mui/icons'
import { ListContainer, ListContent } from 'src/assets/styles/commonStyles';
import { ColorScheme } from 'src/theme/UIstandard'


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
                        <Box className="card-overlay" />
                        <CardCover className="card-cover">
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
                                        component="a"
                                        href={link.url}
                                        target="_blank"
                                        variant="contained"
                                        fullWidth
                                        color='primary'
                                        startIcon={
                                            link.type === 'repo'
                                                ? <GitHubIcon />
                                                : <DescriptionIcon />
                                        }
                                    >{link.label}
                                    </Button>
                                ))}
                                <Button
                                    component="label"
                                    variant="contained"
                                    fullWidth
                                    color='primary'
                                    onClick={() => handleOpen(item)}
                                    startIcon={<ReadMoreIcon />}
                                >Explore</Button>
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
                        width: '95vw',
                        height: '95vh',
                        maxWidth: 'none',
                        borderRadius: '0.5rem'
                    }
                }}
            >
                {selected && (
                    <>
                        <DetailBox>
                            <Box className="close-button" >
                                <IconButton onClick={handleClose} > <CloseIcon /> </IconButton>
                            </Box>

                            <Box className="main-section">
                                <Box className="info">
                                    {selected.detailImg
                                        ?.filter(img => img.tag === 'case')
                                        .map((img, i) => (
                                            <Box key={i} className="img-detail"
                                                sx={{ backgroundColor: img.bgColor }} >
                                                <Box component="img" className='img-detail-content'
                                                    src={img.url}
                                                    alt={img.lable}
                                                />
                                            </Box>
                                        ))
                                    }
                                    <Box className="brief">
                                        <Box className="brief-title">
                                            {selected.link?.map((link) => (
                                                <IconButton color='primary' size='large' href={link.url}
                                                    target="_blank">
                                                    {link.type === 'repo'
                                                        ? <GitHubIcon />
                                                        : <DescriptionIcon />}
                                                </IconButton>
                                            ))}
                                            <Typography variant="h6" sx={{ my: 1, color: ColorScheme.primary.dark }}> {selected.title} </Typography>
                                        </Box>

                                        <Typography variant="subtitle2" sx={{ my: 1 }}> {selected.role}</Typography>
                                        <Box className="chips">
                                            {selected.tech.map((tech, i) => (
                                                <Chip
                                                    key={i}
                                                    label={tech.lable}
                                                    icon={tech?.icon && <tech.icon />}
                                                />
                                            ))}
                                        </Box>
                                        <Typography variant="body1" sx={{ mb: 1 }}> {selected.summary}</Typography>
                                    </Box>
                                </Box>
                                <Divider sx={{ my: '1.5rem' }} />


                                <Typography variant="subtitle1" sx={{ my: '0.8rem' }}> Solution </Typography>
                                <Typography> {selected.solution} </Typography>
                                <Typography variant="subtitle1" sx={{ my: '0.8rem' }}> Task </Typography>
                                <Typography> {selected.task} </Typography>

                                <Typography variant="subtitle1" sx={{ my: '0.8rem' }}> Actions </Typography>
                                {selected.actions.map((bullet: string) => (
                                    <ListContainer>
                                        <ListContent className='list-content'>{bullet}</ListContent>
                                    </ListContainer>
                                ))}

                                <Typography variant="subtitle1" sx={{ my: '0.8rem' }}> Results </Typography>
                                {selected.results.map((bullet: string) => (
                                    <ListContainer>
                                        <ListContent className='list-content'>{bullet}</ListContent>
                                    </ListContainer>
                                ))}

                            </Box>
                        </DetailBox>
                    </>
                )}
            </Dialog>
        </ViewBox >
    );
}
