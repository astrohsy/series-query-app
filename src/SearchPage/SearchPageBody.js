import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  Text,
  Card,
  CardItem,
  Body,
  Content,
  Right,
  Left,
  Icon,
  Button,
  Spinner,
  View,
} from 'native-base';
import {observer} from 'mobx-react';
import esStore from '../stores/esStore';

@observer
export default class SearchPageBody extends Component {
  constructor(props) {
    super(props);

    this._onPhrasePress = this._onPhrasePress.bind(this);
  }

  _onPhrasePress(item) {
    this.props.navigation.navigate('SearchDetails', {
      series: item.series,
      episode: item.episode,
      order: item.order,
    });
  }

  render() {
    if (esStore.searchPageLoading) {
      return (
        <Spinner
          color="blue"
          size="large"
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        />
      );
    } else if (esStore.phrases.length == 0) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20, color: '#546E7A'}}>
            No matching phrases!!!
          </Text>
        </View>
      );
    }

    const tmp = esStore.phrases.map((x, i) => (
      <Card key={i} style={styles.cardDesign}>
        <CardItem header bordered style={{height: 15}}>
          <Left>
            <Text
              style={{
                color: '#673AB7',
                marginLeft: 0,
                fontSize: 10,
              }}>
              {x.series}
            </Text>
          </Left>
          <Right>
            <Text
              numberOfLines={1}
              style={{
                color: '#673AB7',
                marginRight: 0,
                fontSize: 10,
              }}>
              {x.episode}
            </Text>
          </Right>
        </CardItem>
        <CardItem button={true} onPress={() => this._onPhrasePress(x)}>
          <Body>
            <Text style={{fontSize: 15}}>{x.phrase}</Text>
          </Body>
        </CardItem>
        <CardItem footer bordered style={{height: 15}}>
          <Left>
            <Button transparent>
              <Icon
                style={{
                  color: '#673AB7',
                  marginRight: 0,
                  fontSize: 17,
                }}
                type="MaterialIcons"
                name="bookmark-border"
              />
            </Button>
          </Left>
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
