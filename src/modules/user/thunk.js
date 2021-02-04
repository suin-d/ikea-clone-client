import axios from 'axios';
import {
  SIGN_UP_ERROR,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  VERIFICATION_ERROR,
  VERIFICATION_REQUEST,
  VERIFICATION_SUCCESS,
} from '.';

export const signUp = (data) => async (dispatch) => {
  try {
    dispatch({
      type: SIGN_UP_REQUEST,
    });
    const response = await axios.post('http://localhost:8000/api/user', data);
    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: SIGN_UP_ERROR,
      payload: e.response.data,
    });
  }
};

export const verification = (data) => async (dispatch) => {
  try {
    dispatch({
      type: VERIFICATION_REQUEST,
    });
    const response = await axios.post(
      'http://localhost:8000/api/user/verif',
      data
    );
    dispatch({
      type: VERIFICATION_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: VERIFICATION_ERROR,
      payload: e.response.data,
    });
  }
};
