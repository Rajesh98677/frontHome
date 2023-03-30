import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import moment from 'moment';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { ButtonBase } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
// import React,{useEffect} from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import {useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux';
// import {alllRentals} from '../../actions/analytics'
// import { makeStyles, } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },


  }));

  
  
const  AllRentals= ({ rental,setCurrentId}) => {
    const classes = useStyles();
    const history = useHistory();
// const openRental =()=> history.push(`/rentals/${rental._id}`)
    
    
    return (
        <React.Fragment>
            <CssBaseline />

            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Property Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Rental Type</TableCell>
            <TableCell align="right">Tags</TableCell>
            {/* <TableCell align="right">Images</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
    
            <TableRow>
              <TableCell component="th" scope="row">
                {rental.title}
              </TableCell>
              <TableCell align="right">{rental.description}</TableCell>
              <TableCell align="right">{rental.address}</TableCell>
              <TableCell align="right">{rental.rentaltype}</TableCell>
              <TableCell align="right">{rental.tags.map((tag) => `#${tag} `)}</TableCell>
              {/* <TableCell align="right">{rent.protein}</TableCell> */}
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
            



        </React.Fragment>
    )
}

export default AllRentals;
