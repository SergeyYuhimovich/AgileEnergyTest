import { AsyncStorage, Alert } from 'react-native';
import axios from 'axios';
import { BASE_URL, API_KEY } from 'react-native-dotenv';

export const actionTypes = {
  AUTH_LOADING: 'AUTH_REQUEST',
  SET_AUTH_TOKEN_TO_STORE: 'SET_AUTH_TOKEN_TO_STORE',
  AUTH_ERROR: 'AUTH_ERROR',
};

export const authHandler = () => async dispatch => {
  try {
    dispatch ({ type: actionTypes.AUTH_LOADING });

    const authToken = await AsyncStorage.getItem('AUTH_TOKEN');

    if (authToken) {
      dispatch({ type: actionTypes.SET_AUTH_TOKEN_TO_STORE, payload: authToken })
    } else {
      dispatch(getAuthToken());
    }
  } catch(error) {
    dispatch({ type: actionTypes.AUTH_ERROR });
    console.log(error);

    authErrorAlert(authHandler);
  }
};

export const getAuthToken = () => async dispatch => {
  try {
    const response = await axios.post(`${BASE_URL}/auth`,
      JSON.stringify({ "apiKey": API_KEY }),
      { headers: { 'Content-Type': 'application/json' }}
    );

    await AsyncStorage.setItem('AUTH_TOKEN', response.data.token);

    dispatch({ type: actionTypes.SET_AUTH_TOKEN_TO_STORE, payload: response.data.token });
  } catch(error) {
    dispatch({ type: actionTypes.AUTH_ERROR });
    console.log(error);

    authErrorAlert(getAuthToken);
  }
};

export const authErrorHandler = error => dispatch => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx

    if (error.response.status === '401') {
      // Access denied, token is invalid, getting new token

      dispatch ({ type: actionTypes.AUTH_LOADING });
      dispatch(getAuthToken());
    }
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js

    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error

    console.log(error.message);
  }
  console.log(error.config);
};

const authErrorAlert = callback => async dispatch => {
  Alert.alert(
    'Authorization error',
    'Try again?',
    [
      {
        text: 'OK',
        onPress: () => dispatch(callback()),
      },
    ],
    { cancelable: false },
  );
};
