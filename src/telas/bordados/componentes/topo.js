import React from "react";
import { Image, StyleSheet, Dimensions } from 'react-native';

import Texto from '../../../componentes/texto';
import tela0 from '../../../../assets/tela0.jpeg';


const width = Dimensions.get('screen').width;

export default function Topo ( {titulo}){
    return<>
        <Image source = {tela0} style={estilos.tela0}/>
        <Texto style={estilos.titulo}>{ titulo }</Texto>
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

}})