import { useState } from 'react';
import { projecstData } from "src/data/views/projectsData";
import { Card, CardContent, Typography, Box, Chip, Dialog, Button, IconButton, Divider } from 'src/components/mui/components';
import { ViewBox } from 'src/assets/styles/layoutStyles';
import {
    ProjectRows, CardRoot, CardImgWrapper, CardImg, CardCover, DetailBox
} from 'src/assets/styles/views/ProjectStyle';
import { CloseIcon, ReadMoreIcon, GitHubIcon, DescriptionIcon } from 'src/components/mui/icons'
import { ListContainer, ListContent } from 'src/assets/styles/commonStyles';


export default function ProjectsView() {
    const [selected, setSelected] = useState<typeof projecstData[0] | null>(null);
    const handleOpen = (item: typeof projecstData[0]) => setSelected(item);
    const handleClose = () => setSelected(null);

    const typeOrder = ['frontend', 'backend', 'database', 'ai', 'devops', 'tool', 'design'];

    return (
        <ViewBox data-aos="zoom-in">
            <Typography variant="h2" sx={{ textAlign: "center", padding: '2rem' }}>Projects</Typography>
            <ProjectRows>
                {projecstData.map((item, index) => (
                    <CardRoot className="card-root" key={index}>
                        <CardImgWrapper>
                            <CardImg
                                className="card-img"
                                src={item.img.url}
                                alt={item.img.lable}
                                loading="lazy"
                            />
                        </CardImgWrapper>
                        <Box className="card-overlay" />
                        <CardCover className="card-cover">
                            <p className="title">{item.title}</p>
                            <p className="role">Role: {item.role}</p>
                            {item.tech.some(t => t.display === 'cover') && (
                                <Box className="chips-box">
                                    {item.tech
                                        .filter(t => t.display === 'cover')
                                        .map((tech, i) => (
                                            <Chip key={i} label={tech.lable} className="chip" />
                                        ))}
                                </Box>
                            )}
                            <Box className="button">
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
                                            // sx={{ backgroundColor: img.bgColor }} 
                                            >
                                                <Box component="img" className='img-detail-content'
                                                    src={img.url}
                                                    alt={img.lable}
                                                />
                                            </Box>
                                        ))
                                    }
                                    <Box className="brief">
                                        <Box>
                                            {selected.link?.map((link) => (
                                                <Button
                                                    className='brief-icons'
                                                    color='primary'
                                                    size='large'
                                                    href={link.url}
                                                    target="_blank"
                                                    variant="contained"
                                                    startIcon={link.type === 'repo'
                                                        ? <GitHubIcon />
                                                        : <DescriptionIcon />}>
                                                    {link.label}
                                                </Button>
                                            ))}
                                        </Box>
                                        <Typography variant="h6" className='brief-title'> {selected.title} </Typography>
                                        <Typography variant="subtitle2" className='brief-role'> {selected.role}</Typography>
                                        <Typography variant="body1" sx={{ my: 1.5 }}> {selected.summary}</Typography>
                                        <Box className="chips">
                                            {selected.tech
                                                .sort((a, b) => typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type))
                                                .map((tech, i) => (
                                                    <Chip
                                                        key={i}
                                                        label={tech.lable}
                                                        icon={tech?.icon && <tech.icon />}
                                                    />
                                                ))}
                                        </Box>
                                    </Box>
                                </Box>
                                <Divider sx={{ my: '1.5rem' }} />
                                <Box>
                                    <Card className='area-card'>
                                        <CardContent>
                                            <Typography variant="subtitle1" sx={{ my: '0.8rem' }}> Solution </Typography>
                                            <Typography> {selected.solution} </Typography>
                                            <Typography variant="subtitle1" sx={{ my: '0.8rem' }}> Task </Typography>
                                            <Typography> {selected.task} </Typography>
                                        </CardContent>
                                    </Card>
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
                            </Box>
                        </DetailBox>
                    </>
                )}
            </Dialog>
        </ViewBox >
    );
}
