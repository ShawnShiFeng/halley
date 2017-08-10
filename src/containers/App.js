import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';
import Drawer from 'react-native-drawer';
import axios from 'axios';
import {
  updateUserProfile,
} from '../actions/user';

// Component
import NavBar from '../components/NavBar';
import Signup from '../components/Signup';
import ControlPanel from '../components/ControlPanel';
import NavDrawer from './NavDrawer';
import GroupMessage from '../components/GroupMessage';
import DirectMessage from '../components/DirectMessage';
import ChatBox from '../components/ChatBox';
// import Drawer from '../components/Drawer';


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
    this.refreshJWT = () => {
      axios.get('http://127.0.0.1:4000/v1/sessions/refresh')
        .then((response) => {
          console.log('successfully fetched user infomation! ', response);
        })
        .catch((error) => {
          console.error('failed to get current user infomation', error);
        });
    };

    this.getListsGroupsThatUserIsAMemberOf = () => {
      axios.get('http://127.0.0.1:4000/v1/groups')
        .then((response) => {
          console.log('successfully fetched list of groups current user is involved in ', response);
        })
        .catch((error) => {
          console.error('failed to get list of groups current user is involved in ', error);
        });
    }

    this.getListUsersInAGroup = () => {
      // local end point: http://127.0.0.1:4000/v1/groups/:id/users
      const url = `http://127.0.0.1:4000/v1/groups/${user.id}/users`;
      axios.get(url)
        .then((response) => {
          console.log('successfully fetched list of users in a particular group ', response);
        }
        .catch((error) => {
          console.error('failed to get list of users in a particular group ', error);
        });
    }
  }

  // this request is not yet completed, group id needs to be fetched 
  this.getListsAllGroupTopics = () => {
    // local end point: /v1/groups/:group_id/topics
    const url = `http://127.0.0.1:4000/v1/groups/${group.id}/topics`;
    axios.get(url)
      .then((response) => {
        console.log('successfully fetched lists of all group topics ', response);
      })
      .catch((error) => {
        console.error('failed to get lists of all group topics ', error);
      });
  }

  componentDidMount() {
    // this.refreshJWT();
    // this.getListOfGroupsCurrentUserIsInvolved();
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar navigation={this.props.navigation} />
        <Drawer
          type="overlay"
          ref={(ref) => { this._drawer = ref; }}
          content={<View style={{ backgroundColor: 'blue', height: 1000 }} />}
        />
        <View style={styles.messageBox}>
          <DirectMessage />
        </View>
        <View style={styles.chatBox}>
          <ChatBox />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    session: state.session,
    user: state.user,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateUserProfile,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(App);
