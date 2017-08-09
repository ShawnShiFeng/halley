import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
// import { Button } from 'react-native-material-design';
import PhoneInput from './PhoneInput';
import axios from 'axios';

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
          <PhoneInput />
          <Text style={styles.signup} >Sign up here</Text>
        </View>
      </View>
    );
  }
}

export default Login;
