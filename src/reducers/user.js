// import get from 'lodash/get';
// import uniqBy from 'lodash/uniqBy';
// import without from 'lodash/without';
// import {
//   ADD_GROUP_USERS_SUCCESS,
//   ADD_TOPIC_USERS_SUCCESS,
//   DM_MESSAGE_CREATED,
//   FETCH_GROUP_USERS_SUCCESS,
//   FETCH_RECIPIENTS_SUCCESS,
//   FETCH_RECIPIENTS_PAGE_SUCCESS,
//   FETCH_TOPIC_USERS_SUCCESS,
//   LOGIN,
//   PROFILE_UPDATED,
//   USER_TYPING,
//   USER_TYPING_TIMEOUT,
//   TOPIC_MESSAGE_CREATED,
//   USER_CHANNEL_JOINED,
//   USER_JOINED_TOPIC,
//   USER_LEFT_TOPIC,
// } from '../constants';

const initialState = {
  // users: {},
  // channel: null,
  currentUser: {},
  // topics: {},
  // groups: {},
  // typingUsers: {},
  // recipients: [],
  // recipientsPaging: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_USER_PROFILE': 
      return {
        ...state,
        currentUser: action.user,
      };
    // case USER_CHANNEL_JOINED:
    //   return {
    //     ...state,
    //     channel: action.channel,
    //   };
    // case LOGIN:
    // case PROFILE_UPDATED:
    //   return {
    //     ...state,
    //     currentUser: action.response.entities.users[action.response.result],
    //     users: {
    //       ...state.users,
    //       ...action.response.entities.users,
    //     },
    //   };
    // case FETCH_GROUP_USERS_SUCCESS:
    // case ADD_GROUP_USERS_SUCCESS: {
    //   const userIds = get(state, `groups[${action.groupId}].users`, []);
    //   return {
    //     ...state,
    //     groups: {
    //       ...state.groups,
    //       [action.groupId]: {
    //         users: [...new Set([...userIds, ...action.response.result])],
    //       },
    //     },
    //     users: {
    //       ...state.users,
    //       ...action.response.entities.users,
    //     },
    //   };
    // }
    // case FETCH_TOPIC_USERS_SUCCESS:
    // case ADD_TOPIC_USERS_SUCCESS:
    // case USER_JOINED_TOPIC: {
    //   const userIds = get(state, `topics[${action.topicId}].users`, []);
    //   return {
    //     ...state,
    //     topics: {
    //       ...state.topics,
    //       [action.topicId]: {
    //         users: [...new Set([...userIds, ...action.response.result])],
    //       },
    //     },
    //     users: {
    //       ...state.users,
    //       ...action.response.entities.users,
    //     },
    //   };
    // }
    // case USER_LEFT_TOPIC: {
    //   const userIds = get(state, `topics[${action.topicId}].users`, []);
    //   return {
    //     ...state,
    //     topics: {
    //       ...state.topics,
    //       [action.topicId]: {
    //         users: without(userIds, action.userId),
    //       },
    //     },
    //   };
    // }
    // case USER_TYPING: {
    //   const users = get(state, `typingUsers[${action.conversationId}]`, []);
    //   const user = users.find(u => u.id === action.user.id);
    //   if (user) {
    //     clearTimeout(user.timeout);
    //   }
    //   return {
    //     ...state,
    //     typingUsers: {
    //       ...state.typingUsers,
    //       [action.conversationId]: uniqBy([action.user, ...users], u => u.id),
    //     },
    //   };
    // }
    // case USER_TYPING_TIMEOUT: {
    //   const users = get(state, `typingUsers[${action.conversationId}]`, []);
    //   return {
    //     ...state,
    //     typingUsers: {
    //       ...state.typingUsers,
    //       [action.conversationId]: users.filter(u => u.id !== action.user.id),
    //     },
    //   };
    // }
    // case DM_MESSAGE_CREATED:
    // case TOPIC_MESSAGE_CREATED: {
    //   const users = get(state, `typingUsers[${action.conversationId}]`, []);
    //   const user = users.find(u => u.id === action.userId);
    //   if (user) {
    //     clearTimeout(user.timeout);
    //   }
    //   return {
    //     ...state,
    //     users: {
    //       ...state.users,
    //       ...action.response.entities.users,
    //     },
    //     typingUsers: {
    //       ...state.typingUsers,
    //       [action.conversationId]: users.filter(u => u.id !== action.userId),
    //     },
    //   };
    // }
    // case FETCH_RECIPIENTS_SUCCESS:
    //   return {
    //     ...state,
    //     recipients: action.recipients,
    //     recipientsPaging: action.paging,
    //   };
    // case FETCH_RECIPIENTS_PAGE_SUCCESS:
    //   return {
    //     ...state,
    //     recipients: uniqBy([...state.recipients, ...action.recipients], 'username'),
    //     recipientsPaging: action.paging,
    //   };
    // default:
    //   if (get(action, 'response.entities.users')) {
    //     return {
    //       ...state,
    //       users: {
    //         ...state.users,
    //         ...action.response.entities.users,
    //       },
    //     };
    //   }
    default:
      return state;
  }
}
