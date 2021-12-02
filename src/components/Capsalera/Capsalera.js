import React from 'react';
import {
    Button,
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
} from 'react-native';
const screenWidth = Dimensions.get('window').width;
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
    contenidor_Encab_PanelInfo_ItemNombreValor: {
      flex: 1,
    },
    contenidor_Encab_PanelInfo_ItemNombre: {
      flex: 1,
    },
    contenidor_Encab_PanelInfo_ItemValor: {
      flex: 1,
    },  
});


export class Capsalera extends React.Component {
    render() {
        return (
            <View style={styles.contenedor_Encabezado}>
                <View style={styles.contenedor_Encabezado_Imagen}>
                    <Image style={{ alignSelf: 'center', borderWidth: 0, borderColor: 'red', borderRadius: 60 }} width={screenWidth / 3.8} height={screenWidth / 3.8} source={{ uri: 'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces' }} />
                </View>
                <View style={styles.contenidor_Encabezado_PanelInformacionEdicion}>
                    <View style={styles.contenidor_Encabezado_PanelInformacion}>
                        <View style={styles.contenidor_Encab_PanelInfo_ItemNombreValor}>
                            <Text style={styles.contenidor_Encab_PanelInfo_ItemNombre}>Posts</Text>
                            <Text style={styles.contenidor_Encab_PanelInfo_ItemValor}>20</Text>
                        </View>
                        <View style={styles.contenidor_Encab_PanelInfo_ItemNombreValor}>
                            <Text style={styles.contenidor_Encab_PanelInfo_ItemNombre}>Followers</Text>
                            <Text style={styles.contenidor_Encab_PanelInfo_ItemValor}>110304</Text>
                        </View>
                        <View style={styles.contenidor_Encab_PanelInfo_ItemNombreValor}>
                            <Text style={styles.contenidor_Encab_PanelInfo_ItemNombre}> Followings</Text>
                            <Text style={styles.contenidor_Encab_PanelInfo_ItemValor}>1103</Text>
                        </View>
                    </View>
                    <View style={styles.contenedor_Encabezado_PanelEdicion}>
                        <Button title="Edit Profile" color="grey" />
                    </View>
                </View>
            </View>
        );
    }
}

