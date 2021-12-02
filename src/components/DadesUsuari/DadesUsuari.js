import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';


export class DadesUsuari extends React.Component {
    render(){
        return(
            <View style={styles.contenidor_Encab_PanelInfo_ItemDadesUsuari}>
                <Text style={styles.contenidor_Encab_PanelInfo_ItemTitol}>{this.props.titol}</Text>
                <Text style={styles.contenidor_Encab_PanelInfo_ItemValor}>{this.props.valor}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    contenidor_Encab_PanelInfo_ItemDadesUsuari: {
      flex: 1,
    },
    contenidor_Encab_PanelInfo_ItemTitol: {
      flex: 1,
      color: 'black',
    },
    contenidor_Encab_PanelInfo_ItemValor: {
      flex: 1,
      color: 'blue',
    },  
});