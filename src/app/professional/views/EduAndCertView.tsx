import * as React from 'react';
import { useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

import type { TabPanelProps } from "src/types/view/ExperienceTabProps"
import { eduData } from "src/data/views/eduData"
import { TabBox, StyledTab, ExperienceCard } from "src/app/professional/assets/styles/views/EduAndCertStyle"
import { Box, Tabs, Typography, CardContent, Collapse, Button } from 'src/components/mui/components';
import { ListContainer, ListContent } from 'src/app/professional/assets/styles/commonStyles.ts';
import { ViewBox } from 'src/app/professional/assets/styles/layoutStyles';
import { ExpandLessIcon, ExpandMoreIcon } from 'src/components/mui/icons';



function CustomTabPanel(props: TabPanelProps) {
  const { items } = props;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleToggle = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  const DescriptionList = ({ items: bullets }: { items: string[] }) => (
    <>
      {bullets.map((bullet, i) => (
        <ListContainer key={i}>
          <ListContent className='list-content'>{bullet}</ListContent>
        </ListContainer>
      ))}
    </>
  );

  return (
    <ExperienceCard>
      <CardContent>
        {items.map((item, index) => (
          <Box sx={{ padding: '0.8rem 0' }}>
            <Typography variant="subtitle1" className='title'>{item.title}</Typography>
            <Typography variant="caption" className='info'>{item.date}</Typography>
            <Typography variant="caption" className='info'>{item.location}</Typography>
            {isMobile ? (
              <Box onClick={() => handleToggle(index)} className='expand-box'>
                <Button aria-label={openIndex === index ? 'ExpandLess' : 'ExpandMore'}
                className='expand-button'
                  variant="outlined"
                  size="small"
                  endIcon={openIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                >
                  {openIndex === index ? 'Expand Less' : 'Expand More'}
                </Button>
                <Collapse in={openIndex === index}>
                  <DescriptionList items={item.description ?? []} />
                </Collapse>
              </Box>
            ) : (
              <DescriptionList items={item.description ?? []} />
            )}
          </Box>
        ))}
      </CardContent>
    </ExperienceCard >
  );
}

export default function EduAndCertView() {
  const [value, setValue] = React.useState('education'); // default target tab

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const categoryData: { [key: string]: any } = Object.values(
    eduData.reduce((acc: { [key: string]: any }, item) => {
      const cls = item.class;
      if (!acc[cls]) {
        acc[cls] = { class: cls, children: [] };
      }
      acc[cls].children.push(item);
      return acc;
    }, {})
  );

  return (
    <ViewBox component="section" aria-label="Education" data-aos="zoom-in" sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h2" sx={{ textAlign: "center" }}>Education & Professional Development</Typography>
      <TabBox>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          // variant="scrollable"
          variant="fullWidth"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{ marginBottom: '0.5rem' }}
        >
          {categoryData.map((item: { [key: string]: any }) => (
            <StyledTab key={item.class} label={item.class} value={item.class} />
          ))}
        </Tabs>
        {categoryData.map((category: { [key: string]: any }) =>
          category.class === value ? (
            <CustomTabPanel key={category.class} items={category.children} />
          ) : null
        )}
      </TabBox>
    </ViewBox>
  );
};