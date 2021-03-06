import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';
import {
  authenticating,
} from '../actions/session';


class PhoneInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: '+1',
      phoneNumber: '',
    };
    this.sendPhoneNumber = this.sendPhoneNumber.bind(this);
    this.validateNumberFormatUS = this.validateNumberFormatUS.bind(this);
  }

  sendPhoneNumber() {
    const { authenticating } = this.props;
    if (this.validateNumberFormatUS(this.state.phoneNumber)) {
      const data = {
        phone_number: `${this.state.countryCode}${this.state.phoneNumber}`,
      };
      axios.post('http://127.0.0.1:4000/v1/sessions/code', data)
        .then((response) => {
          authenticating(response.data.phone_number);
          console.log('successfully received response after sending phone number', response);
        })
        .catch((err) => {
          console.error('failed to send phone number to server: ', err);
        });
    } else {
      console.log('error, please check and type in again');
    }
  }

  validateNumberFormatUS(numStr) {
    if (numStr.length === 10) {
      if (!isNaN(parseInt(numStr, 10)) && typeof(parseInt(numStr, 10)) === 'number') {
        return true;
      }
    }
    return false;
  }

  render() {
    const styles = StyleSheet.create({
      inputBox: {
        flexDirection: 'row',
      },
      countryCodeBox: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
      },
      countryCodeText: {
        fontSize: 30,
        textAlign: 'center',
      },
      phoneNumberBox: {
        flex: 5,
      },
      phoneNumberText: {
        fontSize: 30,
      },
      banner: {
        color: '#FF135D',
      },
    });
    return (
      <View>
        <Text style={styles.banner}>ENTER YOUR PHONE NUMBER TO LOG IN</Text>
        <View style={styles.inputBox}>
          <View style={styles.countryCodeBox}>
            <Text style={styles.countryCodeText}>{this.state.countryCode}</Text>
          </View>
          <View style={styles.phoneNumberBox}>
            <TextInput
              style={{ fontSize: 30, height: 40, borderColor: 'black', borderWidth: 1 }}
              onChangeText={phoneNumber => this.setState({ phoneNumber })}
              value={this.state.phoneNumber}
              maxLength={10}
            />
          </View>
        </View>
        <Button
          onPress={this.sendPhoneNumber}
          title="Next"
          color="#FF135D"
          backgroundColor="black"
        />
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

export default connect(mapStateToProps, matchDispatchToProps)(PhoneInput);
