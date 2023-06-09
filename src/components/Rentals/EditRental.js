import React ,{useState,useEffect}from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { Button, Paper } from '@material-ui/core';
import FileBase from  'react-file-base64';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import {updateRental } from '../../actions/rentals'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
form:{
  padding:40,
},
paper:{
padding:20
}

}));


const  EditRental =()=> {
  const classes = useStyles();
  const { id } = useParams();

    const rental = useSelector((state)=> state.rentals);


    const [rentalData, setRentalData] = useState({
      title:'' , 
      description:'', 
      address:'', 
      rentaltype:'', 
      tags:'', 
      selectedFile:'' });
    
    const dispatch = useDispatch(); 

  

useEffect(()=>{
  if (rental) {
    setRentalData({...rental})
  }
},[rental])


    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(updateRental(rental,id))

    }

  return (
    <React.Fragment>
      
        <Container maxWidth="sm">
      <Paper className={classes.paper}>  
   <form autoComplete="off" noValidate onSubmit={handleSubmit} className={classes.form} >

      <Typography variant="h6" gutterBottom>
        Create Rental
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            required
            id="Title"
            name="Title"
            label="Title"
            fullWidth
            autoComplete="given-name"
            value={rentalData.title}
            onChange={(e)=> setRentalData({...rentalData, title:e.target.value})}
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="Description"
            name="description"
            label="Description"
            fullWidth
            autoComplete="family-name"
            value={rentalData.description}
            onChange={(e)=> setRentalData({...rentalData, description:e.target.value})}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address "
            fullWidth
            autoComplete="address"
            value={rentalData.address}
            onChange={(e)=> setRentalData({...rentalData, address:e.target.value})}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="rentaltype"
            label="rental type"
            fullWidth
            autoComplete="Rental type"
            value={rentalData.rentaltype}
            onChange={(e)=> setRentalData({...rentalData, rentaltype:e.target.value})}
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="tags"
            name="tags"
            label="Tags"
            fullWidth
            autoComplete="Tags"
            value={rentalData.tags}
            onChange={(e)=> setRentalData({...rentalData, tags:e.target.value})}
          />
        </Grid>
        <Grid item xs={12} >
          <div className={classes.fileInput}>
        <FileBase
        type="file"
        multiple ={false}
        onDone ={({base64}) => setRentalData({ ...rentalData,selectedFile:base64})}
        
        />
        </div>
          </Grid>
        <Grid item xs={12} gutterBottom>
          <Button  color="#fff" backgroundColor="#14274E" className={classes.buttonSubmit} type="submit" onClick={handleSubmit} >Update</Button>
        </Grid>
      </Grid>
      </form>
      </Paper>
      </Container>
      
    </React.Fragment>
  );
}

export default EditRental;
