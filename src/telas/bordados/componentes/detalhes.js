import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Texto from "../../../componentes/texto";
import tela4 from '../../../../assets/tela4.jpeg';

export default function detalhes(){
    return <>
        <Texto style ={estilos.nome}>Logo Aguia Bordados</Texto> 
        <View style ={estilos.cliente}>
                <Image source={tela4} style={estilos.imagemCliente} />
                <Texto style ={estilos.nomeCliente}>Cleiber Castro</Texto> 
        </View>
        <Texto style ={estilos.descricao}> Bordado feito no ano de 2018 </ Texto> 
        <Texto style = {estilos.preco}>R$ 40,00</Texto>
    </>
}

const estilos = StyleSheet.create({

    nome:{
        color:              "#464646",
        fontSize:           26,
        lineHeight:         42,
        fontWeight:         "bold",
    },
    cliente: {
        flexDirection:      "row",
        paddingVertical:    12,
    },
    imagemCliente:{
        width:              32,
        height:             32,
    },
    nomeCliente:{
        fontSize:           16,
        lineHeight:         26,
        marginLeft:         12,
        
    },
    descricao:{
        color:              "#a3a3a3",
        fontSize:           16,
        lineHeight:         26,
    },
    preco:{
        color:              "#2a9f85",
        fontWeight:         "bold",
        fontSize:           26,
        lineHeight:         42,
        marginTop:          8,
}})