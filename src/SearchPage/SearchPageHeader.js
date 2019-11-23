import {
  Body,
  Button,
  Header,
  Icon,
  Input,
  Item,
  Left,
  Right,
  Text,
  Title,
} from 'native-base';

import esStore from '../stores/esStore';
import {observer} from 'mobx-react';
import React, {Component} from 'react';
import AppConfig from '../../config.js';

@observer
export default class SearchPageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {isSearching: false, text: ''};

    this._onPressButton = this._onPressButton.bind(this);
    this._onCancelButton = this._onCancelButton.bind(this);
    this._onSearch = this._onSearch.bind(this);
  }

  _onPressButton() {
    this.setState({isSearching: true, text: ''});
  }

  _onCancelButton() {
    this.setState({isSearching: false, text: ''});
  }

  _onSearch() {
    console.log('hello', this.state.text);

    fetch(`${AppConfig.serverHost}/query`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({phrase: this.state.text}),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        esStore.updatePhrases(responseJson.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isSearching) {
      return (
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
              onChangeText={text => this.setState({text: text})}
              value={this.state.text}
              returnKeyType="search"
              autoFocus={true}
              onSubmitEditing={this._onSearch}
            />
            <Button transparent onPress={this._onCancelButton}>
              <Icon type="MaterialIcons" name="clear" />
            </Button>
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      );
    }
    return (
      <Header noLeft>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Sample</Title>
        </Body>
        <Right>
          <Button onPress={this._onPressButton}>
            <Icon name="search" />
          </Button>
          <Button>
            <Icon name="more" />
          </Button>
        </Right>
      </Header>
    );
  }
}
