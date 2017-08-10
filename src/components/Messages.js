import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

class Messages extends Component {
  static navigationOptions = {
    headerLeft: null,
    tabBarLabel: 'Messages',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../public/ic_track_changes_48pt_2x.png')}
        style={[styles.icon, { tintColor }]}
      />
    ),
  }
  render() {
    return (
      <View>
        <Text>from messages</Text>
      </View>
    );
  }
}

export default Messages;
