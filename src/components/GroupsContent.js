import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

// Components
import GroupsContentTopicEntry from '../components/GroupsContentTopicEntry';
import GroupsContentNameEntry from '../components/GroupsContentNameEntry';
// dummy props:  array of object

const dummyProps = [
  {
    groupName: 'LoopOfficial',
    topics: [
      {
        topicName: 'Chinese',
        id: '1',
      },
      {
        topicName: 'Crypto',
        id: '2',
      },
      {
        topicName: 'Engineering',
        id: '3',
      },
    ],
  },
  {
    groupName: 'LoopAnalytics',
    topics: [
      {
        topicName: 'amplitude',
        id: '4',
      },
      {
        topicName: 'general',
        id: '5',
      },
      {
        topicName: 'googleAnalytics',
        id: '6',
      },
      {
        topicName: 'metricsNeeded',
        id: '7',
      },
    ],
  },
  {
    groupName: 'LoopSideProject',
    topics: [
      {
        topicName: 'react native',
        id: '4',
      },
      {
        topicName: 'general',
        id: '5',
      },
      {
        topicName: 'blockchain',
        id: '6',
      },
      {
        topicName: 'crypto',
        id: '7',
      },
    ],
  },
];

export default class GroupsContent extends Component {
  static navigationOptions = {
    headerLeft: null,
  };

  render() {
    const styles = StyleSheet.create({
      mainContainer: {
        width: '100%',
        height: '100%',
      },
      topicsContainer: {
        width: '100%',
        marginLeft: 10,
      },
    });
    return (
      <View style={styles.mainContainer}>
        {dummyProps.map((group) => {
          return (
            <View>
              <GroupsContentNameEntry groupName={group.groupName} />
              <View style={styles.topicsContainer}>
                {
                  group.topics.map((topic) => {
                    return (
                      <View>
                        <GroupsContentTopicEntry topicName={topic.topicName} />
                      </View>
                    );
                  })
                }
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

