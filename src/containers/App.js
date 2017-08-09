import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {
  StackNavigatior,
} from 'react-navigation';
import NavBar from '../components/NavBar';

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
});

class App extends Component {
  // static navigationOptions = {
  //   title: 'Welcome',
  // };

  render() {
    return (
      <View style={styles.container}>
        <NavBar navigation={ this.props.navigation }/>
        <Text>from App.js</Text>
        <Text style={styles.welcome}>
          Welcome to LOOP!
        </Text>
        <Text style={styles.instructions}>
          set up react native loop client
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

export default App;
