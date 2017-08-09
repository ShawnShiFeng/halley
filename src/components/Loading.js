import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';

class Loading extends Component {
  static navigationOptions = {
    headerLeft: null,
  };
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 2000);
  }

  render() {
    return (
      <View>
        <Image
          style={{ width: 375, height: 700 }}
          source={require('../../public/loading-page.png')}
        />
      </View>
    );
  }
}

export default Loading;
