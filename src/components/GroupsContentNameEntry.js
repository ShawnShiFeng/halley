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
  arrowTagContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupNameContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 15,
  },
  groupNameText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  settingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1.5,
  },
});

const GroupsContentNameEntry = ({ groupName }) => (
  <View style={styles.mainContainer}>
    <View style={styles.arrowTagContainer}>
      <Image
        style={{ height: 6, width: 10 }}
        source={require('../../public/Color.png')}
      />
    </View>
    <View style={styles.groupNameContainer}>
      <Text style={styles.groupNameText}>{groupName}</Text>
    </View>
    <View style={styles.notificationContainer}>
      {/* <Image
        style={{ height: 15, width: 15 }}
        source={require('../../public/Plus.png')}
      /> */}
    </View>
    <View style={styles.settingContainer}>
      <Image
        style={{ height: 15, width: 15 }}
        source={require('../../public/ic_more_horiz_48pt_3x.png')}
      />
    </View>
  </View>
);

export default GroupsContentNameEntry;
