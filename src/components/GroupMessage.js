import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Card,
} from 'react-native-material-design';

export default class GroupMessage extends Component {
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
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      },
      mainCard: {
        width: '98%',
        height: '98%',
      },
    });

    return (
      <View style={styles.mainContainer}>
        <Card style={styles.mainCard}>
          <Text>
            from GM
          </Text>
        </Card>
      </View>
    );
  }
}
