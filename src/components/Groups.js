import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import { Socket } from 'phoenix';
import {
  StackNavigator,
} from 'react-navigation';
import {
  updateGroupsJoined,
  updateCurrentTopicId,
} from '../actions/group';
import {
  updateMessages,
} from '../actions/message';

// Components
import GroupsContent from './GroupsContent';
import GroupsNavbar from './GroupsNavbar';
import App from '../containers/App';

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  navBarContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCDC',
    height: '20%',
  },
  groupsContainer: {
    alignItems: 'flex-end',
    marginLeft: 20,
    // borderWidth: 1,
  },
  scrollView: {
    width: '100%',
  },
  mainContainer: {
    marginTop: 16,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    // borderWidth: 1,
  },
});

class Groups extends Component {
  static navigationOptions = {
    header: null,
    headerLeft: null,
    tabBarLabel: 'Groups',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../public/ic_message_black_48dp.png')}
        style={[styles.icon, { tintColor }]}
      />
    ),
  }
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
          this.props.updateGroupsJoined(response.data.groups);
          console.log('successfully fetched list of groups current user is involved in ', response);
        })
        .catch((error) => {
          console.error('failed to get list of groups current user is involved in ', error);
        });
    };

    this.getListUsersInAGroup = () => {
      // local end point: http://127.0.0.1:4000/v1/groups/:id/users
      const url = `http://127.0.0.1:4000/v1/groups/${group.groups.id}/users`;
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

    this.getListsAllGroupsAndTopics = () => {
      axios.get('http://127.0.0.1:4000/v1/topics')
        .then((response) => {
          this.sortGroupsAndTopics(response.data.topics);
          console.log('successfully fetched lists of all groups and all topics ', response);
        })
        .catch((error) => {
          console.error('failed to get lists of all groups and all topics ', error);
        });
    };

    this.sortGroupsAndTopics = (arr) => {
      let array = [];
      let finalObj = {};
      let finalArr = [];
      for (let i = 0; i < arr.length; i += 1) {
        let obj = {};
        let temp = {};
        obj.topics = [];
        obj.groupName = arr[i].group.name;
        obj.groupId = arr[i].group_id;
        obj.topics[0] = { topicName: arr[i].name, id: arr[i].id, },
        temp.obj = obj;
        temp.name = obj.groupName;
        array.push(temp);
      }
      for (let j = 0; j < array.length; j += 1) {
        if (finalObj.hasOwnProperty(array[j].name)) {
          finalObj[array[j].name].topics.push(array[j].obj.topics[0]);
        } else {
          finalObj[array[j].name] = array[j].obj;
        }
      }
      for (let key in finalObj){
        finalArr.push(finalObj[key]);
      };
      this.props.updateGroupsJoined(finalArr);
    };

    this.getAllConversation = (topic_id, topicInfo) => {
      const url = `http://127.0.0.1:4000/v1/topics/${topic_id}/messages`;
      axios.get(url)
        .then((response) => {
          let newMessages = response.data.messages.slice();
          newMessages.reverse();
          console.log('newMessages: ', newMessages);
          this.props.updateMessages(newMessages);
          this.props.navigation.navigate('App', { params: topicInfo, messages: this.props.message.messages });
          console.log('successfully fetched all the topic messages: ', response);
        })
        .catch((error) => {
          console.error('failed to fetch messages for a topic: ', error);
        });
    };

    this.onTopicClick = (topicInfo) => {
      // load all the previous messages for that particular topic
      this.getAllConversation(topicInfo.id, topicInfo);
      this.props.updateCurrentTopicId(topicInfo.id);
      // opens a channel for that particular topic
      this.openChannel(this.props.session.socket, topicInfo.id);
      this.getListsAllGroupsAndTopics();
    };

    this.openChannel = (socket, topic_id) => {
      const channel = socket.channel(`topic:${topic_id}`);
      channel.on('message_created', (message) => {
        this.updateTopicMessages(message, topic_id);

      });
      channel.join();
    };

    this.updateTopicMessages = (message, topic_id) => {
      let newMessages = this.props.message.messages;
      newMessages.push(message);
      console.log('message: ', message);
      console.log('messages: ', newMessages);
      this.props.updateMessages(newMessages);
    };
  }



  componentDidMount() {
    this.getListsAllGroupsAndTopics();
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.navBarContainer}>
          <GroupsNavbar />
        </View>
        <View style={styles.groupsContainer}>
          <ScrollView style={styles.scrollView}>
            {this.props.group.groups !== []
              ? <GroupsContent
                groupsAndTopics={this.props.group.groups}
                onTopicClick={this.onTopicClick}
              /> : null}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    group: state.group,
    message: state.message,
    session: state.session,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateMessages,
    updateGroupsJoined,
    updateCurrentTopicId,
  }, dispatch);
};
export default connect(mapStateToProps, matchDispatchToProps)(Groups);
