import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

// Components
import GroupsContent from './GroupsContent';

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

class Groups extends Component {
  static navigationOptions = {
    headerLeft: null,
    tabBarLabel: 'Groups',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../public/ic_message_black_48dp.png')}
        style={[styles.icon, { tintColor }]}
      />
    ),
  }
  render() {
    return (
      <View>
        <Text>from Groups</Text>
        <GroupsContent />
      </View>
    );
  }
}

export default Groups;
