import get from 'lodash/get';
import flatMap from 'lodash/flatMap';
import reduce from 'lodash/reduce';
import {
  FETCH_ATTACHMENTS_REQUEST,
  FETCH_ATTACHMENTS_SUCCESS,
  FETCH_ATTACHMENTS_FAILURE,
  FETCH_MESSAGES_SUCCESS,
  TOPIC_MESSAGE_CREATED,
  TOPIC_MESSAGE_UPDATED,
  DM_MESSAGE_CREATED,
  DM_MESSAGE_UPDATED,
} from '../constants';

const initialState = {
  attachments: {},
  conversations: {},
  conversationsLoading: {},
  conversationsLoaded: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ATTACHMENTS_REQUEST:
      return {
        ...state,
        conversations: {
          ...state.conversations,
          [action.conversationId]: get(
            state,
            `conversations[${action.conversationId}]`,
            {},
          ),
        },
        conversationsLoading: {
          ...state.conversationsLoading,
          [action.conversationId]: true,
        },
      };
    case TOPIC_MESSAGE_CREATED:
    case TOPIC_MESSAGE_UPDATED:
    case DM_MESSAGE_CREATED:
    case DM_MESSAGE_UPDATED:
    case FETCH_MESSAGES_SUCCESS: {
      // Using preloaded attachments for Attachemnts Gallery will
      // cause ReactSwipe component to blink first
      // return state;

      // topicId vs conversationId
      const conversationId = action.topicId || action.directMessageId || action.conversationId;
      const newAsArray = flatMap(
        action.response.entities.messages,
        m => m.attachments,
      );
      const newIds = newAsArray.map(a => a.id);
      const oldIds = get(
        state,
        `conversations[${conversationId}].attachments`,
        [],
      );
      return {
        ...state,
        conversations: {
          ...state.conversations,
          [conversationId]: {
            attachments: [...new Set([...oldIds, ...newIds])].sort(
              (a, b) => a - b,
            ),
            prevPage: 'dunno',
            nextPage: 'dunno',
          },
        },
        attachments: {
          ...state.attachments,
          ...reduce(
            newAsArray,
            (result, attachment) => {
              result[attachment.id] = attachment; // eslint-disable-line no-param-reassign
              return result;
            },
            {},
          ),
        },
      };
    }
    case FETCH_ATTACHMENTS_SUCCESS: {
      const attachments = get(
        state,
        `conversations[${action.conversationId}].attachments`,
        [],
      );
      const prev = get(
        state,
        `conversations[${action.conversationId}].prevPage`,
        '',
      );
      const next = get(
        state,
        `conversations[${action.conversationId}].nextPage`,
        '',
      );
      return {
        ...state,
        conversations: {
          ...state.conversations,
          [action.conversationId]: {
            firstPageLoaded: true,
            // Only use prev and next if they are strings, otherwise reuse previously set.
            // See related API hacks in actions/conversation.
            prevPage: typeof action.paging.prev === 'string'
              ? action.paging.prev
              : prev,
            nextPage: typeof action.paging.next === 'string'
              ? action.paging.next
              : next,
            attachments: [
              ...new Set([
                ...(action.append ? attachments : []),
                ...action.response.result,
              ]),
            ].sort((a, b) => a - b),
          },
        },
        conversationsLoading: {
          ...state.conversationsLoading,
          [action.conversationId]: false,
        },
        conversationsLoaded: {
          ...state.conversationsLoaded,
          [action.conversationId]: true,
        },
        attachments: {
          ...state.attachments,
          ...action.response.entities.attachments,
        },
      };
    }
    case FETCH_ATTACHMENTS_FAILURE:
      return {
        ...state,
        conversationsLoading: {
          ...state.conversationsLoading,
          [action.conversationId]: false,
        },
        conversationsLoaded: {
          ...state.conversationsLoaded,
          [action.conversationId]: false,
        },
      };
    default:
      return state;
  }
}
