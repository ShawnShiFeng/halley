import React, { Component } from 'react';
import { Button } from 'react-native-material-ui';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#342545',
    position: 'absolute',
    top: 0,
    height: '6%',
    width: '100%',
  },
  header: {
    height: '100%',
    width: '100%',
  },
  drawerButton: {
    backgroundColor: 'white',
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
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Button
            style={styles.drawerButton}
            primary
            text="opon drawer"
            onPress={() => {
              this.props.navigation.navigate('NavDrawer');
            }}
          />
        </View>
      </View>
    );
  }
}

export default NavBar;
