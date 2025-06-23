import { projectData } from "src/data/projectsData";
import { Typography, CardContent } from 'src/components/mui/components';
import { ColContainer, RowContainer, ListContainer, ListContent } from 'src/assets/styles/commonStyles';
import { TextContainer, ImageContainer, TextCard, SummaryBox, IconBox, IconChip, ImageBox } from 'src/assets/styles/views/ProjectStyle';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const { PUBLIC_URL } = process.env;

export default function TestView() {
      const theme = useTheme();
      const isDesktop = useMediaQuery(theme.breakpoints.up('md')); // md 為桌機以上
  
  return (
    <ColContainer>
      <Typography variant="caption" component='h2' sx={{ paddingBottom: 0 }}>PROJECTS</Typography>
      {projectData.map((item, index) => (
        <RowContainer
          key={index}
          sx={{
            margin: '2rem auto',
            flexDirection: isDesktop ? 'row' : 'column-reverse'
          }}
        >
          <TextContainer>
            <TextCard sx={{ boxShadow: 0 }}>
              <CardContent>
                <Typography variant="subtitle2">{item.subtitle}</Typography>
                <Typography variant="h2">{item.title}</Typography>

                <SummaryBox>
                  {!isDesktop && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${PUBLIC_URL}${item.image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        opacity: 0.3,
                        zIndex: -1,
                      }}
                    />
                  )}
                  <Typography variant="body1">{item.summary}</Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>Key Features:</Typography>
                  {item.keyFeatures?.map((bullet, idx) => (
                    <ListContainer key={idx}>
                      <ListContent sx={{ padding: 0 }}>{bullet}</ListContent>
                    </ListContainer>
                  ))}
                  <IconBox>
                    {item.icons.map((icon, idx) => (
                      <IconChip key={idx} label={icon.lable} color="primary" size="small" />
                    ))}
                  </IconBox>
                  {!isDesktop && (
                    <CardActions>
                      <Button size="small" color="info" variant="contained">Learn More</Button>
                    </CardActions>
                  )}
                </SummaryBox>
              </CardContent>
            </TextCard>
          </TextContainer>
          {isDesktop && (
            <ImageContainer>
              <ImageBox alt={item.title} src={`${PUBLIC_URL}${item.image}`} />
            </ImageContainer>
          )}
        </RowContainer>
      ))}
    </ColContainer>
  )
}
