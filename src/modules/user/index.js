export const SIGN_UP_REQUEST = 'user/SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'user/SIGN_UP_ERROR';
export const VERIFICATION_REQUEST = 'user/VERIFICATION_REQUEST';
export const VERIFICATION_SUCCESS = 'user/VERIFICATION_SUCCESS';
export const VERIFICATION_ERROR = 'user/VERIFICATION_ERROR';

const initialState = {
  signUpLoading: false,
  signUpData: null,
  signUpError: null,
  verificationLoading: false,
  verificationData: null,
  verificationError: null,
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
    default:
      return state;
  }
}
