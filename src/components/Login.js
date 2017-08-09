import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  Text,
  StyleSheet,
  Image,
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
  },
  container: {
    // backgroundColor: 'orange',
    width: '100%',
    height: '100%',
  },
  loginButton: {
    height: '70%',
    width: '170px',
  },
  banner: {
    fontSize: 30,
    color: 'white',
  },
  picSection: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSection: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonSection: {
    width: '100%',
    flex: 3,
    // backgroundColor: 'orange',
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
  };

  render() {
    const { session, navigation } = this.props;
    if (session.authenticated) {
      navigation.navigate('App');
    }
    return (
      <Image source={require('../../public/purple.png')} style={styles.backgroundImage}>
        <View style={styles.container} >
          <View style={styles.picSection} >
            <Text>place holder for picture</Text>
          </View>
          <View style={styles.textSection} >
            <Text style={styles.banner} >GROUP CHAT LOVE</Text>
            <Text style={styles.banner} >REIMAGINED</Text>
          </View>
          <View style={styles.loginButtonSection} >
            {session.authenticating ?
              <CodeInput navigation={this.props.navigation} />
              : <PhoneInput /> }
            <Text style={styles.signup} >Sign up here</Text>
          </View>
        </View>
      </Image>
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
