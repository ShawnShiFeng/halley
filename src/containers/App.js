import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  StyleSheet,
  View,
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
import GroupMessage from '../components/GroupMessage';
import DirectMessage from '../components/DirectMessage';
import ChatBox from '../components/ChatBox';
// import Drawer from '../components/Drawer';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF135D',
  },
  navBarContainer: {
    flex: 1,
    width: '100%',
  },
  messageBoxContainer: {
    flex: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatBoxContainer: {
    flex: 1,
    width: '100%',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#FF135D',
    marginBottom: 5,
  },
});

class App extends Component {
  static navigationOptions = {
    title: 'Welcome',
    // headerLeft: null,
  };
  constructor(props) {
    super(props);

    this.state = {
      drawerType: 'overlay',
      openDrawerOffset:.3,
      closedDrawerOffset:0,
      panOpenMask: .1,
      panCloseMask: .9,
      relativeDrag: false,
      // panStartCompensation: true,
      // openDrawerThreshold: .25,
      tweenHandlerOn: false,
      tweenDuration: 550,
      tweenEasing: 'easeInOutQuad',
      disabled: false,
      tweenHandlerPreset: null,
      acceptDoubleTap: true,
      acceptTap: true,
      acceptPan: true,
      rightSide: false,
      showView: true,
    };

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
    };

    this.getListUsersInAGroup = () => {
      // local end point: http://127.0.0.1:4000/v1/groups/:id/users
      const url = `http://127.0.0.1:4000/v1/groups/${user.id}/users`;
      axios.get(url)
        .then((response) => {
          console.log('successfully fetched list of users in a particular group ', response);
        })
        .catch((error) => {
          console.error('failed to get list of users in a particular group ', error);
        });
    };

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
    };

    this.setDrawerType = (type) => {
      this.setState({
        drawerType: type
      });
    };

    this.openDrawer = () => {
      this.refs.drawer.open();
    };

    this.closeDrawer = () => {
      this.refs.drawer.close();
    };

    this.setStateFrag = (frag) => {
      this.setState(frag);
    };

    this.submitMessage = (text, topic_id) => {
      console.log('message to be sent: ', text, 'id: ', topic_id);
      this.sendMessageOut(text, topic_id);
    };

    this.sendMessageOut = (message, topic_id) => {
      const url = `http://127.0.0.1:4000/v1/topics/${topic_id}/messages`;
      const data = {
        text: message,
      };
      axios.post(url, data)
        .then((response) => {
          console.log('successfully sent one messsage ', response);
        })
        .catch((error) => {
          console.error('failed to send message ', error);
        });
    }



  }


  componentDidMount() {
    // this.refreshJWT();
    // this.getListOfGroupsCurrentUserIsInvolved();
  }

  render() {
    const drawerStyles = {
      drawer: {
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 0,
      },
    };

    return (
      <Drawer
        ref="drawer"
        onClose={this.onClose}
        type={this.state.drawerType}
        animation={this.state.animation}
        openDrawerOffset={this.state.openDrawerOffset}
        closedDrawerOffset={this.state.closedDrawerOffset}
        panOpenMask={this.state.panOpenMask}
        panCloseMask={this.state.panCloseMask}
        relativeDrag={this.state.relativeDrag}
        content={<ControlPanel />}
        styles={drawerStyles}
        disabled={this.state.disabled}
        tweenHandler={this.tweenHandler}
        tweenDuration={this.state.tweenDuration}
        tweenEasing={this.state.tweenEasing}
        acceptDoubleTap={this.state.acceptDoubleTap}
        acceptTap={this.state.acceptTap}
        acceptPan={this.state.acceptPan}
        changeVal={this.state.changeVal}
        negotiatePan={false}
        side={this.state.rightSide ? 'right' : 'left'}
      >
        <View style={styles.container}>
          <View style={styles.navBarContainer}>
            <NavBar
              topicInfo={this.props.navigation.state.params}
              navigation={this.props.navigation}
              openDrawer={this.openDrawer}
            />
          </View>
          <View style={styles.messageBoxContainer}>
            <GroupMessage
              topicInfo={this.props.navigation.state.params}
              messages={this.props.message.messages}
            />
          </View>
          <View style={styles.chatBoxContainer}>
            <ChatBox
              topicInfo={this.props.group}
              submitMessage={this.submitMessage}
            />
          </View>
        </View>
      </Drawer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    session: state.session,
    user: state.user,
    message: state.message,
    group: state.group,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateUserProfile,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(App);
