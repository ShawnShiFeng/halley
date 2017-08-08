import {
  BANNER_OPENED,
  BANNER_CLOSED,
} from '../constants';

export default function (state = {}, action) {
  switch (action.type) {
    case BANNER_OPENED:
      return {
        ...state,
        [action.banner]: {
          open: true,
          options: action.options,
        },
      };
    case BANNER_CLOSED:
      return {
        ...state,
        [action.banner]: {
          open: false,
        },
      };
    default:
      return state;
  }
}
