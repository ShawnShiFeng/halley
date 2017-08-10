import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight,
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
        width: '100%',
        height: '95%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
      },
      textArea: {
        flex: 15,
        width: '90%',
        height: '90%',
      },
      submitArea: {
        flexGrow: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
      },
    });

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
                  height: (Math.ceil(event.nativeEvent.text.length / 20) * 35),
                });
              }}
              style={[styles.default, { height: Math.max(35, this.state.height), fontSize: 20 }]}
              value={this.state.text}
            />
          </View>
          <View style={styles.submitArea}>
            <TouchableHighlight onPress={() => this.submitMessage}>
              <Image
                style={{ width: 25, height: 25 }}
                source={require('../../public/ic_send_48pt_2x.png')}
              />
            </TouchableHighlight>
          </View>
        </Card>
      </View>
    );
  }
}
