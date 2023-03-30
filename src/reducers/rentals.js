/* eslint-disable import/no-anonymous-default-export */
import { FETCH_RENTAL ,FETCH_BY_SEARCH,UPDATE,FETCH_ALL,DELETE,CREATE,LIKE} from "../constants/actionTypes";

export default (state = [] ,action) => {
    switch (action.type) {
        case FETCH_ALL:
            return{...state, rentals: action.payload.data,
                    currentPage:action.payload.currentPage,
                    numberOfPages:action.payload.numberOfPages,
            };
        case FETCH_BY_SEARCH:
           return {...state, rentals: action.payload.data,
            // currentPage:action.payload.currentPage,
            // numberOfPages:action.payload.numberOfPages,
            };

        case CREATE:
            return [...state , action.payload];
        case FETCH_RENTAL:
            return { ...state, rental: action.payload };
        case UPDATE:
            return { ...state,
        rentals: state.map((rental) =>
        rental.id === action.payload.id ? action.payload : rental
      ),
               }

        case LIKE:
            return state.map((rental) => (rental.id === action.payload.id ? action.payload : rental));

        case DELETE:
      return { ...state, rentals: state.rentals.filter((rental) => rental._id !== action.payload) };

        default:
            return state;
    }

}

