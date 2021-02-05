import axios from 'axios';
import { SEARCH_REQUEST, SEARCH_ERROR, SEARCH_SUCCESS } from '.';

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
const sample = 1;
export default sample;
