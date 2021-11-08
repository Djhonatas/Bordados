import React from 'react';
import { StyleSheet, View} from 'react-native'

import Topo from './componentes/topo';
import Detalhes from './componentes/detalhes';

export default function Bordados(){
    return <>
        <Topo />
    
        <View style={estilos.bord}>
            <Detalhes />
        </View>
    </>
}

const estilos = StyleSheet.create({    
    bord:{
        paddingVertical:    8,
        paddingHorizontal:  16,
    },
});