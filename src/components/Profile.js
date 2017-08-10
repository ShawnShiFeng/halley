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

class Profile extends Component {
  static navigationOptions = {
    headerLeft: null,
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../public/ic_account_box_white_48pt_2x.png')}
        style={[styles.icon, { tintColor }]}
      />
    ),
  }
  render() {
    return (
      <View>
        <Text>from profile</Text>
      </View>
    );
  }
}

export default Profile;
