
import * as api from '../api/index.js';
// import axios from 'axios';
import { FETCH_RENTAL ,FETCH_BY_SEARCH,UPDATE,FETCH_ALL,DELETE,CREATE,LIKE} from "../constants/actionTypes";


export const getRentals = (page) => async(dispatch)=> {
    try {
        const { data:{ data } } = await api.fetchRentals(page);
        console.log(data)   
        dispatch ({type: FETCH_ALL, payload:{ data }});

    } catch (error) {
        console.log(error.message);

    }
    
};

export const getRentalsBySearch = (searchQuery) => async(dispatch) => {
  try {
    const { data :{ data }}  = await api.fetchRentalsBySearch(searchQuery);
        console.log(data)   
        dispatch ({type: FETCH_BY_SEARCH, payload: {data}});
  } catch (error) {
    console.log(error)
  }
};



export const createRental = (rental,history) => async (dispatch) => {
    try {
      const { data } = await api.createRental(rental);
  
      dispatch({ type: CREATE, payload: data });
      history.push(`/rentals/${rental._id}`)
    } catch (error) {
      console.log(error.message);
    }
  };
  

export const updateRental = (id,rental) => async (dispatch) => {
      try {
      const {data} =   await api.updateRental(id,rental);
        console.log(data)
      dispatch({ type: 'UPDATE', payload: data });
      console.log(data);

      } catch (error) {
        console.log(error.message);

      }


};

export const likePost = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  try {
    const { data } = await api.likePost(id, user?.token);

    dispatch({ type: 'LIKE', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getrental = (id) => async (dispatch) => {
  try {

    const { data } = await api.fetchrental(id);

    dispatch({ type: 'FETCH_RENTAL', payload:data  });
    console.log(data)
  } catch (error) {
    console.log(error);
  }
};


export const deleteRental = (id) => async (dispatch) => {
  try {
    await await api.deleteRental(id);

    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log(error);
  }
};
