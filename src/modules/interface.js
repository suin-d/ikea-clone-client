import {
  LOG_IN_ERROR,
  LOG_IN_SUCCESS,
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

export const addAlert = (message) => ({
  type: ADD_ALERT,
  payload: message,
});

const initialState = {
  alertMsg: null,
};
export default function interfaces(state = initialState, action) {
  switch (action.type) {
    case ADD_ALERT:
      return {
        ...state,
        alertMsg: action.payload,
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
    case ALERT_RESET:
      return {
        ...state,
        alertMsg: null,
      };
    default:
      return state;
  }
}
