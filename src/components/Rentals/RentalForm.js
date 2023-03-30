import React ,{useState,useEffect}from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { Button, Paper } from '@material-ui/core';
import FileBase from  'react-file-base64';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import {createRental,updateRental } from '../../actions/rentals'
import { useSelector } from 'react-redux';
import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
form:{
  padding:40,
},
paper:{
padding:20
}

}));


const  RentalForm =( {currentId,setCurrentId})=> {
  const classes = useStyles();
  const rental = useSelector((state)=> currentId ? state.rentals.rentals.find((r) => r._id = currentId): null);


    const [rentalData, setRentalData] = useState({
      title:'' , description:'', address:'',zipcode:'',state:'',country:'',phone:''
      ,email:'',property:'',price:'', rentaltype:'', tags:'', selectedFile:'' });
    
    const dispatch = useDispatch(); 
const user = JSON.parse(localStorage.getItem('profile'));
    
    
    
    
    useEffect(()=>{
      if (rental) {
        setRentalData({rental})
      }
    },[rental])
    
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if(currentId){
  //     dispatch(createRental({...rentalData,name:user?.result?.name}));
    
   
  //   }else {
  //     dispatch(updateRental(currentId,{...rentalData,name:user?.result?.name}));
  //   }

  // }
    const handleSubmita = (e) => {
      e.preventDefault();
    
      dispatch(createRental({...rentalData,name:user?.result?.name}));
      alert("Your Property Is Added")

    
   

  }
    
    const clear = () => {
     
    }


  return (  
    <React.Fragment>
      <div >
        <Container maxWidth="md"  >
      <Paper className={classes.paper} gutterBottom>  
   <form autoComplete="off" noValidate onSubmit={handleSubmita} className={classes.form} >

      <Button variant="contained">
      <Link to={`/rentals`}> Back  </Link>
      
        </Button>
  
      <Typography variant="h6" gutterBottom>
        Add Your Property
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            required
            id="Title"
            name="Title"
            label="Title"
            fullWidth
            helperText="Please enter Property Title"
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
            required
            id="zipcode"
            name="zipcode"
            label="Zip Code "
            fullWidth
            autoComplete="ZipCode"
            value={rentalData.zipcode}
            onChange={(e)=> setRentalData({...rentalData, zipcode:e.target.value})}
          /> 
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="zipcode"
            name="zipcode"
            label="State"
            fullWidth
            autoComplete="State"
            value={rentalData.state}
            onChange={(e)=> setRentalData({...rentalData, state:e.target.value})}
          /> 
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="zipcode"
            name="zipcode"
            label="Country "
            fullWidth
            autoComplete="country"
            value={rentalData.country}
            onChange={(e)=> setRentalData({...rentalData, country:e.target.value})}
          /> 
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="zipcode"
            name="phone"
            label="phone "
            fullWidth
            autoComplete="phone"
            value={rentalData.phone}
            onChange={(e)=> setRentalData({...rentalData, phone:e.target.value})}
          /> 
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="zipcode"
            name="zipcode"
            label="Email "
            fullWidth
            autoComplete="Email"
            value={rentalData.email}
            onChange={(e)=> setRentalData({...rentalData, email:e.target.value})}
          /> 
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="zipcode"
            name="property"
            label="property "
            fullWidth
            autoComplete="property"
            helperText="example : Rent or Sale."

            value={rentalData.property}
            onChange={(e)=> setRentalData({...rentalData, property:e.target.value})}
          /> 
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="zipcode"
            name="price"
            label="Price "
            fullWidth
            autoComplete="price"
            value={rentalData.price}
            onChange={(e)=> setRentalData({...rentalData, price:e.target.value})}
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
          <Button  color="#fff" backgroundColor="#14274E" className={classes.buttonSubmit} type="submit" >Submit</Button>
          <Button  color="#fff" backgroundColor="#14274E"  onClick={clear}>Clear</Button>
        </Grid>
      </Grid>
      </form>
      </Paper>
      </Container>
      </div>
    </React.Fragment>
  );
}

export default RentalForm;
