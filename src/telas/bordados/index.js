import React from 'react';
import { StyleSheet, View} from 'react-native'

import Topo from './componentes/topo';
import Detalhes from './componentes/detalhes';

export default function Bordados({topo, detalhes}){
    return <>
        <Topo {...topo}/>
    
        <View style={estilos.bord}>
            <Detalhes {...detalhes}/>
        </View>
    </>
}

const estilos = StyleSheet.create({    
    bord:{
        paddingVertical:    8,
        paddingHorizontal:  16,
    },
});