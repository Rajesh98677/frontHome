import React ,{useEffect,useState}from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {CircularProgress, Container, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Rentalpost from './Rentalpost';
import decode from "jwt-decode";
import { Avatar } from "@material-ui/core";
import {useDispatch} from 'react-redux'

const useStyles = makeStyles((theme) => ({
title:{
    textAlign:'center',
},
manage:{
    height:'auto',
    
},
avatar: {
  height:'15%',
  width:'15%',
  textAlign:'center',
  border:'5px solid black'
}


}));


export default function RentalManage(currentId,rental,setCurrentId) {

    // const rentals = useSelector((state) => state.rentals);

    const classes = useStyles();
    const {rentals} = useSelector((state) => state.rentals);
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    // const user = JSON.parse(localStorage.getItem('profile'));
    // const dispatch = useDispatch();
    
    const userId = user?.result.googleId || user?.result?._id;
    
  
    useEffect(() => {
      const token = user?.token;
  
      if(token){
    const decodedToken = decode(token);
  
    if(decodedToken.exp * 1000 < new Date().getTime());
  }
  
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, []);
  
    
    
    // useEffect(() => {
    //     dispatch(getRentals());
    //   }, [ dispatch]);
    




    return (
      <div>
        <div className={classes.manage}>
        <div className={classes.title}>
          <center>
            <h3>Profile Details</h3>
  
      {/* <h5>{user.result.name.charAt(0)}</h5> */}
      <Avatar className={classes.avatar} alt={user?.result.name} src={user?.result.imageUrl || 'https://mpng.subpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg'}>{user?.result.name.charAt(0)}</Avatar>
           <h4>Name : {user.result.name}</h4>
           <h4>Email : {user.result.email}</h4>
           </center>
        </div>
        </div>
<h3>Your Property </h3>

{( user?.result?.googleId ===rental?.creator || user?.result?._id === rental.creator) && (
        <Grid container spacing={4} className={classes.card} >
        {rentals?.map((rental) => (
          <Grid key={rental._id}   item  md={4} xs={12} sm={12} lg={4} >
            <Rentalpost rental={rental} setCurrentId = {setCurrentId} />
            </Grid>
          
        ))};
      </Grid>  
          
         
        )}
       

        </div>
    )
}
