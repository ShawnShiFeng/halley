import React, { Component } from 'react';
import { Button } from 'react-native-material-ui';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    position: 'absolute',
    top: 0,
    height: '6%',
    width: '100%',
  },
  drawerButton: {
    left: '3px',
    backgroundColor: 'white',
    position: 'absolute',
  },
});


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      example: 'example',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          style={styles.drawerButton}
          primary
          text="opon drawer"
          onPress={() => {
            this.props.navigation.navigate('NavDrawer');
          }}
        />
      </View>
    );
  }
}

export default NavBar;
