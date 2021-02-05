export const SEARCH_REQUEST = 'product/SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'product/SEARCH_SUCCESS';
export const SEARCH_ERROR = 'product/SEARCH_ERROR';
const initialState = {
  searchLoading: false,
  searchData: null,
  searchError: null,
};

export default function product(state = initialState, action) {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        searchLoading: true,
        searchData: null,
        searchError: null,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        searchLoading: false,
        searchData: action.payload,
        searchError: null,
      };
    case SEARCH_ERROR:
      return {
        ...state,
        searchLoading: false,
        searchData: null,
        searchError: action.payload,
      };
    default:
      return state;
  }
}
