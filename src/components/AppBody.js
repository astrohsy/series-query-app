import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Text, Card, CardItem, Body, Content} from 'native-base';
import {observer} from 'mobx-react';
import esStore from '../stores/esStore';

const dataArray = [
  {title: 'First Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Second Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Third Element', content: 'Lorem ipsum dolor sit amet'},
];

@observer
export default class AppBody extends Component {
  constructor(props) {
    super(props);
    this.state = {isSearching: false, text: ''};
  }

  render() {
    const tmp = esStore.phrases.map((x, i) => (
      <Card key={i} style={styles.cardDesign}>
        <CardItem>
          <Body>
            <Text>{x}</Text>
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
