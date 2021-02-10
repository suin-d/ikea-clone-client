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
export const GET_PRODUCT_REQUEST = 'product/GET_PRODUCT_REQUEST';
export const GET_PRODUCT_SUCCESS = 'product/GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_ERROR = 'product/GET_PRODUCT_ERROR';
export const GET_HF_REQUEST = 'product/GET_HF_REQUEST';
export const GET_HF_SUCCESS = 'product/GET_HF_SUCCESS';
export const GET_HF_ERROR = 'product/GET_HF_ERROR';
export const LOAD_MORE_HF_REQUEST = 'product/LOAD_MORE_HF_REQUEST';
export const LOAD_MORE_HF_SUCCESS = 'product/LOAD_MORE_HF_SUCCESS';
export const LOAD_MORE_HF_ERROR = 'product/LOAD_MORE_HF_ERROR';

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
  getProductLoading: false,
  getProductData: null,
  getProductError: null,
  getHfLoading: false,
  getHfData: null,
  getHfError: null,

  hasMore: true,
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
        hasMore: true,
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
    case GET_HF_REQUEST:
      return {
        ...state,
        getHfLoading: true,
        getHfData: null,
        getHfError: null,
      };
    case GET_HF_SUCCESS:
      return {
        ...state,
        getHfLoading: false,
        getHfData: action.payload,
        getHfError: null,
        hasMore: action.payload.length === 12,
      };
    case GET_HF_ERROR:
      return {
        ...state,
        getHfLoading: false,
        getHfData: null,
        getHfError: action.payload,
      };
    case LOAD_MORE_HF_REQUEST:
      return {
        ...state,
        getHfLoading: true,
        getHfError: null,
      };
    case LOAD_MORE_HF_SUCCESS:
      return {
        ...state,
        getHfLoading: false,
        getHfData: state.getHfData.concat(action.payload),
        getHfError: null,
        hasMore: action.payload.length === 12,
      };
    case LOAD_MORE_HF_ERROR:
      return {
        ...state,
        getHfLoading: false,
        getHfData: null,
        getHfError: action.payload,
      };
    default:
      return state;
  }
}
