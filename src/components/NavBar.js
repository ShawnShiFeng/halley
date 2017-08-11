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
    backgroundColor: '#FF135D',
    position: 'absolute',
    top: 0,
    height: '100%',
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
            <TouchableHighlight onPress={this.props.openDrawer}>
              <Image
                style={{ width: 33, height: 33}}
                source={require('../../public/ic_list_white_36dp_2x.png')}
              />
            </TouchableHighlight>
          </View>
          <View style={styles.headerItem}>

              <Text style={styles.headerText}>Topic Chat</Text>
          </View>
          <View style={styles.headerItemRight}>
          </View>
          <View style={styles.headerItemRight}>
            <TouchableHighlight onPress={() => { this.props.navigation.navigate('NavDrawer'); }}>
              <Image
                style={{ width: 25, height: 25, marginRight: 5 }}
                source={require('../../public/ic_more_vert_white.png')}
              />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

export default NavBar;

          //  {this.props.topicInfo.topicName
          //     ? <Text style={styles.headerText}>
          //       {this.props.topicInfo.topicName}
          //     </Text> : <Text style={styles.headerText}>Topic Chat</Text>}