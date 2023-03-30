import React,{useEffect,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import RentalForm from './RentalForm';
import { useDispatch } from 'react-redux';
import { getRentals } from '../../actions/rentals';

const useStyles = makeStyles((theme) => ({
title:{
    textAlign:'center',
}

}))

// {currentId,setCurrentId }

export default function RentalF(currentId) {

    const dispatch = useDispatch();

    // const classes = useStyles();

    useEffect(() => {
        dispatch(getRentals());
      }, [ dispatch]);
    


    return (
       <RentalForm  currentId={currentId} />
    )
}

// currentId ={currentId} setCurrentId={setCurrentId}