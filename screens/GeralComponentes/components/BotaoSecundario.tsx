import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function BotaoSecundario(props:any) {
    return (
        <View style={[style.container, props.style]}>
            <TouchableOpacity style={style.button} activeOpacity={0.8} onPress={props.onPress}>
                <Text style={style.texto}>{props.titulo}</Text>
            </TouchableOpacity>
        </View>
    )
}


const style = StyleSheet.create({
    container:{
        flex: 1,
    },
    button:{
        backgroundColor: '#FFF',
        paddingTop: '4%',
        paddingBottom: '4%',
        marginHorizontal: '10%',
        textAlign: 'center',
        borderRadius: 25,
        borderWidth: 1.5,
        borderColor:'#B39659'
    },
    texto:{
        textAlign: 'center',
        fontSize: 17,
        fontWeight:'400',
        color:'#B39659',
    }
});