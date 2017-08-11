// import get from 'lodash/get';
// import without from 'lodash/without';
// import {
//   DM_MESSAGE_CREATED,
//   DM_MESSAGE_UPDATED,
//   DM_MESSAGE_DELETED,
//   DM_MESSAGE_REPLIED,
//   FETCH_MESSAGES_REQUEST,
//   FETCH_MESSAGES_SUCCESS,
//   FETCH_MESSAGES_FAILURE,
//   FETCH_REPLIES_SUCCESS,
//   TOPIC_MESSAGE_CREATED,
//   TOPIC_MESSAGE_UPDATED,
//   TOPIC_MESSAGE_DELETED,
//   TOPIC_MESSAGE_REPLIED,
//   STORE_TEMP_MESSAGE,
// } from '../constants';

const initialState = {
  // messages: {},
  messages: [],
  // tempMessages: {},
  // conversations: {},
  // conversationsLoading: {},
  // conversationsLoaded: {},
  // threads: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_MESSAGES':
      return {
        ...state,
        messages: action.messages,
      };
    // case FETCH_MESSAGES_REQUEST:
    //   return {
    //     ...state,
    //     conversations: {
    //       ...state.conversations,
    //       [action.conversationId]: action.append
    //         ? get(state, `conversations[${action.conversationId}]`, {})
    //         : {},
    //     },
    //     conversationsLoading: {
    //       ...state.conversationsLoading,
    //       [action.conversationId]: true,
    //     },
    //   };
    // case FETCH_MESSAGES_SUCCESS: {
    //   const messages = get(state, `conversations[${action.conversationId}].messages`, []);
    //   const prev = get(state, `conversations[${action.conversationId}].prevPage`, '');
    //   const next = get(state, `conversations[${action.conversationId}].nextPage`, '');
    //   return {
    //     ...state,
    //     conversations: {
    //       ...state.conversations,
    //       [action.conversationId]: {
    //         firstPageLoaded: true,
    //         // Only use prev and next if they are strings, otherwise reuse previously set.
    //         // See related API hacks in actions/conversation.
    //         prevPage: typeof action.paging.prev === 'string' ? action.paging.prev : prev,
    //         nextPage: typeof action.paging.next === 'string' ? action.paging.next : next,
    //         messages: [
    //           ...new Set([...(action.append ? messages : []), ...action.response.result]),
    //         ].sort((a, b) => a - b),
    //       },
    //     },
    //     conversationsLoading: {
    //       ...state.conversationsLoading,
    //       [action.conversationId]: false,
    //     },
    //     conversationsLoaded: {
    //       ...state.conversationsLoaded,
    //       [action.conversationId]: true,
    //     },
    //     messages: {
    //       ...state.messages,
    //       ...action.response.entities.messages,
    //     },
    //   };
    // }
    // case FETCH_MESSAGES_FAILURE:
    //   return {
    //     ...state,
    //     conversationsLoading: {
    //       ...state.conversationsLoading,
    //       [action.conversationId]: false,
    //     },
    //     conversationsLoaded: {
    //       ...state.conversationsLoaded,
    //       [action.conversationId]: false,
    //     },
    //   };
    // case DM_MESSAGE_CREATED:
    // case TOPIC_MESSAGE_CREATED: {
    //   const conversationId = action.conversationId;
    //   const conversation = get(state, `conversations[${conversationId}]`, {});
    //   const messages = get(conversation, 'messages', []);
    //   return {
    //     ...state,
    //     conversations: {
    //       ...state.conversations,
    //       [conversationId]: {
    //         ...conversation,
    //         messages: [...messages, action.response.result],
    //       },
    //     },
    //     messages: {
    //       ...state.messages,
    //       ...action.response.entities.messages,
    //     },
    //   };
    // }
    // case DM_MESSAGE_UPDATED:
    // case TOPIC_MESSAGE_UPDATED:
    //   return {
    //     ...state,
    //     messages: {
    //       ...state.messages,
    //       ...action.response.entities.messages,
    //     },
    //   };
    // case DM_MESSAGE_DELETED:
    // case TOPIC_MESSAGE_DELETED: {
    //   if (action.replyToMessageId) {
    //     const messages = state.messages;
    //     const replyToMessageId = action.replyToMessageId;
    //     const replyToMessage = messages[replyToMessageId];
    //     const replies = get(state, `threads[${replyToMessageId}]`, []);
    //     if (replyToMessage) {
    //       messages[replyToMessageId] = {
    //         ...replyToMessage, reply_count: replyToMessage.reply_count - 1,
    //       };
    //       return {
    //         ...state,
    //         messages,
    //         threads: {
    //           ...state.threads,
    //           [replyToMessageId]: replies.filter((m) => m.id !== action.messageId),
    //         },
    //       };
    //     }
    //     return state;
    //   }

    //   const conversationId = action.conversationId;
    //   const conversation = get(state, `conversations[${conversationId}]`, {});
    //   const messageIds = get(conversation, 'messages', []);
    //   return {
    //     ...state,
    //     conversations: {
    //       ...state.conversations,
    //       [conversationId]: {
    //         ...conversation,
    //         messages: without(messageIds, action.messageId),
    //       },
    //     },
    //   };
    // }
    // case STORE_TEMP_MESSAGE:
    //   return {
    //     ...state,
    //     tempMessages: {
    //       ...state.tempMessages,
    //       [action.conversationId]: action.text,
    //     },
    //   };
    // case FETCH_REPLIES_SUCCESS:
    //   return {
    //     ...state,
    //     threads: {
    //       ...state.threads,
    //       [action.messageId]: action.messages.reverse(),
    //     },
    //   };
    // case DM_MESSAGE_REPLIED:
    // case TOPIC_MESSAGE_REPLIED: {
    //   const messages = state.messages;
    //   const replyToMessageId = action.message.reply_to_message_id;
    //   const replyToMessage = messages[replyToMessageId];
    //   const replies = get(state, `threads[${replyToMessageId}]`, []);
    //   if (replyToMessage) {
    //     messages[replyToMessageId] = {
    //       ...replyToMessage, reply_count: replyToMessage.reply_count + 1,
    //     };
    //   }
    //   return {
    //     ...state,
    //     messages,
    //     threads: {
    //       ...state.threads,
    //       [replyToMessageId]: [...replies, action.message],
    //     },
    //   };
    // }
    default:
      return state;
  }
}
