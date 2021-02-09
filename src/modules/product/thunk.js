import axios from 'axios';
import {
  SEARCH_REQUEST,
  SEARCH_ERROR,
  SEARCH_SUCCESS,
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_LIST_ERROR,
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

export const getList = (cateId) => async (dispatch) => {
  try {
    dispatch({ type: GET_LIST_REQUEST });
    const response = await axios.get(
      `http://localhost:8000/api/product/list/${cateId}`
    );
    dispatch({ type: GET_LIST_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: GET_LIST_ERROR, payload: e.response.data });
  }
};

export default getList;
