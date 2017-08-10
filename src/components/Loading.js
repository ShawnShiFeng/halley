import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

class Loading extends Component {
  static navigationOptions = {
    headerLeft: null,
    headerStyle: {
      backgroundColor: 'transparent',
      position: 'absolute',
      height: 50,
      top: 0,
      left: 0,
      right: 0,
    },
  };
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 1800);
  }

  render() {
    const styles = StyleSheet.create({
      mainContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
    });

    return (
      <View style={styles.mainContainer}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require('../../public/android-chrome-192x192.png')}
        />
      </View>
    );
  }
}

export default Loading;
