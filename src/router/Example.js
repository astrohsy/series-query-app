import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Example = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: getRandomColor(),
      }}>
      <Text
        style={{
          color: 'white',
          marginRight: 0,
          fontSize: 50,
        }}>
        {navigation.state.routeName}
      </Text>
    </View>
  );
};

export default Example;
