export const updateGroupsJoined = (groups) => {
  return {
    type: 'UPDATE_GROUPS_JOINED',
    groups,
  };
};

export const updateCurrentTopicId = (id) => {
  return {
    type: 'UPDATE_CURRENT_TOPIC_ID',
    current_topic_id: id,
  };
};
