import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Text, Card, CardItem, Body, Content} from 'native-base';

const dataArray = [
  {title: 'First Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Second Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Third Element', content: 'Lorem ipsum dolor sit amet'},
];

export default class AppBody extends Component {
  constructor(props) {
    super(props);
    this.state = {isSearching: false, text: ''};

    for (var i = 0; i < 100; i++) {
      dataArray.push({
        title: i,
        content: '1',
      });
    }
  }

  render() {
    const tmp = dataArray.map(x => (
      <Card key={x.title} style={styles.cardDesign}>
        <CardItem>
          <Body>
            <Text>{x.title}</Text>
          </Body>
        </CardItem>
      </Card>
    ));
    return <ScrollView>{tmp}</ScrollView>;
  }
}

const styles = StyleSheet.create({
  cardDesign: {
    marginLeft: 5,
    marginRight: 5,
  },
});
