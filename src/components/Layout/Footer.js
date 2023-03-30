import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import { Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Divider,Button } from '@material-ui/core';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';




const useStyles = makeStyles((theme) => ({
    papa: {
        backgroundColor: '#14274E',
        padding: theme.spacing(6),
        color:'#fff',
        flexGrow: 1,
        
       
      },

  
    }));
  

function Copyright() {
    return (
      <Typography variant="body2" color="#fff" align="center">
        {'Copyright © '}
        <Link color="inherit" to="/">
          NextHome
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }



export default function Footer() {
    const classes = useStyles();
    return (
      <Paper className={classes.papa}>
        <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
        <Typography variant="h6"  gutterBottom>
          NextHome.com
        </Typography>
        <Typography variant="p"  gutterBottom>
          Made With React - Node - Express - Mongodb <br/>
        </Typography>
        <Typography variant="p"  gutterBottom>
          Made By VIKAS MOURYA &nbsp;&nbsp; <GitHubIcon onClick="https://github.com/thisisvikasmourya"/> &nbsp;&nbsp;&nbsp;
          <InstagramIcon onClick="https://instagram.com/thsisvikasmourya" />
        </Typography>
        </Grid>
        <Divider />
        <Grid item xs={12} md={4} >
        <Typography variant="h6" color="#fff" >
          About Us -- Our Website 
        </Typography>
        <Typography variant="subtitle1" color="#fff" component="p">
       <Button to='/Property'  color="inherit"  size='small' style={{ textTransform: 'none' }} component={Link}> Property</Button>
       <Button to='/ContactUs'  color="inherit"  size='small'style={{ textTransform: 'none' }} component={Link}> Contact Us</Button>
        </Typography>
        <Typography variant="subtitle1" color="#fff" >
        <Button to='/service'  color="inherit"  size='small' style={{ textTransform: 'none' }} component={Link}>Service</Button>
        </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
        <Typography variant="subtitle1" color="#fff" component="p">
          Everything You Need. All Right Here!.
        </Typography>
        <Typography variant="subtitle1" color="#fff" component="p">
          Buy New Property!. Sell your Property!. Rent Your Property!.
        </Typography>
        </Grid>
        </Grid>
        <hr style={{color:'red'}}/>
        <Grid item xs={12} md={12}>
          <Typography>
            <Copyright/>
          </Typography>
        </Grid>
        <hr style={{color:'red'}}/>
        </Container>
      
      </Paper>














        
    )
}

  