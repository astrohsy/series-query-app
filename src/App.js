import {Container} from 'native-base';
import React, {Component} from 'react';

import MyApp from './router/index';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MyApp />;
  }
}
