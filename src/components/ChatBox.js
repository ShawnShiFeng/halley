import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import {
  Card,
} from 'react-native-material-design';

export default class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      height: 0,
    };
  }
  render() {
    const styles = StyleSheet.create({
      mainContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8A2BE2',
      },
      mainCard: {
        width: '98%',
        height: '95%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      textArea: {
        width: '90%',
        height: '90%',
      }
    });

                  // height: event.nativeEvent.contentSize.height,
    return (
      <View style={styles.mainContainer}>
        <Card style={styles.mainCard}>
          <View style={styles.textArea}>
            <TextInput
              multiline
              defaultValue="message"
              onChange={(event) => {
                this.setState({
                  text: event.nativeEvent.text,
                });
              }}
              style={[styles.default, {height: Math.max(35, this.state.height)}]}
              value={this.state.text}
            />
          </View>
        </Card>
      </View>
    );
  }
}
