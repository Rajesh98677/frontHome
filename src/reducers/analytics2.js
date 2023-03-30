/* eslint-disable import/no-anonymous-default-export */
// import { FETCH_ALL_USER } from "../constants/actionTypes";

export default (analytics2 = [] ,action) => {
    switch (action.type) {
        case 'FETCH_ALL_USER':
            return action.payload
        default:
            return analytics2
        
    }

}
 


