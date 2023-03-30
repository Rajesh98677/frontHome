import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
// import BlockIcon from '@material-ui/icons/Block';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ListAltIcon from '@material-ui/icons/ListAlt';
import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import StarRateIcon from '@material-ui/icons/StarRate';


const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 1300,
    minWidth: 275,
    padding:70,
    textAlign:'center'
  },
  title: {
    fontSize: 14,
  },
  heo: {
    // marginBottom: 5,
    textAlign: 'center',
  },
  papa:{
      paddingTop:1,
  }
  ,typo:{
    paddingTop:20
  }
}));

export default function WhyUse() {
    const classes = useStyles();
    return (    
      <Paper className={classes.papa}>
      <Container >

      <Typography component="h1" variant="h4" align="center" color="textPrimary"  className={classes.typo} gutterBottom>
              Why Use Nexthome?
            </Typography>
    <Grid container className={classes.root} spacing={2}           variant="scrollable"
>
    <Grid item xs={12} md={3}>
      <Grid container justifyContent="center" >
<Card elevation={4}>
      <CardContent>
      
        <Typography>
        <HomeIcon style={{fontSize:80,color:'#14274E'}} className='hoveruse'/>
        </Typography>
      
        <Typography variant="body2" component="p">
        AvoidBrokers We directly connect you to verified owners to save brokerage
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
    </CardActions> */}
    </Card>
    </Grid>
    </Grid>
    <Grid item xs={12} md={3}>
      <Grid container justifyContent="center" >
    <Card elevation={4} >
      <CardContent>
      
        <Typography>
        <LibraryBooksIcon style={{fontSize:80,color:'#14274E'}} className='hoveruse'/>
          
        </Typography>
      
        
        <Typography variant="body2" component="p">
        AvoidBrokers We directly connect you to verified owners to save brokerage
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
    </CardActions> */}
    </Card>
    </Grid>
    </Grid>
    <Grid item xs={12} md={3}>
      <Grid container justifyContent="center" >
    <Card elevation={4}>
      <CardContent>
       
        <Typography>
        <PersonIcon style={{fontSize:80,color:'#14274E'}} className='hoveruse'/>
        
        </Typography>
      
        
        <Typography variant="body2" component="p">
        AvoidBrokers We directly connect you to verified owners to save brokerage
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
    </CardActions> */}
    </Card>
    </Grid>
    </Grid>
   
    <Grid item xs={12} md={3}>
      <Grid container justifyContent="center" >
    <Card elevation={4}>
      <CardContent>
        
        <Typography>
        <ListAltIcon style={{fontSize:80,color:'#14274E'}} className='hoveruse'/>

        </Typography>
      
        
        <Typography variant="body2" component="p">
        AvoidBrokers We directly connect you to verified owners to save brokerage
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
    </CardActions> */}
    </Card>
    </Grid>
    </Grid>
   
    </Grid>
    </Container>
    </Paper>
     
    )
}
