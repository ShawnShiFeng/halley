import {
  UPLOAD_PROGRESS,
  UPLOAD_SUCCESS,
  UPLOAD_FAILURE,
} from '../constants';

const initialState = {
  uploadProgress: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPLOAD_PROGRESS:
      return {
        ...state,
        uploadProgress: action.percent,
      };
    case UPLOAD_SUCCESS:
      return {
        ...state,
        uploadProgress: 0,
      };
    case UPLOAD_FAILURE:
      return {
        ...state,
        uploadProgress: 0,
      };
    default:
      return state;
  }
}