import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Card,
} from 'react-native-material-design';

export default class DirectMessage extends Component {
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
        width: '100%',
        height: '100%',
      },
    });

    return (
      <View style={styles.mainContainer}>
        <Card style={styles.mainCard}>
          <Text>
            from DM
          </Text>
        </Card>
      </View>
    );
  }
}
