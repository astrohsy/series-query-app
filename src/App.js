import {Container} from 'native-base';
import React, {Component} from 'react';
import AppBody from './components/AppBody';
import AppHeader from './components/AppHeader';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <AppHeader />
        <AppBody />
      </Container>
    );
  }
}
