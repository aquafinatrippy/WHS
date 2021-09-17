import React, {useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import ListItem from '../components/ListItem';

const Home = () => {
  const [items, setItems] = useState([
    {id: 22, text: 'testing'},
    {id: 23, text: 'testingx23'},
  ]);

  return (
    <View>
    
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} />}
      />
    </View>
  );
};

export default Home;
