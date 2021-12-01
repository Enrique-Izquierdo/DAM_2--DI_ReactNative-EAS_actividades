import React, {Component} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Capselera } from './src/components/Capselera';
import { Imatges } from './src/components/Imatges';


const localImg = require('./imatges/visualstudio_code-card.png');
export default class App extends Component {
  render() {
    return (
    <View style={styles.container}>
      <Capselera/>
      <Imatges/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // borderColor: 'red',
    // borderWidth: 3,
    margin: 4,
  },
});
