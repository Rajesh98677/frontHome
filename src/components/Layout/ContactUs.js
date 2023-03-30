import React ,{useState,useEffect} from 'react'
import { Grid, TextField, Button, Card, CardContent, Typography, Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from 'react-redux';
import {contact} from '../../actions/contact'

const useStyles = makeStyles(theme => ({

  contactf:{
    // marginTop:100,
    // marginBottom:100,
    margin:50,
  }
  
    }));
  
export default function ContactUs() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [info,setInfo] = useState({
    name:'',email:'',message:'',
  });

 
const handleSubmit = (e)=>{
  e.preventDefault();
  dispatch(contact({...info}))
  alert("Thank you For Contacting us")

}

    return (
      <Paper>
        <div className={classes.contactf}> 
       
        <Grid>
          <Card style={{ maxWidth: 400, padding: "20px 5px", margin: "0 auto" }} className={classes.controot} gutterBottom elevation={6}>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Contact Us
            </Typography> 
              <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                Fill up the form and our team will get back to you within 24 hours.
            </Typography> 
              <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                  
                  <Grid item xs={12}>
                    <TextField 
                     type="name"
                     label="Name" 
                     placeholder="Enter name" 
                     variant="outlined" 
                     fullWidth 
                     required 
                     value={info.name}
                     onChange={(e)=> setInfo({...info, name:e.target.value})}
                     />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField 
                    type="email" 
                    label="Email" 
                    placeholder="Enter email" 
                    variant="outlined" 
                    fullWidth 
                    required 
                    value={info.email}
                     onChange={(e)=> setInfo({...info, email:e.target.value})}
                     />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField 
                    label="Message" 
                    multiline rows={4} 
                    placeholder="Type your message here" 
                    variant="outlined" 
                    fullWidth 
                    required 
                    value={info.message}
                    onChange={(e)=> setInfo({...info, message: e.target.value})}
                     />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                  </Grid>
  
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </div>
      </Paper>
    )
}
