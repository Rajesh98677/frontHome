import * as api from '../api/index.js';

export const contact  =  (cot) => async (dispatch) => {
    try {
        const{ data1} = await api.contact(cot);
        dispatch({type: 'CONTACT' , payload: data1})
        // history.push(`/contact/${cot._id}`)
    } catch (error) {
        console.log(error.message);

    }
}

