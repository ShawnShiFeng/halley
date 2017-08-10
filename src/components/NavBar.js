import React, { Component } from 'react';
// import { Button } from 'react-native-material-ui';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: '#342545',
    backgroundColor: '#8A2BE2',
    position: 'absolute',
    top: 0,
    height: '7.75%',
    width: '100%',
  },
  header: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerItem: {
    marginRight: 'auto',
  },
  headerItemright: {
    marginRight: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
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
          <View style={styles.headerItem}>
            <TouchableHighlight onPress={() => {this.props.navigation.navigate('NavDrawer');}}>
              <Image
                style={{ width: 40, height: 40, marginLeft: 10 }}
                source={require('../../public/ic_list_white_36dp_2x.png')}
              />
            </TouchableHighlight>
          </View>
          <View style={styles.headerItem}>
            <Text style={styles.headerText}>Group Name</Text>
          </View>
          <View style={styles.headerItemRight}>
            <Text>Noti.</Text>
          </View>
          <View style={styles.headerItemRight}>

          </View>
        </View>
      </View>
    );
  }
}

export default NavBar;
