import axios from 'axios';
import { BASE_URL } from 'react-native-dotenv';
import { authErrorHandler } from '@actions/AuthActions';

export const actionTypes = {
  GET_IMAGES_LIST_REQUEST: 'GET_IMAGES_LIST_REQUEST',
  GET_IMAGES_LIST_SUCCESS: 'GET_IMAGES_LIST_SUCCESS',
  GET_IMAGES_LIST_ERROR: 'GET_IMAGES_LIST_ERROR',

  GET_IMAGE_DETAILS_REQUEST: 'GET_IMAGE_DETAILS_REQUEST',
  GET_IMAGE_DETAILS_SUCCESS: 'GET_IMAGE_DETAILS_SUCCESS',
  GET_IMAGE_DETAILS_ERROR: 'GET_IMAGE_DETAILS_ERROR'
};

export const getImagesList = () => async (dispatch, getState) => {
  try {
    dispatch ({ type: actionTypes.GET_IMAGES_LIST_REQUEST });

    const token = getState().auth.authToken;
    let page = await getState().gallery.imagesListPage;

    const response = await axios.get(`${BASE_URL}/images?page=${++page}`,
      { headers: {"Authorization": `Bearer ${token}`} }
    );

    dispatch({ type: actionTypes.GET_IMAGES_LIST_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_IMAGES_LIST_ERROR });
    console.log(error);
    dispatch(authErrorHandler(error));
  }
};

export const getImageDetails = id => async (dispatch, getState) => {
  try {
    dispatch ({ type: actionTypes.GET_IMAGE_DETAILS_REQUEST });

    const token = getState().auth.authToken;

    const response = await axios.get(`${BASE_URL}/images/${id}`,
      { headers: {"Authorization": `Bearer ${token}`} }
    );

    await dispatch({ type: actionTypes.GET_IMAGE_DETAILS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_IMAGE_DETAILS_ERROR });
    console.log(error);
    dispatch(authErrorHandler(error));
  }
};
