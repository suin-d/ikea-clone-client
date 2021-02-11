import {
  ADD_CART_ERROR,
  ADD_CART_SUCCESS,
  ADD_WISH_SUCCESS,
  REMOVE_WISH_SUCCESS,
} from './product';
import {
  DELETE_USER_ERROR,
  DELETE_USER_SUCCESS,
  LOG_IN_ERROR,
  LOG_IN_SUCCESS,
  LOG_OUT_SUCCESS,
  PASSWORD_CHANGE_ERROR,
  PASSWORD_CHANGE_SUCCESS,
  PASSWORD_SUBMIT_ERROR,
  PASSWORD_SUBMIT_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_SUCCESS,
  VERIFICATION_ERROR,
  VERIFICATION_SUCCESS,
} from './user';

export const ADD_ALERT = 'interface/ADD_ALERT';
export const ALERT_RESET = 'interface/ALERT_RESET';
export const NAV_CLOSE = 'interface/NAV_CLOSE';
export const NAV_OPEN = 'interface/NAV_OPEN';
export const NAV_MOVE = 'interface/NAV_MOVE';

export const addAlert = (message) => ({
  type: ADD_ALERT,
  payload: message,
});

const initialState = {
  alertMsg: null,
  navigation: {
    open: false,
    navState: 0,
  },
};
export default function interfaces(state = initialState, action) {
  switch (action.type) {
    case ADD_ALERT:
      return {
        ...state,
        alertMsg: action.payload,
      };
    case NAV_CLOSE:
      return {
        ...state,
        navigation: {
          open: false,
          visible: true,
          navState: 0,
        },
      };
    case NAV_OPEN:
      return { ...state, navigation: { ...state.navigation, open: true } };
    case NAV_MOVE:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          open: true,
          navState: action.payload,
        },
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        alertMsg: '가입하신 이메일로 인증코드가 발송되었습니다.',
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        alertMsg: action.payload,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        alertMsg: `${action.payload.name}님 어서오세요`,
      };
    case LOG_IN_ERROR:
      return {
        ...state,
        alertMsg: action.payload,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        alertMsg: action.payload,
      };
    case VERIFICATION_SUCCESS:
      return {
        ...state,
        alertMsg: action.payload,
      };
    case VERIFICATION_ERROR:
      return {
        ...state,
        alertMsg: action.payload,
      };
    case PASSWORD_CHANGE_SUCCESS:
      return {
        ...state,
        alertMsg: action.payload,
      };
    case PASSWORD_CHANGE_ERROR:
      return {
        ...state,
        alertMsg: action.payload,
      };
    case PASSWORD_SUBMIT_SUCCESS:
      return {
        ...state,
        alertMsg: action.payload,
      };
    case PASSWORD_SUBMIT_ERROR:
      return {
        ...state,
        alertMsg: action.payload,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        alertMsg: action.payload,
      };
    case DELETE_USER_ERROR:
      return {
        ...state,
        alertMsg: action.payload,
      };
    case ADD_WISH_SUCCESS:
      return {
        ...state,
        alertMsg: '위시리스트에 추가되었습니다.',
      };
    case ADD_CART_ERROR:
      return { ...state, alertMsg: action.payload };
    case REMOVE_WISH_SUCCESS:
      return {
        ...state,
        alertMsg: '위시리스트에 삭제되었습니다.',
      };
    case ADD_CART_SUCCESS:
      return {
        ...state,
        alertMsg: '장바구니에 추가되었습니다.',
      };
    case ALERT_RESET:
      return {
        ...state,
        alertMsg: null,
      };
    default:
      return state;
  }
}
