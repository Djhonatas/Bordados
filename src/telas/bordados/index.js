import React from 'react';
import { FlatList, StyleSheet, View} from 'react-native'

import Texto from '../../componentes/texto';

import Topo from './componentes/topo';
import Detalhes from './componentes/detalhes';
import Item from './componentes/item'

export default function Bordados({topo, detalhes, itens}){

return <>
    <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor ={({ nome }) => nome}
            style ={estilos.lista}
            ListHeaderComponent={()=>{
                return <>
                    <Topo {...topo} />
                    <View style={estilos.bordados}>
                     <Detalhes {...detalhes}/>
                     <Texto style ={ estilos.titulo}>{itens.titulo}</Texto>
                    </View>
                </>           
            }}
        />  
    </>
}

const estilos = StyleSheet.create({    
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    bord:{
        paddingVertical:    10,
        paddingHorizontal:  16,
    },
    lista: {
        paddingHorizontal: 16,
    }
});