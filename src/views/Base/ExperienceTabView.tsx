import * as React from 'react';
import { TabPanelProps } from "src/types/view/ExperienceTabProps"
import { experienceData } from "src/data/experienceData"
import { StyledTab, ExperienceCard } from "src/assets/styles/views/ExperienceTabStyle"
import { Box, Tabs, Typography, CardContent } from 'src/components/mui/components';
import { ColContainer, ListContainer, ListContent } from 'src/assets/styles/commonStyles';

function CustomTabPanel(props: TabPanelProps) {
  const { key, items } = props;

  return (
    <ExperienceCard>
      <CardContent>
        {items.map((item, index) => (
          <Box sx={{ paddingTop: '1rem' }}>
            <Typography variant="h5"> {item.title}</Typography>
            <Typography variant="subtitle2">{item.date}</Typography>
            <Typography variant="subtitle2" sx={{ paddingBottom: '1rem' }}>{item.location}</Typography>
            {item.description?.map((bullet, index) => (
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

export default function ExperienceTabView() {
  const [value, setValue] = React.useState('career'); // default target tab

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const categoryData: { [key: string]: any } = Object.values(
    experienceData.reduce((acc, item) => {
      const cls = item.class;
      if (!acc[cls]) {
        acc[cls] = { class: cls, children: [] };
      }
      acc[cls].children.push(item);
      return acc;
    }, {})
  );

  return (
    <ColContainer>
      <Typography variant="h4" component='h4'>EXPERIENCE</Typography>
      <Box sx={{ width: '90%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
        >
          {categoryData.map((item, index) => (
            <StyledTab key={item.class} label={item.class} value={item.class} />
          ))}
        </Tabs>
      </Box>

      <Box sx={{ width: '90%' }}>
        {categoryData.map((category) =>
          category.class === value ? (
            <CustomTabPanel key={category.class} items={category.children} />
          ) : null
        )}
      </Box>
    </ColContainer>
  );
};