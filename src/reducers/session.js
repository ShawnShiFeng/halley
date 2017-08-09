// import { LOCATION_CHANGE } from 'react-router-redux';
// import { tracking } from '../utils';
// import {
  // DIRECT_MESSAGE_OPENED,
  // DIRECT_MESSAGE_CLOSED,
  // FETCH_GREETING_SUCCESS,
  // LOGIN,
  // LOGOUT,
  // SERVER_ERROR,
  // SESSION_REFRESH_ERROR,
  // SIDEROUTE_OPENED,
  // SIDEROUTE_CLOSED,
  // SOCKET_CLOSED,
  // SOCKET_OPENED,
  // TOPIC_OPENED,
  // TOPIC_CLOSED,
  // WINDOW_BLURRED,
  // WINDOW_FOCUSED,
// } from '../constants';

const initialState = {
  phoneNumber: '',
  authenticated: false,
  authenticating: false,
  // serverError: false,
  // userId: null,
  // socket: null,
  // socketInitialized should only be changed from false -> true the first
  // time the socket connects successfully
  // socketInitialized: false,
  // rootPath: '/',
  // greeting: undefined,
  // windowFocused: true,
  // location: '',
  // locationBeforeTransition: '',
  // locationBeforeSideroute: '',
  // locationSideroute: '',
  // siderouteOpen: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'AUTHENTICATING': {
      return {
        ...state,
        authenticating: true,
        phoneNumber: action.phoneNumber,
      }
    }
    // case LOGIN: {
    //   const user = action.response.entities.users[action.response.result];
    //   if (window && window.Raven) {
    //     window.Raven.setUserContext(user);
    //   }
    //   window.ga('set', 'userId', user.id);
    //   tracking.user(user);
    //   return {
    //     ...state,
    //     authenticated: true,
    //     authenticating: false,
    //     userId: action.response.result,
    //   };
    // }
    // case LOGOUT:
    //   if (window && window.Raven) {
    //     window.Raven.setUserContext();
    //   }
    //   return {
    //     ...initialState,
    //     authenticating: false,
    //   };
    // case SESSION_REFRESH_ERROR:
    //   return {
    //     ...state,
    //     authenticating: false,
    //   };
    // case SOCKET_OPENED:
    //   return {
    //     ...state,
    //     socket: action.socket,
    //     socketInitialized: true,
    //   };
    // case SOCKET_CLOSED:
    //   return {
    //     ...state,
    //     socket: null,
    //   };
    // case TOPIC_OPENED:
    //   return {
    //     ...state,
    //     rootPath: `${action.path}/`,
    //     locationSideroute: '',
    //   };
    // case TOPIC_CLOSED:
    //   return {
    //     ...state,
    //     rootPath: '/',
    //   };
    // case DIRECT_MESSAGE_OPENED:
    //   return {
    //     ...state,
    //     rootPath: `${action.path}/`,
    //   };
    // case DIRECT_MESSAGE_CLOSED:
    //   return {
    //     ...state,
    //     rootPath: '/',
    //   };
    // case FETCH_GREETING_SUCCESS:
    //   return {
    //     ...state,
    //     greeting: action.text,
    //   };
    // case SERVER_ERROR:
    //   return {
    //     ...state,
    //     serverError: true,
    //     authenticating: false,
    //   };
    // case WINDOW_BLURRED:
    //   return {
    //     ...state,
    //     windowFocused: false,
    //   };
    // case WINDOW_FOCUSED:
    //   return {
    //     ...state,
    //     windowFocused: true,
    //   };
    // case LOCATION_CHANGE:
    //   return {
    //     ...state,
    //     location: action.payload,
    //     locationBeforeTransition: state.location,
    //     locationSideroute: state.siderouteOpen ? action.payload : state.locationSideroute,
    //   };
    // case SIDEROUTE_OPENED:
    //   return {
    //     ...state,
    //     siderouteOpen: true,
    //     locationBeforeSideroute: state.locationBeforeTransition || action.location,
    //     locationSideroute: action.location,
    //   };
    // case SIDEROUTE_CLOSED:
    //   return {
    //     ...state,
    //     siderouteOpen: false,
    //     locationBeforeSideroute: '',
    //     locationSideroute: state.siderouteOpen ? state.locationBeforeTransition : '',
    //   };
    default:
      return state;
  }
}
