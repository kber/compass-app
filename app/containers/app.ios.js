import React, { Component, NavigatorIOS } from 'react-native';

import { Home } from '../constants/routes';
import { setRouter } from '../router';

export default class extends Component {
  componentDidMount() {
    setRouter(this.refs.navigator);
  }

  render() {
    return (
      <NavigatorIOS ref="navigator"
                    style={{flex: 1}}
                    initialRoute={Home()}/>
    );
  }
}
