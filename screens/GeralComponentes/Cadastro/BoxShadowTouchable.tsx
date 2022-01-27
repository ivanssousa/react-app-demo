import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

export default function BoxShadowTouchable(props : any) {
    return (
        <View style={[styles.containerButton, props.style]}>
            <TouchableOpacity style={{height: '100%', width: '100%'}} onPress={props.onPress}>
                <View>
                    {props.children}
                </View>
            </TouchableOpacity>
        </View>
    )
}




const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        alignItems: 'stretch',
        backgroundColor: '#FFF'
    },
    containerButton:{
        flexDirection:'column', 
        flex: 1, 
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        maxHeight: '25%', 
        marginTop: '10%',
        marginHorizontal: '8%',
        paddingHorizontal: '5%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    cabecalho:{
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    corpo:{
        fontWeight:'400',
        fontSize: 18,
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '10%',
        textAlign:'center',
    },
    button:{
        marginTop: '10%',
    },
    textInput:{
        marginTop: '10%',
        borderWidth: 1,
        borderColor: '#dddf',
        width: '100%',
        height: 50,
        borderRadius: 10,        
        paddingRight: 20,
        paddingLeft: 20,
        fontSize: 20,
        textAlign: 'center',
    },
    buttonSecundario:{
        marginTop: '2%',
    }
});
