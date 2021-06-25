import axios from 'axios';
import {
  SEARCH_REQUEST,
  SEARCH_ERROR,
  SEARCH_SUCCESS,
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_LIST_ERROR,
  ADD_WISH_REQUEST,
  ADD_WISH_SUCCESS,
  ADD_WISH_ERROR,
  REMOVE_WISH_REQUEST,
  REMOVE_WISH_SUCCESS,
  REMOVE_WISH_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  ADD_CART_ERROR,
  LOAD_MORE_LIST_REQUEST,
  LOAD_MORE_LIST_SUCCESS,
  LOAD_MORE_LIST_ERROR,
  GET_HF_REQUEST,
  GET_HF_SUCCESS,
  GET_HF_ERROR,
  LOAD_MORE_HF_REQUEST,
  LOAD_MORE_HF_SUCCESS,
  LOAD_MORE_HF_ERROR,
  ADD_REVIEW_REQUEST,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_ERROR,
  GET_REVIEWS_REQUEST,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_ERROR,
} from '.';

export const delay = ms =>
  new Promise((resolve, reject) => {
    try {
      setTimeout(() => resolve(), ms);
    } catch (e) {
      reject(e);
    }
  });

export const search = keyword => async dispatch => {
  try {
    dispatch({ type: SEARCH_REQUEST });
    const response = await axios.get(`/api/product/search?keyword=${keyword}`);
    dispatch({ type: SEARCH_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: SEARCH_ERROR, payload: e.response.data });
  }
};

export const getList = data => async dispatch => {
  try {
    dispatch({ type: GET_LIST_REQUEST });
    await delay(1000);
    const response = await axios.get(
      `/api/product/list/${data.cateId}?offset=0&filter=${data.filter}`
    );
    dispatch({ type: GET_LIST_SUCCESS, payload: response.data });
  } catch (e) {
    console.error(e);
    dispatch({ type: GET_LIST_ERROR, payload: e.response.data });
  }
};

export const loadMoreList = data => async dispatch => {
  try {
    dispatch({ type: LOAD_MORE_LIST_REQUEST });
    const response = await axios.get(
      `/api/product/list/${data.cateId}?offset=${data.offset}&filter=${data.filter}`
    );
    dispatch({ type: LOAD_MORE_LIST_SUCCESS, payload: response.data });
  } catch (e) {
    console.error(e);
    dispatch({ type: LOAD_MORE_LIST_ERROR, payload: e.response.data });
  }
};

export const addWish = data => async dispatch => {
  try {
    dispatch({ type: ADD_WISH_REQUEST });
    const response = await axios.post('/api/userproduct/wish', data);
    dispatch({ type: ADD_WISH_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: ADD_WISH_ERROR, payload: e.response.data });
  }
};

export const removeWish = data => async dispatch => {
  try {
    dispatch({ type: REMOVE_WISH_REQUEST });
    const response = await axios.delete(
      `/api/userproduct/wish?email=${data.userEmail}&productid=${data.productId}`
    );
    dispatch({ type: REMOVE_WISH_SUCCESS, payload: response.data });
  } catch (e) {
    console.error(e);
    dispatch({ type: REMOVE_WISH_ERROR, payload: e.response.data });
  }
};

export const addCart = data => async dispatch => {
  try {
    dispatch({ type: ADD_CART_REQUEST });
    const response = await axios.post('/api/userproduct/cart', data);
    dispatch({ type: ADD_CART_SUCCESS, payload: response.data });
  } catch (e) {
    console.error(e);
    dispatch({ type: ADD_CART_ERROR, payload: e.response.data });
  }
};

export const getProduct = productId => async dispatch => {
  try {
    dispatch({ type: GET_PRODUCT_REQUEST });
    await delay(1000);
    const response = await axios.get(`/api/product/${productId}`);
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: GET_PRODUCT_ERROR, payload: e.response.data });
  }
};

export const getHf = cateId => async dispatch => {
  try {
    dispatch({ type: GET_HF_REQUEST });
    const response = await axios.get(`/api/product/homefurnishing/${cateId}`);
    dispatch({ type: GET_HF_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: GET_HF_ERROR, payload: e.response.data });
  }
};
export const loadMoreHf = data => async dispatch => {
  try {
    dispatch({ type: LOAD_MORE_HF_REQUEST });
    const response = await axios.get(
      `/api/product/homefurnishing/${data.cateId}?offset=${data.offset}`
    );
    dispatch({ type: LOAD_MORE_HF_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: LOAD_MORE_HF_ERROR, payload: e.response.data });
  }
};
export const addReview = data => async dispatch => {
  try {
    dispatch({ type: ADD_REVIEW_REQUEST });
    const response = await axios.post('/api/product/review', data);
    dispatch({ type: ADD_REVIEW_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: ADD_REVIEW_ERROR, payload: e.response.data });
  }
};
export const getReviews = productId => async dispatch => {
  try {
    dispatch({ type: GET_REVIEWS_REQUEST });
    const response = await axios.get(`/api/product/review/${productId}`);
    dispatch({ type: GET_REVIEWS_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: GET_REVIEWS_ERROR, payload: e.response.data });
  }
};
