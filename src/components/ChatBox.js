import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Card,
} from 'react-native-material-design';

export default class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: 'sample',
    };
  }
  render() {
    const styles = StyleSheet.create({
      mainContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      mainCard: {
        width: '98%',
        height: '99%',
      },
    });

    return (
      <View style={styles.mainContainer}>
        <Card style={styles.mainCard}>
          <Text>from chat box</Text>
        </Card>
      </View>
    );
  }
}
