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
import {
  updateGroupsJoined,
} from '../actions/group';

// Components
import GroupsContent from './GroupsContent';
import GroupsNavbar from './GroupsNavbar';

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
  }

  componentDidMount() {
    this.getListsGroupsThatUserIsAMemberOf();
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.navBarContainer}>
          <GroupsNavbar />
        </View>
        <View style={styles.groupsContainer}>
          <ScrollView style={styles.scrollView}>
            <GroupsContent />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    group: state.group,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateGroupsJoined,
  }, dispatch);
};
export default connect(mapStateToProps, matchDispatchToProps)(Groups);
