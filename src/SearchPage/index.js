import React, {Component} from 'react';

import SearchPageHeader from './SearchPageHeader';
import SearchPageBody from './SearchPageBody';
import {Container} from 'native-base';

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <SearchPageHeader navigation={this.props.navigation} />
        <SearchPageBody navigation={this.props.navigation} />
      </Container>
    );
  }
}
