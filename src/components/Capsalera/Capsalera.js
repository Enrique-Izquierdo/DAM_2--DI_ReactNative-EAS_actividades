import React from 'react';
import {
    Button,
    StyleSheet,
    View,
    Image,
    Dimensions,
} from 'react-native';
import { DadesUsuari } from '../DadesUsuari/DadesUsuari';
const screenWidth = Dimensions.get('window').width;


export class Capsalera extends React.Component {
    render() {
        return (
            <View style={styles.contenedor_Encabezado}>
                <View style={styles.contenedor_Encabezado_Imagen}>
                    <Image style={{ alignSelf: 'center', borderWidth: 0, borderColor: 'red', borderRadius: 60 }} width={screenWidth / 3.8} height={screenWidth / 3.8} source={{ uri: 'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces' }} />
                </View>
                <View style={styles.contenidor_Encabezado_PanelInformacionEdicion}>
                    <View style={styles.contenidor_Encabezado_PanelInformacion}>
                        <DadesUsuari titol='Posts' valor='20'/>
                        <DadesUsuari titol='Followers' valor='110304'/> 
                        <DadesUsuari titol='Followings' valor='1103'/>
                    </View>
                    <View style={styles.contenedor_Encabezado_PanelEdicion}>
                        <Button title="Edit Profile" color="grey" />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  contenedor_Encabezado: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    margin: 4,
  },
  contenedor_Encabezado_Imagen: {
    flex: 1,
    maxHeight:screenWidth/3.5,    
    borderColor: 'black',
    borderWidth: 0,
    margin: 4,
  },
  contenidor_Encabezado_PanelInformacionEdicion: {
    flex: 2,
    flexDirection:'column',    
    maxHeight:screenWidth/3.5,
    borderColor: 'black',
    borderWidth: 0,
    margin: 4,
  },
  contenidor_Encabezado_PanelInformacion: {
    flex: 1,
    flexDirection:'row',
  },
  contenedor_Encabezado_PanelEdicion: {
    flex: 1,
    justifyContent: 'center',
  },
});