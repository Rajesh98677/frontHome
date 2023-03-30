import React,{useEffect} from 'react';
import {Pagination, PaginationItem } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {getRentals} from '../actions/rentals'
import {useSelector,useDispatch} from 'react-redux'

const useStyles = makeStyles((theme) => ({
    ul: {
        justifyContent:'space-around',
    }
}));


const Paginate = ({page})=>{
    const {numberOfPages} = useSelector((state)=>state.rentals)
    const classes = useStyles();
    const dispatch = useDispatch();

useEffect((page)=>{
    if(page) dispatch(getRentals(page));
},[page]);
    return (
        <Pagination 
        classes={{ul:classes.ul}}
        count={numberOfPages}
        page={Number(page)|| 1}
        variant="outlined"
        color="primary"
        renderItem = {(item)=>(
            <PaginationItem {...item} component={Link} to={`/rentals?page=${item.page}`}/>
        )}

        />
    )


}

export default Paginate;


