import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';
import axios from 'axios';


class PhoneInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '+1',
    };
    this.sendPhoneNumber = this.sendPhoneNumber.bind(this);
  }

  sendPhoneNumber() {
    // sample number check
    if (this.state.phoneNumber.length >= 10) {
      const data = {
        phone_number: this.state.phoneNumber,
      };
      axios.post('/v1/session/code', data)
        .then((response) => {
        // if the number return is the same as the one sent
          console.log('successfully received response after sending phone number', response);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  render() {
    return (
      <View>
        <Text>ENTER YOUR PHONE NUMBER TO LOG IN</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={phoneNumber => this.setState({ phoneNumber })}
          value={this.state.phoneNumber}
        />
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
