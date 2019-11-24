import React from 'react';
import {AppRegistry, Image, StatusBar} from 'react-native';
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
} from 'native-base';
const routes = ['Home', 'Search', 'Setting'];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Image
          source={require('../../assets/newyork.jpg')}
          style={{
            height: 160,
            width: '100%',
            alignSelf: 'stretch',
            position: 'absolute',
          }}
        />
        <List
          dataArray={routes}
          keyExtractor={(item, index) => item.toString()}
          contentContainerStyle={{marginTop: 160}}
          renderRow={data => {
            return (
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data)}>
                <Text>{data}</Text>
              </ListItem>
            );
          }}
        />
      </Container>
    );
  }
}
