import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {Box, Button} from '@mui/material';
import { TextField } from '@mui/material';
import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Plus from '@mui/icons-material/PlusOne';
import Delete from '@mui/icons-material/Delete';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ onSchoolsChange, onExperienceChange }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [schools, setSchools] = useState([{ schoolname: '', degreeName: '', cgpa: '' }]);
  const [experience, setExperience] = useState([{ companyname: '', designation: '' }]);

  const handleAddSchool = () => {
    setSchools([...schools, { schoolname: '', degreeName: '', cgpa: '' }]);
  };

  const handleAddExperience = () => {
    setExperience([...experience, { companyname: '', designation: ''  }]);
  };

  const handleSchoolChange = (index, field, value) => {
    const updatedSchools = [...schools];
    updatedSchools[index][field] = value;
    setSchools(updatedSchools);
    onSchoolsChange(updatedSchools);
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = value;
    setSchools(updatedExperience);
    onExperienceChange(updatedExperience);
  };

  const handleRemoveSchool = () => {
    if (schools.length > 1) {
        setSchools(schools.slice(0, -1));
        onSchoolsChange(schools);
      }
  }
  const handleRemoveExperience = () => {
    if (experience.length > 1) {
        setExperience(schools.slice(0, -1));
        onExperienceChange(experience);
      }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Academics" {...a11yProps(0)} /> 
          <Tab label="Professional Experience" {...a11yProps(1)} />
          <Tab label="Additional Information" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      Academics
      {schools.map((school, index) => (
          <div>
            <TextField
              required
              id={`schoolname-${index}`}
              label="School Name"
              placeholder='School Name'
              value={school.schoolname}
              onChange={(event) => handleSchoolChange(index, 'schoolname', event.target.value)}
            />

            <TextField
              required
              id={`degreeName-${index}`}
              label="Degree"
              placeholder='Degree'
              value={school.degreeName}
              onChange={(event) => handleSchoolChange(index, 'degreeName', event.target.value)}
            />

            <TextField
              required
              id={`cgpa-${index}`}
              label="CGPA"
              placeholder='CGPA'
              value={school.cgpa}
              onChange={(event) => handleSchoolChange(index, 'cgpa', event.target.value)}
            />
          </div>
        
      ))}
    <IconButton aria-label="plus" size="small" onClick={handleAddSchool}><Plus /></IconButton>
    <IconButton aria-label="delete" size="small" onClick={handleRemoveSchool} color="primary"><Delete /></IconButton>
      
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      Professional Experience

      Academics
      {experience.map((experience, index) => (
          <div>
            <TextField
              required
              id={`companyname-${index}`}
              label="Company Name"
              placeholder='Company Name'
              value={experience.companyname}
              onChange={(event) => handleExperienceChange(index, 'companyname', event.target.value)}
            />

            <TextField
              required
              id={`designation-${index}`}
              label="Designation"
              placeholder='Designation'
              value={experience.designation}
              onChange={(event) => handleExperienceChange(index, 'designation', event.target.value)}
            />
          </div>
        
      ))}
      <IconButton aria-label="plus" size="small" onClick={handleAddExperience}><Plus /></IconButton>
      <IconButton aria-label="delete" size="small" onClick={handleRemoveExperience} color="primary"><Delete /></IconButton>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      Additional Information
      </CustomTabPanel>
    </Box>
  );
}

