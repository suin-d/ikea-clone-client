export const SEARCH_REQUEST = 'product/SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'product/SEARCH_SUCCESS';
export const SEARCH_ERROR = 'product/SEARCH_ERROR';
export const GET_LIST_REQUEST = 'product/GET_LIST_REQUEST';
export const GET_LIST_SUCCESS = 'product/GET_LIST_SUCCESS';
export const GET_LIST_ERROR = 'product/GET_LIST_ERROR';
export const ADD_WISH_REQUEST = 'product/ADD_WISH_REQUEST';
export const ADD_WISH_SUCCESS = 'product/ADD_WISH_SUCCESS';
export const ADD_WISH_ERROR = 'product/ADD_WISH_ERROR';
export const REMOVE_WISH_REQUEST = 'product/REMOVE_WISH_REQUEST';
export const REMOVE_WISH_SUCCESS = 'product/REMOVE_WISH_SUCCESS';
export const REMOVE_WISH_ERROR = 'product/REMOVE_WISH_ERROR';

const initialState = {
  searchLoading: false,
  searchData: null,
  searchError: null,
  getListLoading: false,
  getListData: null,
  getListError: null,
  wishLoading: false,
  wishData: null,
  wishError: null,
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
    case GET_LIST_REQUEST:
      return {
        ...state,
        getListLoading: true,
        getListData: null,
        getListError: null,
      };
    case GET_LIST_SUCCESS:
      return {
        ...state,
        getListLoading: false,
        getListData: action.payload,
        getListError: null,
      };
    case GET_LIST_ERROR:
      return {
        ...state,
        getListLoading: false,
        getListData: null,
        getListError: action.payload,
      };
    case REMOVE_WISH_REQUEST:
    case ADD_WISH_REQUEST:
      return {
        ...state,
        wishLoading: true,
        wishData: null,
        wishError: null,
      };
    case REMOVE_WISH_SUCCESS:
    case ADD_WISH_SUCCESS:
      return {
        ...state,
        wishLoading: false,
        wishData: action.payload,
        wishError: null,
      };
    case REMOVE_WISH_ERROR:
    case ADD_WISH_ERROR:
      return {
        ...state,
        wishLoading: false,
        wishData: null,
        wishError: action.payload,
      };
    default:
      return state;
  }
}
