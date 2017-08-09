import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-material-ui';
import { StackNavigator } from 'react-navigation';
import store from './reducers/index';

// Component
import App from './containers/App';
import Login from './components/Login';
import Signup from './components/Signup';
import Loading from './components/Loading';
import NavBar from './components/NavBar';
import NavDrawer from './containers/NavDrawer';

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
      App: { screen: App },
      Login: { screen: Login },
      Signup:{ screen: Signup },
      NavBar: { screen: NavBar },
      NavDrawer: { screen: NavDrawer },
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
