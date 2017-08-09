import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

class Signup extends Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Signup',
      icon: ({ tintColor }) => (
        <Image
          source={require('../../public/favicon-32x32.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }),
  };

  render() {
    return (
      <View>
        <Text>from Sign up</Text>
      </View>
    );
  }
}

export default Signup;
