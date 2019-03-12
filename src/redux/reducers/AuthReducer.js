import { actionTypes } from '@actions/AuthActions';

const INITIAL_STATE = {
  authToken: null,
  authTokenLoading: false,
  authTokenError: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOADING:
      return { ...state, authTokenLoading: true };

    case actionTypes.SET_AUTH_TOKEN_TO_STORE:
      return { ...state, authTokenLoading: false, authToken: action.payload };

    case actionTypes.AUTH_ERROR:
      return { ...state, authTokenLoading: false };

    default:
      return state;
  }
};
