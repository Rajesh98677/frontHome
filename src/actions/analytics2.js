import * as api from '../api/index.js';

export const Users = () => async(dispatch) =>{
    try {
        const {data} = await api.allUsers();
        console.log(data)

        dispatch({type:'FETCH_ALL_USER', payload:data})
    } catch (error) {
        console.log(error.message)
    }
}


