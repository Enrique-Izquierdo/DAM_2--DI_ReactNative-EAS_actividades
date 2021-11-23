import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const images = [
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
];

const localImg = require('./imatges/visualstudio_code-card.png');
export default class App extends Component {
  render() {
    return (
    <View style={styles.container}>
      <View style={styles.contenidor1}>
        <View style={styles.contenidor1_1}>
        <Image style={{borderWidth:2, borderColor:'red'}} width={screenWidth/5} height={screenWidth/5} source={{uri: 'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces'}} />
        </View>
        <View style={styles.contenidor1_2}>          
          <View style={styles.contenidor1_2_1}>
            <View style={styles.contenidor1_2_1_1}>
              <View style={styles.contenidor1_2_1_1_1}></View>
              <View style={styles.contenidor1_2_1_1_2}></View>
            </View>
            <View style={styles.contenidor1_2_1_2}>
              <View style={styles.contenidor1_2_1_2_1}></View>
              <View style={styles.contenidor1_2_1_2_2}></View>
            </View>
            <View style={styles.contenidor1_2_1_3}>
              <View style={styles.contenidor1_2_1_3_1}></View>
              <View style={styles.contenidor1_2_1_3_2}></View>
            </View>
          </View>
          <View style={styles.contenidor1_2_2}></View>
        </View>
      </View>
      <View style={styles.contenidor2}>
        {images.map((item,pos) => {
          return(<Image style={{borderWidth:2, borderColor:'red'}} key={pos} width={screenWidth/4.33} height={screenWidth/4.33} source={{uri: item}} />);
        })}
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: 'red',
    borderColor: 'red',
    borderWidth:3,
    margin: 4,
  },
  contenidor1: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'blue',
    borderWidth:3,
    margin: 4,
  },
  contenidor2: {
    flex: 3,
    flexDirection: 'row',
    flexWrap:'wrap',
    borderColor: 'blue',
    borderWidth:3,
    margin: 4,
  },
  contenidor1_1: {
    flex: 1,    
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth:3,
    margin: 4,
  },
  contenidor1_2: {
    flex: 3,
    flexDirection:'column',
    borderColor: 'black',
    borderWidth:3,
    margin: 4,
  },
  contenidor1_2_1: {
    flex: 1,
    flexDirection:'row',
    borderColor: 'green',
    borderWidth:3,
    margin: 4,
  },
  contenidor1_2_2: {
    flex: 1,
    borderColor: 'green',
    borderWidth:3,
    margin: 4,
  },
  contenidor1_2_1_1: {
    flex: 1,
    borderColor: 'red',
    borderWidth:3,
    margin: 4,
  },
  contenidor1_2_1_2: {
    flex: 1,
    borderColor: 'red',
    borderWidth:3,
    margin: 4,
  },
  contenidor1_2_1_3: {
    flex: 1,
    borderColor: 'red',
    borderWidth:3,
    margin: 4,
  },
  contenidor1_2_1_1_1: {
    flex: 1,
    borderColor: 'blue',
    borderWidth:3,
    margin: 4,
  },
  contenidor1_2_1_1_2: {
    flex: 1,
    borderColor: 'blue',
    borderWidth:3,
    margin: 4,
  },
  contenidor1_2_1_2_1: {
    flex: 1,
    borderColor: 'blue',
    borderWidth:3,
    margin: 4,
  },
  contenidor1_2_1_2_2: {
    flex: 1,
    borderColor: 'blue',
    borderWidth:3,
    margin: 4,
  },
  contenidor1_2_1_3_1: {
    flex: 1,
    borderColor: 'blue',
    borderWidth:3,
    margin: 4,
  },
  contenidor1_2_1_3_2: {
    flex: 1,
    borderColor: 'blue',
    borderWidth:3,
    margin: 4,
  },

  });
