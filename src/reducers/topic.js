import get from 'lodash/get';
import without from 'lodash/without';
import {
  FETCH_GROUP_TOPICS_REQUEST,
  FETCH_GROUP_TOPICS_SUCCESS,
  FETCH_GROUP_TOPICS_FAILURE,
  FETCH_HIDDEN_TOPIC_SUCCESS,
  FETCH_TOPIC_SUCCESS,
  FETCH_TOPICS_SUCCESS,
  OPEN_TOPIC_REQUEST,
  OPEN_TOPIC_FAILURE,
  TOGGLE_UNREAD_TOPICS,
  TOPIC_ARCHIVED,
  TOPIC_EXPIRED,
  TOPIC_JOINED,
  TOPIC_LEFT,
  TOPIC_OPENED,
  TOPIC_CLOSED,
  TOPIC_MESSAGE_CREATED,
  TOPIC_SNOOZED,
  TOPICS_FILTERED,
} from '../constants';

const initialState = {
  // all archived and unarchived topic entities
  topics: {},
  // id's for topics that the user has joined and are not archived
  topicIds: [],
  unreadIds: [],
  filteredIds: [],
  allTopicsLoaded: false,
  filterQuery: '',
  currentTopicId: null,
  lastTopicId: null,
  // groups are for storing topicId's which the currentUser may not have
  // joined, it contains keys of groupId's with a value of topicId array
  groups: {},
  // groupTopics contain topic entities with a different payload than the
  // main topics map, because the user may not have a participation
  groupTopics: {},
  groupTopicsLoading: {},
  groupTopicsLoaded: {},
  unreadVisible: false,
  topicNotFound: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TOPIC_SUCCESS:
      return {
        ...state,
        topics: {
          ...state.topics,
          ...action.response.entities.topics,
        },
      };
    case FETCH_TOPICS_SUCCESS:
      return {
        ...state,
        allTopicsLoaded: true,
        // Array needs to be replaced when topics are refetched because a topic
        // may have expired or been left while socket was not connected
        topicIds: action.topicIds,
        unreadIds: action.unreadIds,
        topics: {
          ...state.topics,
          ...action.response.entities.topics,
        },
      };
    case FETCH_HIDDEN_TOPIC_SUCCESS:
      return {
        ...state,
        topicIds: [...new Set([...action.response.result, ...state.topicIds])],
        unreadIds: [...new Set([...action.response.result, ...state.unreadIds])],
        topics: {
          ...state.topics,
          ...action.response.entities.topics,
        },
      };
    case TOPIC_JOINED: {
      const topicId = action.response.result;
      const topicIds = state.topicIds.includes(topicId)
        ? state.topicIds
        : [topicId, ...state.topicIds];
      return {
        ...state,
        topicIds,
        topics: {
          ...state.topics,
          ...action.response.entities.topics,
        },
      };
    }
    case TOPIC_OPENED: {
      const topicId = action.response.result;
      const topicIds = state.topicIds.includes(topicId)
        ? state.topicIds
        : [topicId, ...state.topicIds];
      return {
        ...state,
        topicIds,
        unreadIds: without(state.unreadIds, topicId),
        currentTopicId: topicId,
        topics: {
          ...state.topics,
          ...action.response.entities.topics,
        },
      };
    }
    case TOPIC_CLOSED: {
      let topic = state.topics[action.topicId];
      if (!topic) {
        return state;
      }
      topic = {
        ...topic,
        last_read_message_id: topic.last_message_id,
      };
      return {
        ...state,
        currentTopicId: null,
        lastTopicId: state.currentTopicId,
        topics: {
          ...state.topics,
          [action.topicId]: topic,
        },
      };
    }
    case TOPIC_MESSAGE_CREATED: {
      if (state.unreadIds.includes(action.conversationId) ||
          state.currentTopicId === action.conversationId) {
        return state;
      }
      return {
        ...state,
        unreadIds: [action.conversationId, ...state.unreadIds],
      };
    }
    case TOPIC_LEFT:
    case TOPIC_EXPIRED:
    case TOPIC_ARCHIVED:
      return {
        ...state,
        topicIds: without(state.topicIds, action.topicId),
        unreadIds: without(state.unreadIds, action.topicId),
        filteredIds: without(state.filteredIds, action.topicId),
      };
    case TOPICS_FILTERED:
      return {
        ...state,
        filterQuery: action.query,
        filteredIds: action.topicIds,
        unreadVisible: false,
      };
    case TOPIC_SNOOZED:
      return {
        ...state,
        topics: {
          ...state.topics,
          ...action.response.entities.topics,
        },
      };
    case FETCH_GROUP_TOPICS_REQUEST:
      return {
        ...state,
        groupTopicsLoading: {
          ...state.groupTopicsLoading,
          [action.groupId]: true,
        },
        groupTopicsLoaded: {
          ...state.groupTopicsLoaded,
          [action.groupId]: false,
        },
      };
    case FETCH_GROUP_TOPICS_FAILURE:
      return {
        ...state,
        groupTopicsLoading: {
          ...state.groupTopicsLoading,
          [action.groupId]: false,
        },
        groupTopicsLoaded: {
          ...state.groupTopicsLoaded,
          [action.groupId]: false,
        },
      };
    case FETCH_GROUP_TOPICS_SUCCESS: {
      const topicIds = get(state, `groups[${action.groupId}].topics`, []);
      return {
        ...state,
        groupTopicsLoading: {
          ...state.groupTopicsLoading,
          [action.groupId]: false,
        },
        groupTopicsLoaded: {
          ...state.groupTopicsLoaded,
          [action.groupId]: true,
        },
        groups: {
          ...state.groups,
          [action.groupId]: {
            topics: [...new Set([...action.response.result, ...topicIds])].sort((a, b) => b - a),
          },
        },
        groupTopics: {
          ...state.groupTopics,
          ...action.response.entities.topics,
        },
      };
    }
    case TOGGLE_UNREAD_TOPICS:
      return {
        ...state,
        unreadVisible: !state.unreadVisible,
      };
    case OPEN_TOPIC_REQUEST:
      return {
        ...state,
        topicNotFound: false,
      };
    case OPEN_TOPIC_FAILURE:
      return {
        ...state,
        topicNotFound: true,
      };
    default:
      return state;
  }
}
