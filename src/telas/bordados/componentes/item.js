import React from 'react';
import { Image, View, StyleSheet, FlatList } from 'react-native';

import Texto from '../../../componentes/texto';

export default function Item({ item: {nome, imagem }}){

    return <View style = {estilos.item}>
        <Image source={imagem} style={estilos.imagem}/>
        <Texto style={estilos.nome}>{nome}</Texto>
    </View>
}

const estilos = StyleSheet.create({
    
    item:{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",
    },
    imagem: {
        width: 200,
        height: 200,
        marginLeft: 10

    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        fontWeight: "bold",
        color: "#464646"

    }
});

  