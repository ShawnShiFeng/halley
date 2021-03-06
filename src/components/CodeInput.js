import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Socket } from 'phoenix';
import axios from 'axios';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';
import {
  authenticated,
  updateToken,
  updateSocket,
} from '../actions/session';
import {
  updateUserProfile,
} from '../actions/user';

class CodeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstDigit: '',
      secondDigit: '',
      thirdDigit: '',
      fourthDigit: '',
    };
    this.sendPhoneCode = this.sendPhoneCode.bind(this);
    this.validatePhoneCode = this.validatePhoneCode.bind(this);
    this.startSocket = this.startSocket.bind(this);
  }

  sendPhoneCode() {
    const data = {
      phone_code: `${this.state.firstDigit}${this.state.secondDigit}${this.state.thirdDigit}${this.state.fourthDigit}`,
      phone_number: this.props.session.phoneNumber,
    };
    console.log('data: ', data);
    if (this.validatePhoneCode(data.phone_code)) {
      axios.post('http://127.0.0.1:4000/v1/sessions', data)
        .then((response) => {
          this.props.updateToken(response.data.token);
          axios.defaults.headers.common['Authorization'] = `Bearer: ${response.data.token}`;
          console.log('successfully received phone_code validate confirmation: ', response);
          this.props.updateUserProfile(response.data.user);
          this.props.authenticated();
          this.startSocket();
          this.props.navigation.navigate('Main');
        })
        .catch((err) => {
          console.error('failed to send loop code to the server: ', err);
        });
    }
  }
  startSocket() {
    const token = this.props.session.token;
    const url = 'ws://127.0.0.1:4000/socket';
    const socket = new Socket(url, {
      params: { token },
    });
    socket.onOpen(event => console.log('Connected.'));
    socket.onError(event => console.error('Cannot connect.'));
    socket.onClose(event => console.log('Goodbye.'));

    socket.connect();
    this.props.updateSocket(socket);
  }

  validatePhoneCode(phoneCode) {
    if (phoneCode.length === 4) {
      if (!isNaN(parseInt(phoneCode, 10)) && typeof(parseInt(phoneCode, 10)) === 'number') {
        return true;
      }
    }
    return false;
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        alignItems: 'center',
      },
      inputBox: {
        width: '65%',
        flexDirection: 'row',
      },
      phoneCodeBox: {
        margin: '5%',
        flex: 1,
      },
      phoneCodeText: {
        fontSize: 30,
        textAlign: 'center',
      },
      banner: {
        color: '#FF135D',
      },
    });
    return (
      <View style={styles.container}>
        <Text style={styles.banner}>VALIDATION CODE</Text>
        <View style={styles.inputBox}>
          <View style={styles.phoneCodeBox}>
            <TextInput
              style={{ fontSize: 30, height: 40, borderColor: 'black', borderWidth: 1 }}
              onChangeText={
                firstDigit => {
                  this.setState({ firstDigit });
                  this.refs.secondInput.focus();
                }
              }
              value={this.state.firstDigit}
              maxLength={1}
              autoFocus={true}
            />
          </View>
          <View style={styles.phoneCodeBox}>
            <TextInput
              style={{ fontSize: 30, height: 40, borderColor: 'black', borderWidth: 1 }}
              onChangeText={
                secondDigit => {
                  this.setState({ secondDigit });
                  this.refs.thirdInput.focus();
                  }
              }
              value={this.state.secondDigit}
              maxLength={1}
              ref="secondInput"
              onSubmitEditing={(event) => {
                this.refs.thirdInput.focus();
              }}
            />
          </View>
          <View style={styles.phoneCodeBox}>
            <TextInput
              style={{ fontSize: 30, height: 40, borderColor: 'black', borderWidth: 1 }}
              onChangeText={
                thirdDigit => {
                  this.setState({ thirdDigit });
                  this.refs.fourthInput.focus();
                  }
              }
              value={this.state.thirdDigit}
              maxLength={1}
              ref="thirdInput"
            />
          </View>
          <View style={styles.phoneCodeBox}>
            <TextInput
              style={{ fontSize: 30, height: 40, borderColor: 'black', borderWidth: 1 }}
              onChangeText={
                fourthDigit => {
                  this.setState({ fourthDigit });
                }
              }
              value={this.state.fourthDigit}
              maxLength={1}
              ref="fourthInput"
            />
          </View>
        </View>
        <Text style={styles.banner}>You should receive an SMS validation code</Text>
        <Text style={styles.banner}>within 60 seconds.</Text>
        <Button
          onPress={this.sendPhoneCode}
          title="Submit"
          color="#FF135D"
          backgroundColor="#FF135D"
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    session: state.session,
    user: state.user,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    authenticated,
    updateUserProfile,
    updateToken,
    updateSocket,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(CodeInput);
