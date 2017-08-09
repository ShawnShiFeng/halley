import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Drawer,
} from 'react-native-material-design';

class NavDrawer extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>from Nav Drawer</Text>
        <Drawer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '70%',
    height: '100%',
  },
});

export default NavDrawer;
