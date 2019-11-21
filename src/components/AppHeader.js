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

@observer
export default class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {isSearching: false, text: ''};

    this._onPressButton = this._onPressButton.bind(this);
    this._onCancelButton = this._onCancelButton.bind(this);
    this._onSearch = this._onSearch.bind(this);
  }

  _onPressButton() {
    esStore.increment();
    this.setState({isSearching: true, text: ''});
  }

  _onCancelButton() {
    esStore.increment();
    this.setState({isSearching: false, text: ''});
  }

  _onSearch() {
    console.log('hello', this.state.text);

    fetch('http://192.168.219.198:3000', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({phrase: 'Textual content'}),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
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
            <Icon
              type="MaterialIcons"
              name="clear"
              onPress={this._onCancelButton}
            />
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
          <Button transparent>
            <Icon name="search" onPress={this._onPressButton} />
          </Button>
          <Button transparent>
            <Icon name="more" />
          </Button>
        </Right>
      </Header>
    );
  }
}
