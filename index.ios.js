import { Provider } from 'react-redux';
import React, { AppRegistry, Component } from 'react-native';

import App from './app/containers/app.ios';
import store from './app/store';
import { start } from './app/initializer';

class CompassApp extends Component {
  componentWillMount() {
    start();
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('CompassApp', () => CompassApp);
