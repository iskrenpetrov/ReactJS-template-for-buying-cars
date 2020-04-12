import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Wheels1 from './images/Wheels1.png';
import Wheels2 from './images/Wheels2.png';
import Wheels3 from './images/Wheels3.png';
import Wheels4 from './images/Wheels4.png';

export default function DisabledTabs() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Paper square>
        <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
        >
          <Tab label={<img src={Wheels1} width="50%"/>} />
          <Tab label={<img src={Wheels2} width="50%"/>} />
          <Tab label={<img src={Wheels3} width="50%"/>} />
          <Tab label={<img src={Wheels4} width="50%"/>} />
        </Tabs>
      </Paper>
  );
}
