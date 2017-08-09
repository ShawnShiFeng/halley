import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: 'sample',
    }
  }

  render() {
    return (
      <View>
        <Text>from Sign up</Text>
      </View>
    );
  }
}

export default Signup;
