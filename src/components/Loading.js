import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';
import {
  StackNavigatior,
} from 'react-navigation';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      example: 'example',
    };
    this.loadMainPage = this.loadMainPage.bind(this);
  }
  componentDidMount() {
    this.loadMainPage();
  }

  loadMainPage() {
    const test = false;
    setTimeout(() => {
      // if loggedin then go to app
      if (test) {
        this.props.navigation.navigate('App');
      } else {
        this.props.navigation.navigate('Login');
      }
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
