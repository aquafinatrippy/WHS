import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const ListItem = ({item}) => {
  return (
    <TouchableOpacity>
      <View>
        <Text>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
