import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';
import axios from 'axios';


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
    // sample number check
    if (this.state.phoneNumber.length >= 9) {
      const data = {
        phone_number: this.state.countryCode + this.state.phoneNumber,
      };
      axios.post('http://127.0.0.1:4000/v1/sessions/code', data)
        .then((response) => {
        // if the number return is the same as the one sent
        // dispatch and store response.data.phone_number to redux
        // redirect to CodeInput page
          console.log('successfully received response after sending phone number', response);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      console.log('error, please check and type in again');
    }
  }

  validateNumberFormatUS (numStr) {
    if (numStr.length === 10) {
      return true;
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
        borderColor: 'gray',
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
      }
    });
    return (
      <View>
        <Text>ENTER YOUR PHONE NUMBER TO LOG IN</Text>
        <View style={styles.inputBox}>
          <View style={styles.countryCodeBox}>
            <Text style={styles.countryCodeText}>{this.state.countryCode}</Text>
          </View>
          <View style={styles.phoneNumberBox}>
            <TextInput
              style={{ fontSize: 30, height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={phoneNumber => this.setState({ phoneNumber })}
              value={this.state.phoneNumber}
              maxLength={10}
            />
          </View>
        </View>
        <Button
          onPress={this.sendPhoneNumber}
          title="Next"
          color="white"
          backgroundColor="black"
        />
      </View>
    );
  }
}

export default PhoneInput;
