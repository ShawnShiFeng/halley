// import get from 'lodash/get';
// import without from 'lodash/without';
// import {
//   FETCH_HIDDEN_TOPIC_SUCCESS,
//   FETCH_TOPICS_SUCCESS,
//   GROUP_ARCHIVED,
//   GROUP_JOINED,
//   GROUP_LEFT,
//   TOPICS_FILTERED,
// } from '../constants';

const initialState = {
  groups: [],
  groupIds: [],
  filteredIds: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_GROUPS_JOINED':
      return {
        ...state,
        groups: action.groups,
      };
    // case FETCH_TOPICS_SUCCESS:
    //   return {
    //     groupIds: action.groupIds,
    //     groups: {
    //       ...state.groups,
    //       ...action.response.entities.groups,
    //     },
    //   };
    // case GROUP_JOINED:
    //   return {
    //     groupIds: [action.response.result, ...state.groupIds],
    //     groups: {
    //       ...state.groups,
    //       ...action.response.entities.groups,
    //     },
    //   };
    // case GROUP_LEFT:
    //   return {
    //     ...state,
    //     groupIds: without(state.groupIds, action.groupId),
    //   };
    // case TOPICS_FILTERED:
    //   return {
    //     ...state,
    //     filteredIds: action.groupIds,
    //   };
    // case GROUP_ARCHIVED:
    //   return {
    //     ...state,
    //     groupIds: without(state.groupIds, action.groupId),
    //   };
    // case FETCH_HIDDEN_TOPIC_SUCCESS: {
    //   if (state.groupIds.includes(action.groupId)) {
    //     return state;
    //   }
    //   return {
    //     ...state,
    //     groupIds: [action.groupId, ...state.groupIds],
    //   };
    // }
    default:
      // if (get(action, 'response.entities.groups')) {
      //   return {
      //     ...state,
      //     groups: {
      //       ...state.groups,
      //       ...action.response.entities.groups,
      //     },
      //   };
      // }
      return state;
  }
}
