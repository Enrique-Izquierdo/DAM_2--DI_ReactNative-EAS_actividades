/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

//Importamos clases de la librería 'react-native-paper'
import { Appbar, Provider, TextInput } from 'react-native-paper';


const App: () => Node = () => {
  return (
    <Provider>
      <StatusBar barStyle='#222' />
      <ScrollView>
        <Text style={styles.TitolRoig}>Benvinguts a React Native</Text>
        <Text style={styles.TitolBlau}>Este serà el primer exercici que fem.</Text>
        <Text style={styles.FontNormal}>normal</Text>
        <Text style={styles.FontNotoserif}>notoserif</Text>
        <Text style={{fontFamily: 'sans-serif', fontSize: 20}}>sans-serif</Text>
        <TextInput label='email' placeholder='Introdueix una adreça de correu electrònic' secureTextEntry={true}></TextInput>
      </ScrollView>
      <Appbar style={styles.bottom}>
        <Appbar.Action
          icon="airballoon"
          onPress={() => console.log('Pressed archive')}
        />
        <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
        <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
        <Appbar.Action
          icon="delete"
          onPress={() => console.log('Pressed delete')}
        />
      </Appbar>
    </Provider>
  );
};

const styles = StyleSheet.create({
  TitolRoig: {
    color: 'red',
    fontSize: 24,
  },
  TitolBlau: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  FontNormal: {
    fontFamily: 'normal',
    fontSize: 20,
  },
  FontNotoserif: {
    fontFamily: 'notoserif',
    fontSize: 20,
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default App;
