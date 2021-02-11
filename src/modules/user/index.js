import { ADD_WISH_SUCCESS, REMOVE_WISH_SUCCESS } from '../product';

export const SIGN_UP_REQUEST = 'user/SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'user/SIGN_UP_ERROR';
export const LOG_IN_REQUEST = 'user/LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'user/LOG_IN_SUCCESS';
export const LOG_IN_ERROR = 'user/LOG_IN_ERROR';
export const LOG_OUT_REQUEST = 'user/LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'user/LOG_OUT_SUCCESS';
export const LOG_OUT_ERROR = 'user/LOG_OUT_ERROR';
export const VERIFICATION_REQUEST = 'user/VERIFICATION_REQUEST';
export const VERIFICATION_SUCCESS = 'user/VERIFICATION_SUCCESS';
export const VERIFICATION_ERROR = 'user/VERIFICATION_ERROR';
export const PASSWORD_CHANGE_REQUEST = 'user/PASSWORD_CHANGE_REQUEST';
export const PASSWORD_CHANGE_SUCCESS = 'user/PASSWORD_CHANGE_SUCCESS';
export const PASSWORD_CHANGE_ERROR = 'user/PASSWORD_CHANGE_ERROR';
export const PASSWORD_SUBMIT_REQUEST = 'user/PASSWORD_SUBMIT_REQUEST';
export const PASSWORD_SUBMIT_SUCCESS = 'user/PASSWORD_SUBMIT_SUCCESS';
export const PASSWORD_SUBMIT_ERROR = 'user/PASSWORD_SUBMIT_ERROR';
export const DELETE_USER_REQUEST = 'user/DELETE_USER_REQUEST';
export const DELETE_USER_SUCCESS = 'user/DELETE_USER_SUCCESS';
export const DELETE_USER_ERROR = 'user/DELETE_USER_ERROR';
export const GET_WISH_REQUEST = 'user/GET_WISH_REQUEST';
export const GET_WISH_SUCCESS = 'user/GET_WISH_SUCCESS';
export const GET_WISH_ERROR = 'user/GET_WISH_ERROR';

const initialState = {
  signUpLoading: false,
  signUpData: null,
  signUpError: null,
  logInLoading: false,
  logInData: null,
  logInError: null,
  logOutLoading: false,
  logOutData: null,
  logOutError: null,
  verificationLoading: false,
  verificationData: null,
  verificationError: null,
  passwordChangeLoading: false,
  passwordChangeData: null,
  passwordChangeError: null,
  passwordSubmitLoading: false,
  passwordSubmitData: null,
  passwordSubmitError: null,
  deleteUserLoading: false,
  deleteUserData: null,
  deleteUserError: null,
  getWishLoading: false,
  getWishData: null,
  getWishError: null,

  userInfo: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        signUpLoading: true,
        signUpData: null,
        signUpError: null,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        signUpData: action.payload,
        signUpError: null,
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        signUpLoading: false,
        signUpData: null,
        signUpError: action.payload,
      };
    case LOG_IN_REQUEST:
      return {
        ...state,
        logInLoading: true,
        logInData: null,
        logInError: null,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        logInLoading: false,
        logInData: action.payload,
        logInError: null,
        userInfo: action.payload,
      };
    case LOG_IN_ERROR:
      return {
        ...state,
        logInLoading: false,
        logInData: null,
        logInError: action.payload,
      };
    case LOG_OUT_REQUEST:
      return {
        ...state,
        logOutLoading: true,
        logOutData: null,
        logOutError: null,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        logOutLoading: false,
        logOutData: action.payload,
        logOutError: null,
        userInfo: null,
      };
    case LOG_OUT_ERROR:
      return {
        ...state,
        logOutLoading: false,
        logOutData: null,
        logOutError: action.payload,
      };
    case VERIFICATION_REQUEST:
      return {
        ...state,
        verificationLoading: true,
        verificationData: null,
        verificationError: null,
      };
    case VERIFICATION_SUCCESS:
      return {
        ...state,
        verificationLoading: false,
        verificationData: action.payload,
        verificationError: null,
      };
    case VERIFICATION_ERROR:
      return {
        ...state,
        verificationLoading: false,
        verificationData: null,
        verificationError: action.payload,
      };
    case PASSWORD_CHANGE_REQUEST:
      return {
        ...state,
        passwordChangeLoading: true,
        passwordChangeData: null,
        passwordChangeError: null,
      };
    case PASSWORD_CHANGE_SUCCESS:
      return {
        ...state,
        passwordChangeLoading: false,
        passwordChangeData: action.payload,
        passwordChangeError: null,
      };
    case PASSWORD_CHANGE_ERROR:
      return {
        ...state,
        passwordChangeLoading: false,
        passwordChangeData: null,
        passwordChangeError: action.payload,
      };
    case PASSWORD_SUBMIT_REQUEST:
      return {
        ...state,
        passwordSubmitLoading: true,
        passwordSubmitData: null,
        passwordSubmitError: null,
      };
    case PASSWORD_SUBMIT_SUCCESS:
      return {
        ...state,
        passwordSubmitLoading: false,
        passwordSubmitData: action.payload,
        passwordSubmitError: null,
      };
    case PASSWORD_SUBMIT_ERROR:
      return {
        ...state,
        passwordSubmitLoading: false,
        passwordSubmitData: null,
        passwordSubmitError: action.payload,
      };
    case DELETE_USER_REQUEST:
      return {
        ...state,
        deleteUserLoading: true,
        deleteUserData: null,
        deleteUserError: null,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        deleteUserLoading: false,
        deleteUserData: action.payload,
        deleteUserError: null,
        userInfo: null,
      };
    case DELETE_USER_ERROR:
      return {
        ...state,
        deleteUserLoading: false,
        deleteUserData: null,
        deleteUserError: action.payload,
      };
    case ADD_WISH_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          wishItem: state.userInfo.wishItem.concat({
            id: action.payload.productId,
          }),
        },
      };
    case REMOVE_WISH_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          wishItem: state.userInfo.wishItem.filter(
            (v) => v.id !== action.payload.productId
          ),
        },
        getWishData:
          state.getWishData.wishItem &&
          state.getWishData.wishItem.filter(
            (v) => v.id !== action.payload.productId
          ),
      };
    case GET_WISH_REQUEST:
      return {
        ...state,
        getWishLoading: true,
        getWishData: null,
        getWishError: null,
      };
    case GET_WISH_SUCCESS:
      return {
        ...state,
        getWishLoading: false,
        getWishData: action.payload,
        getWishError: null,
        // userInfo: null,
      };
    case GET_WISH_ERROR:
      return {
        ...state,
        getWishLoading: false,
        getWishData: null,
        getWishError: action.payload,
      };
    default:
      return state;
  }
}
