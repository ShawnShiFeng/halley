import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 45,
    // borderWidth: 1,
  },
  topicNameEntryContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 10,
    // borderWidth: 1,
  },
  topicNameEntryText: {
    marginLeft: 10,
    fontSize: 15,
  },
  hashtagContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    // borderWidth: 1,
  },
});

const GroupsContentTopicEntry = ({ topicName }) => (
  <View style={styles.mainContainer}>
    <View style={styles.hashtagContainer}>
      <Image
        style={{ height: 12, width: 10 }}
        source={require('../../public/hash.png')}
      />
    </View>
    <View style={styles.topicNameEntryContainer}>
      <Text style={styles.topicNameEntryText}>{topicName}</Text>
    </View>
  </View>
);

export default GroupsContentTopicEntry;
