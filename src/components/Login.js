import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
// import { Button } from 'react-native-material-design';
import {
  authenticating,
} from '../actions/session';
// components
import PhoneInput from './PhoneInput';
import CodeInput from './CodeInput';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
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
    backgroundColor: 'orange',
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
  constructor(props) {
    super(props);
    this.state = {
      hi: 'hi',
    };
  }

  render() {
    const { session } = this.props;
    return (
      <View style={styles.container} >
        <View style={styles.picSection} >
          <Text>place holder for picture</Text>
        </View>
        <View style={styles.textSection} >
          <Text style={styles.banner} >GROUP CHAT LOVE</Text>
          <Text style={styles.banner} >REIMAGINED</Text>
        </View>
        <View style={styles.loginButtonSection} >
          {session.authenticating ?  <CodeInput /> : <PhoneInput /> }
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
    authenticating,
  }, dispatch);
};
export default connect(mapStateToProps, matchDispatchToProps)(Login);
