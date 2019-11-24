import React, {Component} from 'react';

import SearchPageHeader from './SearchPageHeader';
import SearchPageBody from './SearchPageBody';
import {Container} from 'native-base';
import {StatusBar} from 'react-native';

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#ff0000"
        />
        <SearchPageHeader navigation={this.props.navigation} />
        <SearchPageBody navigation={this.props.navigation} />
      </Container>
    );
  }
}
