import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import GalleryReducer from './GalleryReducer';

export default combineReducers({
  auth: AuthReducer,
  gallery: GalleryReducer
});
