import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BotaoPrimario(props:any) {
    return (
        <View style={[style.container, props.style]}>
            <TouchableOpacity style={[style.button, props.buttonProps]} activeOpacity={0.8} onPress={props.onPress}>
                <Text style={style.texto}>{props.titulo}   {props.icon ? <Ionicons size={25} name={props.icon}/>: <></>}</Text>
            </TouchableOpacity>
        </View>
    )
}


const style = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
    },
    button:{
        backgroundColor: '#B39659',
        paddingTop: '4%',
        paddingBottom: '4%',
        marginHorizontal: '10%',
        textAlign: 'center',
        borderRadius: 25,
    },
    texto:{
        textAlign: 'center',
        fontSize: 17,
        fontWeight:'400',
        color:'#fff',
    }
});