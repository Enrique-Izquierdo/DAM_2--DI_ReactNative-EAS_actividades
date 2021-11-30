import React, {Component} from 'react';
import {
  Button,
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
      <View style={styles.contenedor_Encabezado}>
       <View style={styles.contenedor_ImagenPerfil}>
          <Image style={{alignSelf:'center' ,borderWidth:2, borderColor:'red'}} width={screenWidth/5} height={screenWidth/5} source={{uri: 'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces'}} />
        </View>   
        <View style={styles.contenedor_PanelControlPerfil}>          
          <View style={styles.contenidor_InformacionPerfil}>
            <View style={styles.contenidor_PostsPerfil}>
              {/* <View style={styles.contenidor_NombreEtiqueta}> */}
                <Text style={styles.contenidor_NombreEtiqueta}>Posts</Text>
              {/* </View> */}
              {/* <View style={styles.contenidor_ValorEtiqueta}> */}
                <Text style={styles.contenidor_ValorEtiqueta}>20</Text>
              {/* </View> */}
            </View>
            <View style={styles.contenidor_FollowersPerfil}>
              {/* <View style={styles.contenidor_NombreEtiqueta}> */}
                <Text style={styles.contenidor_NombreEtiqueta}>Followers</Text>
              {/* </View> */}
              {/* <View style={styles.contenidor_ValorEtiqueta}> */}
                <Text style={styles.contenidor_ValorEtiqueta}>110304</Text>
              {/* </View> */}
            </View>
            <View style={styles.contenidor_FollowingsPerfil}>
              {/*<View style={styles.contenidor_NombreEtiqueta}>*/}
                <Text style={styles.contenidor_NombreEtiqueta}> Followings</Text>
              {/*</View>*/}
              {/*<View style={styles.contenidor_ValorEtiqueta}>*/}
                <Text style={styles.contenidor_ValorEtiqueta}>1103</Text>
              {/*</View>*/}
            </View>
          </View>
          <View style={styles.contenedor_BotonPerfil}>
            <Button title="Edit Profile" color="grey" />
          </View>
        </View>
      </View>
      <View style={styles.contenedor_Fotos}>
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
    // borderColor: 'red',
    // borderWidth:3,
    // margin: 4,
  },
  contenedor_Encabezado: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    // justifyContent:'center',
    // borderColor: 'blue',
    // borderWidth:3,
    // margin: 4,
  },
  contenedor_Fotos: {
    flex: 3,
    flexDirection: 'row',
    flexWrap:'wrap',
    // borderColor: 'blue',
    // borderWidth:3,
    // margin: 4,
  },
  contenedor_ImagenPerfil: {
    flex: 1,    
    // alignSelf:'center',
    // justifyContent:'center',
    // alignSelf:'center',    
    borderColor: 'black',
    borderWidth:3,
    margin: 4,
  },
  contenedor_PanelControlPerfil: {
    flex: 3,
    flexDirection:'column',
    borderColor: 'black',
    borderWidth:3,
    margin: 4,
  },
  contenidor_InformacionPerfil: {
    flex: 1,
    flexDirection:'row',
    borderColor: 'green',
    borderWidth:3,
    margin: 4,
  },
  contenedor_BotonPerfil: {
    flex: 1,
    justifyContent: 'center',
    borderColor: 'green',
    borderWidth:3,
    margin: 4,
  },
  contenidor_PostsPerfil: {
    flex: 1,
    borderColor: 'red',
    borderWidth:3,
    margin: 4,
  },
  contenidor_FollowersPerfil: {
    flex: 1,
    borderColor: 'red',
    borderWidth:3,
    margin: 4,
  },
  contenidor_FollowingsPerfil: {
    flex: 1,
    borderColor: 'red',
    borderWidth:3,
    margin: 4,
  },
  contenidor_NombreEtiqueta: {
    flex: 1,
    borderColor: 'blue',
    borderWidth:3,
    margin: 4,
  },
  contenidor_ValorEtiqueta: {
    flex: 1,
    borderColor: 'blue',
    borderWidth:3,
    margin: 4,
  },  

  });
