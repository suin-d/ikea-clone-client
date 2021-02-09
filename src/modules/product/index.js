export const SEARCH_REQUEST = 'product/SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'product/SEARCH_SUCCESS';
export const SEARCH_ERROR = 'product/SEARCH_ERROR';
export const GET_LIST_REQUEST = 'product/GET_LIST_REQUEST';
export const GET_LIST_SUCCESS = 'product/GET_LIST_SUCCESS';
export const GET_LIST_ERROR = 'product/GET_LIST_ERROR';
export const GET_PRODUCT_REQUEST = 'product/GET_PRODUCT_REQUEST';
export const GET_PRODUCT_SUCCESS = 'product/GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_ERROR = 'product/GET_PRODUCT_ERROR';

const initialState = {
  searchLoading: false,
  searchData: null,
  searchError: null,
  getListLoading: false,
  getListData: null,
  getListError: null,
  getProductLoading: false,
  getProductData: null,
  getProductError: null,
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
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        getProductLoading: true,
        getProductData: null,
        getPRoductError: null,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        getProductLoading: false,
        getProductData: action.payload,
        getPRoductError: null,
      };
    case GET_PRODUCT_ERROR:
      return {
        ...state,
        getProductLoading: false,
        getProductData: null,
        getPRoductError: action.payload,
      };
    default:
      return state;
  }
}
