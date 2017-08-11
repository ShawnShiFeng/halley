import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 45,
    // borderWidth: 1,
  },
  topicNameEntryContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottomColor: '#F8F8FF',
    borderBottomWidth: 1,
    flex: 10,
    // borderWidth: 1,
  },
  topicNameEntryText: {
    fontSize: 15,
  },
  hashtagContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    // borderWidth: 1,
  },
});

const GroupsContentTopicEntry = ({ topicInfo, topicName, onTopicClick }) => (
  <View style={styles.mainContainer}>
    <View style={styles.hashtagContainer}>
      <Image
        style={{ height: 12, width: 10 }}
        source={require('../../public/hash.png')}
      />
    </View>
    <View style={styles.topicNameEntryContainer}>
      <TouchableHighlight onPress={() => { onTopicClick(topicInfo); }}>
        <Text style={styles.topicNameEntryText}>{topicName}</Text>
      </TouchableHighlight>
    </View>
  </View>
);

export default GroupsContentTopicEntry;
