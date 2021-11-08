import React from 'react';
import {StyleSheet, Image, Dimensions, Text, View} from 'react-native'

import Texto from '../componentes/texto'

import tela0 from '../../assets/tela0.jpeg';
import tela4 from '../../assets/tela4.jpeg';

const width = Dimensions.get('screen').width

export default function Bordados(){
    return <>
    <Image source = {tela0} style={estilos.tela0}/>
    <Texto style={estilos.titulo}>Águia Bordados</Texto>
    
    <View style={estilos.bord}>
        <Text style ={estilos.nome}>Logo Aguia Bordados</Text> 
        <View style ={estilos.cliente}>
            <Image source={tela4} style={estilos.imagemCliente} />
            <Text style ={estilos.nomeCliente}>Cleiber Castro</Text> 
        </View>
        <Texto style ={estilos.descricao}> Bordado feito no ano de 2018 </ Texto> 
        <Text style = {estilos.preco}>R$ 40,00</Text>
    </View>
    </>
}
const estilos = StyleSheet.create({
    tela0: {
        width:              "100%",
        height:             183 / 275 * width,
    },
    titulo: {
        width:              "100%",
        position:           "absolute",
        color:              "white",
        textAlign:          "center",
        fontSize:           16,
        lineHeight:         26,
        fontWeight:         "bold",
        padding:            16,

    },
    bord:{
        paddingVertical:    8,
        paddingHorizontal:  16,
    },
    nome:{
        color:              "#464646",
        fontSize:           26,
        lineHeight:         42,
        fontFamily:"MontserratBold",
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
        fontFamily:"MontserratRegular",
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

    }
});