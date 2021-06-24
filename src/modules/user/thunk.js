import axios from 'axios';
import {
  DELETE_USER_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_WISH_ERROR,
  GET_WISH_REQUEST,
  GET_WISH_SUCCESS,
  LOAD_CART_ERROR,
  LOAD_CART_REQUEST,
  LOAD_CART_SUCCESS,
  GET_HISTORY_ERROR,
  GET_HISTORY_REQUEST,
  GET_HISTORY_SUCCESS,
  LOG_IN_ERROR,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_ERROR,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  PASSWORD_CHANGE_ERROR,
  PASSWORD_CHANGE_REQUEST,
  PASSWORD_CHANGE_SUCCESS,
  PASSWORD_SUBMIT_ERROR,
  PASSWORD_SUBMIT_REQUEST,
  PASSWORD_SUBMIT_SUCCESS,
  REMOVE_CART_ERROR,
  REMOVE_CART_REQUEST,
  REMOVE_CART_SUCCESS,
  UPDATE_CART_REQUEST,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_ERROR,
  SIGN_UP_ERROR,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  UPDATE_USER_ERROR,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  VERIFICATION_ERROR,
  VERIFICATION_REQUEST,
  VERIFICATION_SUCCESS,
  SUCCESS_PAYMENT_REQUEST,
  SUCCESS_PAYMENT_SUCCESS,
  SUCCESS_PAYMENT_ERROR,
} from '.';
import { delay } from '../product/thunk';

export const signUp = data => async dispatch => {
  try {
    dispatch({
      type: SIGN_UP_REQUEST,
    });
    const response = await axios.post('/api/user', data);
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

export const verification = data => async dispatch => {
  try {
    dispatch({
      type: VERIFICATION_REQUEST,
    });
    const response = await axios.post('/api/user/verif', data);
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

export const passwordChange = data => async dispatch => {
  try {
    dispatch({
      type: PASSWORD_CHANGE_REQUEST,
    });
    const response = await axios.get(`/api/user/find/${data}`);
    dispatch({
      type: PASSWORD_CHANGE_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: PASSWORD_CHANGE_ERROR,
      payload: e.response.data,
    });
  }
};

export const passwordSubmit = data => async dispatch => {
  try {
    dispatch({
      type: PASSWORD_SUBMIT_REQUEST,
    });
    const response = await axios.patch('/api/user/find/', data);
    dispatch({
      type: PASSWORD_SUBMIT_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: PASSWORD_SUBMIT_ERROR,
      payload: e.response.data,
    });
  }
};

export const login = data => async dispatch => {
  try {
    dispatch({
      type: LOG_IN_REQUEST,
    });
    const response = await axios.post('/api/user/login', data);
    dispatch({
      type: LOG_IN_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: LOG_IN_ERROR,
      payload: e.response.data,
    });
  }
};

export const logout = email => async dispatch => {
  try {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
    const response = await axios.get(`/api/user/logout/${email}`);
    dispatch({
      type: LOG_OUT_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: LOG_OUT_ERROR,
      payload: e.response.data,
    });
  }
};

export const deleteUser = email => async dispatch => {
  try {
    dispatch({
      type: DELETE_USER_REQUEST,
    });
    const response = await axios.delete(`/api/user/${email}`);
    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: DELETE_USER_ERROR,
      payload: e.response.data,
    });
  }
};

export const getWishList = email => async dispatch => {
  try {
    dispatch({ type: GET_WISH_REQUEST });
    await delay(700);
    const response = await axios.get(`api/userproduct/wish/${email}`);
    dispatch({
      type: GET_WISH_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: GET_WISH_ERROR,
      payload: e.response.data,
    });
  }
};
export const updateUser = data => async dispatch => {
  try {
    dispatch({
      type: UPDATE_USER_REQUEST,
    });
    const response = await axios.patch('/api/user', { data });
    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_USER_ERROR,
      payload: e.response.data,
    });
  }
};

export const getCart = email => async dispatch => {
  try {
    dispatch({ type: LOAD_CART_REQUEST });
    await delay(700);
    const response = await axios.get(`/api/userproduct/cart/${email}`);
    dispatch({
      type: LOAD_CART_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: LOAD_CART_ERROR,
      payload: e.response.data,
    });
  }
};
export const getHistory = email => async dispatch => {
  try {
    dispatch({
      type: GET_HISTORY_REQUEST,
    });
    const response = await axios.get(`/api/userproduct/history/${email}`);
    dispatch({
      type: GET_HISTORY_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_HISTORY_ERROR,
      payload: e.response.data,
    });
  }
};
export const removeCart = data => async dispatch => {
  try {
    dispatch({ type: REMOVE_CART_REQUEST });
    const response = await axios.delete(
      `/api/userproduct/cart?email=${data.email}&productid=${data.productId}`
    );
    dispatch({ type: REMOVE_CART_SUCCESS, payload: response.data });
  } catch (e) {
    console.error(e);
    dispatch({ type: REMOVE_CART_ERROR, payload: e.response.data });
  }
};

export const changeCart = data => async dispatch => {
  try {
    dispatch({ type: UPDATE_CART_REQUEST });
    const response = await axios.patch('api/userproduct/cart', data);
    dispatch({ type: UPDATE_CART_SUCCESS, payload: response.data });
  } catch (e) {
    console.error(e);
    dispatch({ type: UPDATE_CART_ERROR, payload: e.response.data });
  }
};
export const successPayment = data => async dispatch => {
  try {
    dispatch({ type: SUCCESS_PAYMENT_REQUEST });
    const response = await axios.post('/api/userproduct/payment/paypal', data);
    dispatch({ type: SUCCESS_PAYMENT_SUCCESS, payload: response.data });
  } catch (e) {
    console.error(e);
    dispatch({ type: SUCCESS_PAYMENT_ERROR, payload: e.response.data });
  }
};
