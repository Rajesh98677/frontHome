import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarRateIcon from '@material-ui/icons/StarRate';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding:65,
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
 
});

export default function Testimonial() {
  const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

  return (
          <Paper className={classes.papa}>
      <Container >

      <Typography component="h1" variant="h4" align="center" color="textPrimary"  className={classes.typo} gutterBottom>
              Our Customers -- Testimonials
            </Typography>
    <Grid container className={classes.root} spacing={2}>
    <Grid item xs={12} md={4}>
      <Grid container justifyContent="center" >
<Card elevation={4}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
           John Wick 
        </Typography>
        <Typography>
        <StarRateIcon color="primary"/>
            <StarRateIcon color="primary"/>
            <StarRateIcon color="primary"/>
            <StarRateIcon color="primary"/>
             <StarRateIcon/>
        </Typography>
      
        <Typography variant="body2" component="p">
        Wow! I am really amazed. Refer n Earn
         is awesome, I really earn by just 
         clicking pictures of To-Let boards.
          Even many of my friends are also e
          arning by this. The processing of leads 
          is very fast and me and my friends are very 
          happy. This is a great concept.

        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
    </CardActions> */}
    </Card>
    </Grid>
    </Grid>
    <Grid item xs={12} md={4}>
      <Grid container justifyContent="center" >
    <Card elevation={4} >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Tom Holland 
        </Typography>
        <Typography>
            <StarRateIcon color="primary"/>
            <StarRateIcon color="primary"/>
            <StarRateIcon color="primary"/>
            <StarRateIcon color="primary"/>
            <StarRateIcon color="primary"/>
            
        </Typography>
      
        
        <Typography variant="body2" component="p">
        I really liked the quick response I got from Nexthome
         team in listing my property. The website was very user friendly
         . All the callers were genuine tenants. I am happy as i was 
         able to rent out my property faster.
          I would love to recommend your company to anyone 

        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
    </CardActions> */}
    </Card>
    </Grid>
    </Grid>
    <Grid item xs={12} md={4}>
      <Grid container justifyContent="center" >
    <Card elevation={4}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Selmon Bhai 
        </Typography>
        <Typography>
        <StarRateIcon color="primary"/>
            <StarRateIcon color="primary"/>
            <StarRateIcon color="primary"/>
            <StarRateIcon color="primary"/>
             <StarRateIcon/>
        </Typography>
      
        
        <Typography variant="body2" component="p">
        It was a nice experience with NextHome. 
        They helped me to find a new home to stay 
        as it was difficult for me,as an individual,
        to find a home with friendly roommates.Thankfully
         Nexthome helped me to get one with all
          kind of facilities.

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
  );
}
