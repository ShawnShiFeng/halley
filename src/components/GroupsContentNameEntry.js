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
    borderWidth: 1,
  },
  arrowTagContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  groupNameContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 15,
  },
  groupNameText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

const GroupsContentNameEntry = ({ groupName }) => (
  <View style={styles.mainContainer}>
    <View style={styles.arrowTagContainer}>
      <Image
        style={{ height: 12, width: 10 }}
        source={require('../../public/hash.png')}
      />
    </View>
    <View style={styles.groupNameContainer}>
      <Text style={styles.groupNameText}>{groupName}</Text>
    </View>
  </View>
);

export default GroupsContentNameEntry;
