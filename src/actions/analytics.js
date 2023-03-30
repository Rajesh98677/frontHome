import * as api from '../api/index.js';

export const alllRentals = () => async(dispatch)=> {
    try {
        const { data } = await api.allRentals();

        dispatch ({type: 'FETCH_ALL_RENTAL', payload: data });

    } catch (error) {
        console.log(error.message);

    }
    
};
