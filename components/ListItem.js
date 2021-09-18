import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const ListItem = ({item}) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <View>
          
        </View>
        <Text>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
});

export default ListItem;
