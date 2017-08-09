import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Drawer,
} from 'react-native-material-design';

export default class NavDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: 'sample',
    };
  }


  render() {
    const styles = StyleSheet.create({
      container: {
        width: '100%',
        height: '100%',
      },
    });
    return (
      <View style={styles.container}>
        <Text>from Nav Drawer</Text>
        <Drawer />
      </View>
    );
  }
}
