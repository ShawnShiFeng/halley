import {
  SEARCH_CONVERSATIONS_CHANGE,
  SEARCH_CONVERSATIONS_SELECT_CHANGE,
  SEARCH_GROUP_MESSAGES_CHANGE,
  SEARCH_GROUP_MESSAGES_REQUEST,
  SEARCH_GROUP_MESSAGES_SUCCESS,
  SEARCH_GROUP_MESSAGES_FAILURE,
  SEARCH_GROUP_MESSAGES_RESET,
} from '../constants';

const initialState = {
  messages: [],
  messagesLoading: false,
  messageSearchQuery: '',
  conversationSearchQuery: '',
  conversationSelectedIndex: 0,
  conversationSelectedId: 0,
  topicIds: [],
  directMessageIds: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_GROUP_MESSAGES_CHANGE:
      return {
        ...state,
        messageSearchQuery: action.query,
      };
    case SEARCH_GROUP_MESSAGES_REQUEST:
      return {
        ...state,
        messagesLoading: true,
      };
    case SEARCH_GROUP_MESSAGES_SUCCESS:
      return {
        ...state,
        messagesLoading: false,
        messages: action.messages,
      };
    case SEARCH_GROUP_MESSAGES_FAILURE:
      return {
        ...state,
        messagesLoading: false,
      };
    case SEARCH_GROUP_MESSAGES_RESET:
      return {
        ...state,
        messages: [],
        messagesLoading: false,
        messageSearchQuery: '',
      };
    case SEARCH_CONVERSATIONS_CHANGE:
      return {
        ...state,
        conversationSearchQuery: action.query,
        topicIds: action.topicIds,
        directMessageIds: action.directMessageIds,
        conversationSelectedIndex: 0,
        conversationSelectedId: 0,
      };
    case SEARCH_CONVERSATIONS_SELECT_CHANGE:
      return {
        ...state,
        conversationSelectedIndex: action.index,
        conversationSelectedId: action.id || 0,
      };
    default:
      return state;
  }
}
