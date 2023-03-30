import { ADMIN_AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const adminSignIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.adminSignIn(formData);

    dispatch({ type: ADMIN_AUTH, data });

        history.push('/analytics');
  } catch (error) {
    console.log(error);
  }
};

export const adminSignUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.adminSignUp(formData);

    dispatch({ type: ADMIN_AUTH, data });

    history.push('/analytics');
  } catch (error) {
    console.log(error);
  }
};

