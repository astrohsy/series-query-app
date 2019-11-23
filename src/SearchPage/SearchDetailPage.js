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
} from 'native-base';
import {observer} from 'mobx-react';
import esStore from '../stores/esStore';
import AppConfig from '../../config';

@observer
export default class SearchDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phrases: [],
    };
  }

  componentDidMount() {
    const {navigation} = this.props;
    const requestDetail = {
      series: navigation.getParam('series', 'NO-ID'),
      episode: navigation.getParam('episode', 'NO-ID'),
      order: navigation.getParam('order', 'NO-ID'),
    };
    fetch(`${AppConfig.serverHost}/detail`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestDetail),
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({phrases: responseJson.data});
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const {navigation} = this.props;
    const order = navigation.getParam('order', 0);

    const tmp = this.state.phrases.map((x, i) => (
      <Card key={i} style={styles.cardDesign}>
        {x.order === order ? (
          <CardItem bordered style={{height: 10, backgroundColor: '#673AB7'}}>
            <Left>
              <Text
                style={{
                  color: 'white',
                  marginLeft: 0,
                  fontSize: 10,
                }}>
                {x.order}
              </Text>
            </Left>
          </CardItem>
        ) : (
          <CardItem bordered style={{height: 10}}>
            <Left>
              <Text
                style={{
                  color: '#673AB7',
                  marginLeft: 0,
                  fontSize: 10,
                }}>
                {x.order}
              </Text>
            </Left>
          </CardItem>
        )}

        <CardItem>
          <Body>
            <Text style={{fontSize: 15}}>{x.phrase}</Text>
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
