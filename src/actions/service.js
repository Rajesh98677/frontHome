import * as api from '../api/index.js';

export const service =(ser) => async(dispatch)=>{
   try {
       const {data1} = await api.service(ser);
       dispatch ({type: 'SERVICE', payload: data1});
   } catch (error) {
    console.log(error.message);
   } 
}



