import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-material-ui';
import {
  StackNavigator,
  // DrawerNavigator,
} from 'react-navigation';
import store from './reducers/index';

// Component
import App from './containers/App';
import Login from './components/Login';
import Loading from './components/Loading';
import Main from './containers/Main';
import TabNav from './containers/Main';

// uncomment this to hide simulator warnings
console.disableYellowBox = true;

const uiTheme = {
  palette: {
    primaryColor: '#fff',
  },
  toolbar: {
    container: {
      height: 40,
      width: 350,
    },
  },
};

const FadeTransition = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1],
  });
  return {
    opacity,
  };
};

const TransitionConfiguration = () => {
  return {
    screenInterpolator: (sceneProps) => {
      const { position, scene } = sceneProps;
      const { index, route } = scene;
      return FadeTransition(index, position);
    },
  };
};

class Halley extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hi: 'hi',
    };
  }
  render() {
    const RootNav = StackNavigator({
      Loading: { screen: Loading },
      Login: { screen: Login },
      Main: { screen: TabNav },
      App: { screen: App },
    },
    {
      transitionConfig: TransitionConfiguration,
    });

    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Provider store={store}>
          <RootNav />
        </Provider>
      </ThemeProvider>
    );
  }
}

export default Halley;
