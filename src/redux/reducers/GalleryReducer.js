import { actionTypes } from '@actions/GalleryActions';

const INITIAL_STATE = {
  imagesList: [],
  imagesListLoading: false,
  imagesListPage: 0,
  imagesListHasMore: true,

  activeImage: null,
  activeImageLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_IMAGES_LIST_REQUEST:
      return { ...state, imagesListLoading: true };

    case actionTypes.GET_IMAGES_LIST_SUCCESS:
      const { pictures, page, hasMore } = action.payload;

      return {
        ...state,
        imagesList: [ ...state.imagesList, ...pictures ],
        imagesListLoading: false,
        imagesListPage: page,
        imagesListHasMore: hasMore
      };

    case actionTypes.GET_IMAGE_DETAILS_REQUEST:
      return { ...state, activeImageLoading: true };

    case actionTypes.GET_IMAGE_DETAILS_SUCCESS:
      return { ...state, activeImageLoading: false, activeImage: action.payload };

    default:
      return state;
  }
};
