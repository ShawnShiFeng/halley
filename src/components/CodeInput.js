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
      firstDigit: -1,
      secondDigit: -1,
      thirdDigit: -1,
      fourthDigit: -1,
    };
    this.sendLoopCode = this.sendLoopCode.bind(this);
    this.validateLoopCode = this.validateLoopCode.bind(this);
  }

  sendLoopCode() {
  }

  validateLoopCode (loopCode) {
    // if (numStr.length === 10) {
    //   if (!isNaN(parseInt(numStr, 10)) && typeof(parseInt(numStr, 10)) === 'number') {
    //     return true;
    //   } 
    // }
    // return false;
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
      loopCodeBox: {
        margin: '5%',
        flex: 1,
      },
      loopCodeText: {
        fontSize: 30,
        textAlign: 'center',
      },
    });
    return (
      <View style={styles.container}>
        <Text>VALIDATION CODE</Text>
        <View style={styles.inputBox}>
          <View style={styles.loopCodeBox}>
            <TextInput
              style={{ fontSize: 30, height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={firstDigit => this.setState({ firstDigit })}
              value={this.state.firstDigit}
              maxLength={1}
            />
          </View>
          <View style={styles.loopCodeBox}>
            <TextInput
              style={{ fontSize: 30, height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={secondDigit => this.setState({ secondDigit })}
              value={this.state.secondDigit}
              maxLength={1}
            />
          </View>
          <View style={styles.loopCodeBox}>
            <TextInput
              style={{ fontSize: 30, height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={thirdDigit => this.setState({ thirdDigit })}
              value={this.state.thirdDigit}
              maxLength={1}
            />
          </View>
          <View style={styles.loopCodeBox}>
            <TextInput
              style={{ fontSize: 30, height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={fourthDigit => this.setState({ fourthDigit })}
              value={this.state.fourthDigit}
              maxLength={1}
            />
          </View>
        </View>
        <Text>You should receive an SMS validation code</Text>
        <Text>within 60 seconds.</Text>
        <Button
          onPress={this.sendLoopCode}
          title="Submit"
          color="white"
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
