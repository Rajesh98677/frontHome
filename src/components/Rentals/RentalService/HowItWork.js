import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ListAltIcon from '@material-ui/icons/ListAlt';
import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { Container } from '@material-ui/core';
import BookIcon from '@material-ui/icons/Book';
import KitchenIcon from '@material-ui/icons/Kitchen';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import StarRateIcon from '@material-ui/icons/StarRate';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    padding:70,
    textAlign:'center'
  },
  title: {
    fontSize: 14,
  },
  heo: {
    textAlign: 'center',
  },
  papa:{
      paddingTop:1,
  }
  ,typo:{
    paddingTop:20
  },
  // card: {
  //   maxWidth: 345,
  //   // top: '50%',
  //   // left: '50%',
  //   borderRadius: 10,
    // position: 'absolute',
  //   // transform: 'translate(-50%, -50%)',
  //   backgroundSize: '200%',
  //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  //   transition: '0.6s',
  //   backgroundImage: 'linear-gradient(45deg, #14274E, #fff, #fff)',
  //   '&:hover': {
  //     backgroundPosition: 'right',
  //     color:'#fff'

  //   }
  // },
  hoveruse:{
    fontSize:250,
    color:'pink'
  },
 
}));

export default function HowItWork() {
    const classes = useStyles();
    return (    
      <Paper className={classes.papa}>
      <Container >

      <Typography component="h1" variant="h4" align="center" color="textPrimary"  className={classes.typo} gutterBottom>
              How It Works
            </Typography>
            
    <Grid container className={classes.root} spacing={0} >
    <Grid item xs={12} md={4}>
      <Grid container justifyContent="center" >
<Card elevation={4} className={classes.card} >
      <CardContent>
        <Typography>
        <BookIcon style={{fontSize:80,color:'#14274E'}} className='hoveruse'/>
        </Typography>
        <Typography variant="body2" component="p">
        Book Your Service
        </Typography>
        <Typography variant="body2" component="p">
        Tell us preferred time to book
        </Typography>
      </CardContent>
 
    </Card>
    </Grid>
    </Grid>
    <Grid item xs={12} md={4}>
      <Grid container justifyContent="center" >
    <Card elevation={4} className={classes.card}>
      <CardContent>
      
        <Typography>
        <LibraryBooksIcon style={{fontSize:80,color:'#14274E'}} className='hoveruse'/>     
        </Typography>
        <Typography variant="body2" component="p">
        Get Free Instant Quotes
        </Typography>
        <Typography variant="body2" component="p">
        Get guaranteed lowest price 
        </Typography>
      </CardContent>

    </Card>
    </Grid>
    </Grid>
    
    <Grid item xs={12} md={4}>
      <Grid container justifyContent="center" >
    <Card elevation={4} className={classes.card}>
      <CardContent> 
        <Typography>
        <StarRateIcon style={{fontSize:90,color:'#14274E'}} className='hoveruse'/>
        </Typography>
        <Typography variant="body2" component="p">
        Hassle-free Service
        </Typography>
        <Typography variant="body2" component="p">
        Our Partner arrives at yr doorstep
        </Typography>
      </CardContent>
    
    </Card>
    </Grid>
    </Grid>
   
    </Grid>
    </Container>
    </Paper>
        
    )
}
