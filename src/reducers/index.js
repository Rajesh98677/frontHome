import { combineReducers } from "redux";

import rentals from './rentals'
import auth from './auth';
import analytics from "./analytics";
import analytics2 from "./analytics2";
import admin from './admin_auth'

export default combineReducers({ rentals,auth,analytics,analytics2,admin });



