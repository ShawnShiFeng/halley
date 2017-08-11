import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import {
} from '../actions/session';

// components
import PhoneInput from './PhoneInput';
import CodeInput from './CodeInput';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'transparent',
    resizeMode: 'cover',
  },
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  loginButton: {
    height: '70%',
    width: '170px',
  },
  mainBanner: {
    fontSize: 40,
    color: 'white',
  },
  banner: {
    fontSize: 25,
    color: 'white',
  },
  picSection: {
    flex: 4,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picContainer: {
    width: '85%',
    height: '35%',
    position: 'absolute',
    bottom: 0,
  },
  textSection: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
  },
  loginButtonSection: {
    width: '100%',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signup: {
    color: 'white',
  },
  overrides: {
    backgroundColor: 'white',
    width: '70%',
    height: 200,
  },
});

class Login extends Component {
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

  render() {
    const { session, navigation } = this.props;
    // redirect to the main page once user is logged in
    if (session.authenticated) {
      navigation.navigate('App');
    }
    return (
      <View style={styles.container} >
        <View style={styles.picSection} >
          <View style={styles.picContainer} >
            <Image
              style={{ width: '100%', height: '100%' }}
              source={require('../../public/loop-banner.png')}
            />
          </View>
        </View>
        <View style={styles.textSection}>
          <Text style={styles.bannerText}>NOT your Facebook group!</Text>
        </View>
        <View style={styles.loginButtonSection} >
          {session.authenticating ?
            <CodeInput navigation={this.props.navigation} />
            : <PhoneInput /> }
          <Text style={styles.signup} >Sign up here</Text>
        </View>
      </View>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    session: state.session,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
};
export default connect(mapStateToProps, matchDispatchToProps)(Login);
