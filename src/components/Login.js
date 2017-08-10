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
    // redirect to the main page once user is logged in
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
            <Text style={styles.mainBanner} >LOOP</Text>
            <Text style={styles.banner} >NOT </Text>
            <Text style={styles.banner} >Your Facebook Group</Text>
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
