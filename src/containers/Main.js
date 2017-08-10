import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  TabNavigator,
} from 'react-navigation';

// Components
import Groups from '../components/Groups';
import Messages from '../components/Messages';
import Profile from '../components/Profile';

class Main extends Component {
  static navigationOptions = {
    headerLeft: null,
    tabBarLabel: 'Main',
  }
  render() {
    return (
      <View>
        <Text>from Main</Text>
      </View>
    );
  }
}

const TabNav = TabNavigator({
  Groups: { screen: Groups },
  Messages: { screen: Messages },
  Profile: { screen: Profile },
});

export default TabNav;
