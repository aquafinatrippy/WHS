import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Home from './views/Home';
import Times from './views/Times';
import {NativeRouter, Route} from 'react-router-native';
import Header from './components/Header';

const App = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/history" component={Times} />
      </View>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  nav: {
    padding: 10,
    backgroundColor: '#F9B4ED',
    display: 'flex',
    alignContent: 'center',
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  navTitle: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    padding: 5,
  },
  navLink: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default App;
