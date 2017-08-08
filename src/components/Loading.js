import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';

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
    const { navigate } = this.props.navigation;
    setTimeout(() => {
      navigate('App');
    }, 2000);
  }

  render() {
    const { navigate } = this.props.navigation;
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
