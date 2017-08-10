import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';
// import Drawer from 'react-native-drawer';

// Component
import NavBar from '../components/NavBar';
import Signup from '../components/Signup';
import ControlPanel from '../components/ControlPanel';
import NavDrawer from './NavDrawer';
import GroupMessage from '../components/GroupMessage';
import DirectMessage from '../components/DirectMessage';
import ChatBox from '../components/ChatBox';
import Drawer from '../components/Drawer';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  messageBox: {
    top: 0,
    flex: 11.8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatBox: {
    flex: 1.2,
    width: '100%',
  },
});

class App extends Component {
  static navigationOptions = {
    title: 'Welcome',
    headerLeft: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
    };
    this.closeDrawer = this.closeDrawer.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }


  toggleDrawer() {
    this.state.toggled ? this._drawer.close() : this._drawer.open();
  }


  closeDrawer() {
    this.setState({ toggled: false });
  }


  openDrawer() {
    console.log('hi: ', this.state.toggled);
    this.setState({ toggled: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar navigation={this.props.navigation} />
        <Drawer
          open={this.state.toggled}
          type="overlay"
          ref={(ref) => { this._drawer = ref; }}
          content={<View style={{ backgroundColor: 'blue', height: 1000 }} />}
        />
        <View style={styles.messageBox}>
          <DirectMessage />
          {/*<Drawer />*/}
        </View>
        <View style={styles.chatBox}>
          <ChatBox />
        </View>
      </View>
    );
  }
}

export default App;
