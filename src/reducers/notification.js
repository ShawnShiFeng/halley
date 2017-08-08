import {
  NOTIFICATION_ADDED,
  NOTIFICATION_REMOVED,
} from '../constants';

export default function (state = [], action) {
  const newState = state.slice();

  switch (action.type) {
    case NOTIFICATION_ADDED:
      newState.push(action.notification);
      return newState;
    case NOTIFICATION_REMOVED:
      return state.filter(n => n.key !== action.key);
    default:
      return state;
  }
}
