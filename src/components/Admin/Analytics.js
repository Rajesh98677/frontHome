import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import {alllRentals} from '../../actions/analytics'
import {Users} from '../../actions/analytics2'
// import {Users} from '../../actions/analytics'
import {getRentals} from '../../actions/rentals'
// import {  Grid } from '@material-ui/core';
// import AllRentals from './AllRentals';
import { Divider } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
  

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 'auto',
  },
  table: {
    minWidth: 650,
  },

}));
  

export default function Analytics() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const analytics = useSelector((state) => state.analytics);
  const analytics2 = useSelector((state)=> state.analytics2)
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  console.log(analytics)
  const dispatch = useDispatch();

useEffect(()=>{dispatch(Users())},[dispatch])

useEffect(()=>{
  dispatch(alllRentals())
},[dispatch])


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
<Paper style={{ textAlign: "center" }}>
    <div className={classes.root} style={{ paddingTop:-10 }} gutterBottom>
  <h1>Admin Dashboard</h1>

      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Admin detail" {...a11yProps(0)} />
          <Tab label="Users Detail" {...a11yProps(1)} />
          <Tab label="All Property" {...a11yProps(2)} />
          <Tab label="Contact " {...a11yProps(3)} />
          <Tab label="Service" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <p>Email: {user.result.email}</p>
        <Divider orientation="vertical" flexItem />
<hr/>
          <p>Total Number of user : 1 </p>
          <p>Total Number of property : 4 </p>
          <h5>Work in progress</h5>
          </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {/* <this is user  retrive section  */}

          <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <caption>All USER   </caption>
        <TableHead>
          <TableRow>
            <TableCell>Sr.no</TableCell>
            <TableCell>UserId</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {analytics2?.map((user) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {}
              </TableCell>
              <TableCell component="th" scope="row">
                {user._id}
              </TableCell>
              <TableCell align="left">{user.name}</TableCell>
              <TableCell align="left">{user.email}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

          {/* thsi is end of this section */}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
{/* Rental section */}
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <caption>All  Property Details List </caption>
        <TableHead>
          <TableRow>
            <TableCell>Property Name</TableCell>
            <TableCell xs={false} align="left">Description</TableCell>
            <TableCell xs={false} align="left">Address</TableCell>
            <TableCell xs={false} align="left">Rental Type</TableCell>
            <TableCell xs={false} align="left">Tags</TableCell>
            {/* <TableCell align="left">Images</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {analytics?.map((rent) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {rent.title}
              </TableCell>
              <TableCell xs={false} align="left">{rent.description}</TableCell>
              <TableCell xs={false} align="left">{rent.address}</TableCell>
              <TableCell xs={false} align="left">{rent.rentaltype}</TableCell>
              <TableCell xs={false} align="left">{rent.tags.map((tag) => `#${tag} `)}</TableCell>
              {/* <TableCell align="left">{rent.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <h1>Hello Contact </h1>
</TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <h1>Hello Service </h1>
</TabPanel>
       
      </SwipeableViews>
    </div>
    </Paper>
  );
}
