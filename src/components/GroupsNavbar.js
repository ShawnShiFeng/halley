import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  bottomContainer: {
    flex: 1,
    // borderWidth: 1,
    justifyContent: 'center',
  },
  topItem1: {
    flex: 1,
    // borderWidth: 1,
  },
  plusSign: {
    top: 20,
    left: 14,
  },
  topItem2: {
    flex: 2,
    // borderWidth: 1,
  },
  topItem3: {
    flex: 1,
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  filterSign: {
    flex: 1,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',

  },
  searchSign: {
    flex: 1,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomInnerContainer: {
    left: 12,
    // borderWidth: 1,
  },
  bottomText: {
    fontSize: 27,
    fontWeight: 'bold',
  },
});


const GroupsNavbar = () => (
  <View style={styles.mainContainer}>
    <View style={styles.topContainer}>
      <View style={styles.topItem1}>
        <View style={styles.plusSign}>
          <Image
            style={{ height: 16, width: 16 }}
            source={require('../../public/Plus.png')}
          />
        </View>
      </View>
      <View style={styles.topItem2}>
        <View></View>
      </View>
      <View style={styles.topItem3}>
        <View style={styles.filterSign}>
          <Image
            style={{ height: 17, width: 17 }}
            source={require('../../public/hash.png')}
          />
        </View>
        <View style={styles.searchSign}>
          <Image
            style={{ height: 19, width: 19 }}
            source={require('../../public/search.png')}
          />
        </View>
      </View>
    </View>
    <View style={styles.bottomContainer}>
      <View style={styles.bottomInnerContainer}>
        <Text style={styles.bottomText}>Hello</Text>
      </View>
    </View>
  </View>
);

export default GroupsNavbar;
