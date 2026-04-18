import * as React from 'react';
import type { TabPanelProps } from "src/types/view/ExperienceTabProps"
import { eduData } from "src/data/eduData"
import { StyledTab, ExperienceCard } from "src/assets/styles/views/ExperienceTabStyle"
import { Box, Tabs, Typography, CardContent } from 'src/components/mui/components';
import { ListContainer, ListContent } from 'src/assets/styles/commonStyles';
import { ViewBox } from 'src/assets/styles/layoutStyles';


function CustomTabPanel(props: TabPanelProps) {
  const { items } = props;

  return (
    <ExperienceCard sx={{padding:'0.5rem'}}>
      <CardContent>
        {items.map((item) => (
          <Box sx={{ paddingTop: '1rem' }}>
            <Typography variant="h6"> {item.title}</Typography>
            <Typography variant="caption" sx={{ paddingBottom: '1rem' }}>{item.date} | {item.location}</Typography>
            {/* <Typography variant="caption" sx={{ paddingBottom: '1rem' }}>{item.location}</Typography> */}
            {item.description?.map((bullet: string) => (
              <ListContainer >
                <ListContent sx={{ padding: 0 }}>{bullet}</ListContent>
              </ListContainer>
            ))}
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
    // aria-label="Experience" 
    <ViewBox component="section" aria-label="Education"  data-aos="zoom-in">
                  <Typography variant="h2" sx={{ textAlign: "center" }}>Education & Professional Development</Typography>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '2rem' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
        >
          {categoryData.map((item: { [key: string]: any }) => (
            <StyledTab key={item.class} label={item.class} value={item.class} />
          ))}
        </Tabs>
      </Box>

      <Box sx={{ width: '100%' }}>
        {categoryData.map((category: { [key: string]: any }) =>
          category.class === value ? (
            <CustomTabPanel key={category.class} items={category.children} />
          ) : null
        )}
      </Box>
    </ViewBox>
  );
};