import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hi: 'hi',
    };
  }

  render() {
    return (
      <View>
        <Text>from Login.js</Text>
      </View>
    );
  }
}
