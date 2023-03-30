/* eslint-disable import/no-anonymous-default-export */

// import {FETCH_ALL_RENTAL} from '../constants/actionTypes'

export default (analytics = [] ,action) => {
    switch (action.type) {
        case 'FETCH_ALL_RENTAL':
            return  action.payload
        default:
            return analytics
        
    }

}


