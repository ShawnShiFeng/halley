import {
  MODAL_OPENED,
  MODAL_CLOSED,
} from '../constants';

export default function (state = {}, action) {
  switch (action.type) {
    case MODAL_OPENED:
      return {
        // Commenting ...state should close all open modals.
        // This might happen on opening modals with keyboard shortcuts.
        // But in case we have to support scenario with multiple modals,
        // we have to find other way to dismiss all modals.

        // Updated comment ^, we need to support multiple modals when on
        // Invite > App people manually, so ...state needs to be maintained
        ...state,
        [action.modal]: {
          open: true,
          options: action.options,
        },
      };
    case MODAL_CLOSED:
      return {
        ...state,
        [action.modal]: {
          open: false,
        },
      };
    default:
      return state;
  }
}
