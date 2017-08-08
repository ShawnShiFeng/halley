import without from 'lodash/without';
import {
  DM_MESSAGE_CREATED,
  DIRECT_MESSAGE_CREATED,
  DIRECT_MESSAGE_ARCHIVED,
  DIRECT_MESSAGE_OPENED,
  DIRECT_MESSAGE_CLOSED,
  DIRECT_MESSAGE_SNOOZED,
  DIRECT_MESSAGES_FILTERED,
  FETCH_DIRECT_MESSAGES_SUCCESS,
  FETCH_HIDDEN_DM_SUCCESS,
  OPEN_DM_REQUEST,
  OPEN_DM_FAILURE,
  TOGGLE_UNREAD_DMS,
} from '../constants';

const initialState = {
  directMessages: {},
  directMessageIds: [],
  unreadIds: [],
  currentDMId: null,
  lastDMId: null,
  allDMsLoaded: false,
  filteredIds: [],
  filterQuery: '',
  unreadVisible: false,
  dmNotFound: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DIRECT_MESSAGES_SUCCESS:
      return {
        ...state,
        allDMsLoaded: true,
        directMessageIds: action.directMessageIds,
        unreadIds: action.unreadIds,
        directMessages: {
          ...state.directMessages,
          ...action.response.entities.directMessages,
        },
      };
    case FETCH_HIDDEN_DM_SUCCESS:
      return {
        ...state,
        directMessageIds: [...new Set([action.response.result, ...state.directMessageIds])],
        unreadIds: [action.response.result, ...state.unreadIds],
        directMessages: {
          ...state.directMessages,
          ...action.response.entities.directMessages,
        },
      };
    case DIRECT_MESSAGE_OPENED:
      return {
        ...state,
        unreadIds: without(state.unreadIds, action.response.result),
        currentDMId: action.response.result,
        directMessages: {
          ...state.directMessages,
          ...action.response.entities.directMessages,
        },
      };
    case DIRECT_MESSAGE_CLOSED: {
      let directMessage = state.directMessages[action.directMessageId];
      if (!directMessage) {
        return state;
      }
      directMessage = {
        ...directMessage,
        last_read_message_id: directMessage.last_message_id,
      };
      return {
        ...state,
        currentDMId: null,
        lastDMId: state.currentDMId,
        directMessages: {
          ...state.directMessages,
          [action.directMessageId]: directMessage,
        },
      };
    }
    case DM_MESSAGE_CREATED: {
      if (state.unreadIds.includes(action.conversationId) ||
          state.currentDMId === action.conversationId) {
        return {
          ...state,
          // DM should be moved to top of list when new message is received
          directMessageIds: [...new Set([action.conversationId, ...state.directMessageIds])],
        };
      }
      return {
        ...state,
        unreadIds: [action.conversationId, ...state.unreadIds],
        directMessageIds: [...new Set([action.conversationId, ...state.directMessageIds])],
      };
    }
    case DIRECT_MESSAGE_ARCHIVED:
      return {
        ...state,
        directMessageIds: without(state.directMessageIds, action.directMessageId),
        unreadIds: without(state.unreadIds, action.directMessageId),
      };
    case DIRECT_MESSAGE_SNOOZED:
      return {
        ...state,
        directMessages: {
          ...state.directMessages,
          ...action.response.entities.directMessages,
        },
      };
    case DIRECT_MESSAGE_CREATED:
      return {
        ...state,
        directMessageIds: [...new Set([action.response.result, ...state.directMessageIds])],
        directMessages: {
          ...state.directMessages,
          ...action.response.entities.directMessages,
        },
      };
    case DIRECT_MESSAGES_FILTERED:
      return {
        ...state,
        filterQuery: action.query,
        filteredIds: action.directMessageIds,
        unreadVisible: false,
      };
    case TOGGLE_UNREAD_DMS:
      return {
        ...state,
        unreadVisible: !state.unreadVisible,
      };
    case OPEN_DM_REQUEST:
      return {
        ...state,
        dmNotFound: false,
      };
    case OPEN_DM_FAILURE:
      return {
        ...state,
        dmNotFound: true,
      };
    default:
      return state;
  }
}