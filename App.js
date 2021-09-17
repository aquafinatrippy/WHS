import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Home from './views/Home';
import Times from './views/Times';
import {NativeRouter, Route, Link} from 'react-router-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

const App = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Text style={styles.navTitle}>Work Hours Manager</Text>
          <View style={styles.links}>
            <TouchableOpacity>
              <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
                <Text style={styles.navLink}>
                  <Icon name="home" size={20} />
                </Text>
              </Link>
            </TouchableOpacity>
            <Link to="/history" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text style={styles.navLink}>
                <Icon name="calendar-plus" size={20} />
              </Text>
            </Link>
          </View>
        </View>
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
