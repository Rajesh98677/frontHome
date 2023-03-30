import * as actionType from '../constants/actionTypes';

const AdminAuthReducer = (state = { adminauthData: null }, action) => {
  switch (action.type) {
    case actionType.ADMIN_AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, adminauthData: action.data, loading: false, errors: null };
    case actionType.ADMIN_LOGOUT:
      localStorage.clear();

      return { ...state, adminauthData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default AdminAuthReducer;