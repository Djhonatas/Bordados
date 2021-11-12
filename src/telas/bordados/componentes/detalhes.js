import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

import Texto from "../../../componentes/texto";

export default function detalhes({nome, imagemCliente, nomeCliente, descricao, preco, botao}){
    return <>
        <Texto style ={estilos.nome}>{nome}</Texto> 
        <View style ={estilos.cliente}>
                <Image source={imagemCliente} style={estilos.imagemCliente} />
                <Texto style ={estilos.nomeCliente}>{nomeCliente}</ Texto> 
        </View>
        <Texto style ={estilos.descricao}> {descricao}</ Texto> 
        <Texto style = {estilos.preco}>{preco}</Texto>

        <TouchableOpacity style = {estilos.botao} onPress={() =>{}}>{/*A tag touch... habilita a opção de opacidade ao clicar no botão do simuldador*/}
            <Texto style = {estilos.textoBotao}>{ botao }</Texto>
        </TouchableOpacity>
       
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
        marginLeft:         10,
        
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
        
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
        
        
    },
    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        lineHeight: 26,
        fontSize: 16,
        fontWeight: "bold",
        
    },
})