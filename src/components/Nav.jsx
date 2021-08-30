import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Avatar, Paper } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import bgimg from '../image/black-corousel.png';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && props.children ? 
      props.children 
      : (
        <Box p={3}>
          <Typography>Error Loading the Page</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
})
);

export default function Nav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{height:"60px", backgroundColor:"black"}}>
        <Tabs
          style={{ paddingTop:'10px'}}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="white"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="About" {...a11yProps(1)} />
          <Avatar style={{marginRight:'2%', marginLeft:'auto'}} alt="Him" src="/static/images/avatar/1.jpg" />
        </Tabs>
        
      
      </AppBar>
      <TabPanel value={value} index={0}>
        <div style={{
        color:"white", height:'549px',
        backgroundImage: `url(${bgimg})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "100% 100%" 
        }}>
        <div style={{padding:'8%'}}>
        <Typography variant="h2">
            I like Writing
        </Typography>
        <Typography variant="h2">
            Clean & Efficient Code
        </Typography>        
        
        </div>
        
        {/* svg of background image */}
        {/* <svg id="visual" viewBox="0 0 900 600" width="100%" height="600" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <rect x="0" y="0" width="900" height="600" fill="#000000"></rect>
        <path d="M0 396L21.5 404.5C43 413 86 430 128.8 438.3C171.7 446.7 214.3 446.3 257.2 446C300 445.7 343 445.3 385.8 439C428.7 432.7 471.3 420.3 514.2 410.8C557 401.3 600 394.7 642.8 393.5C685.7 392.3 728.3 396.7 771.2 411.7C814 426.7 857 452.3 878.5 465.2L900 478L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#0036ff" stroke-linecap="round" stroke-linejoin="miter">
        </path>
        </svg> */}
        </div>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <div style={{
        color:"white", height:'549px',
        backgroundImage: `url(${bgimg})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "100% 100%" 
        }}>
            <div style={{padding:'8%'}}>
            <Typography variant="h5">
            Hey There !
            <br />
            After about few months of procastination I decided to
            finally make this website. 
            <br />
            Since I'm running out of words to describe me, I'll describe my journey.
            I started full stack developing in mid 2021. Every day has been a learning <br />
            experience.
            <br />
            Technologies I'm comfortable with:
            <br />
            <br />
            <Paper elevation={3} style={{
            marginLeft:'2%',width:"9%",
            padding:'10px' ,display:'inline'}}>
                Python <CodeIcon style={{height:'20px'}} />
            </Paper>

            <Paper elevation={3} style={{
            marginLeft:'2%',width:"9%",
            padding:'10px' ,display:'inline'}}>
                JavaScript <CodeIcon style={{height:'20px'}} />
            </Paper>
            <Paper elevation={3} style={{
            marginLeft:'2%',width:"9%",
            padding:'10px' ,display:'inline'}}>
                Reactjs <CodeIcon style={{height:'20px'}} />
            </Paper>
            <Paper elevation={3} style={{
            marginLeft:'2%',width:"9%",
            padding:'10px' ,display:'inline'}}>
                Java <CodeIcon style={{height:'20px'}} />
            </Paper>

            <Paper elevation={3} style={{
            marginLeft:'2%',width:"9%",
            padding:'10px' ,display:'inline'}}>
                SpringBoot <CodeIcon style={{height:'20px'}} />
            </Paper>
            
            <Paper elevation={3} style={{
            marginLeft:'2%',width:"9%",
            padding:'10px' ,display:'inline'}}>
                Postgresql <CodeIcon style={{height:'20px'}} />
            </Paper>
            
            </Typography>
            </div>
        </div>
        </TabPanel>
    </div>
  );
}
