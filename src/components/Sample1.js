import React from 'react';
import { StackNavigator } from 'react-navigation';
import {
  View,
  Text,
  Button,
} from 'react-native';

class Sample1 extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>from Sample1</Text>
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Sample2', { name: 'Jane' })}
        />
      </View>
    );
  }
}

export default Sample1;
