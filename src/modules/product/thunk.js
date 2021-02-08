import axios from 'axios';
import {
  SEARCH_REQUEST,
  SEARCH_ERROR,
  SEARCH_SUCCESS,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
} from '.';

export const search = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_REQUEST });
    const response = await axios.get(
      `http://localhost:8000/api/product/search?keyword=${keyword}`
    );
    dispatch({ type: SEARCH_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: SEARCH_ERROR, payload: e.response.data });
  }
};

export const getProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_REQUEST });
    const response = await axios.get(
      `http://localhost:8000/api/product/${productId}`
    );
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: GET_PRODUCT_ERROR, payload: e.response.data });
  }
};

const sample = 1;
export default sample;
