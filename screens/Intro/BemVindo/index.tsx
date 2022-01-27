import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import BotaoPrimario from '../../GeralComponentes/components/BotaoPrimario';
import BotaoSecundario from '../../GeralComponentes/components/BotaoSecundario';

const BemVindo = ( {navigation}: {navigation: any} )  => {

    return (

        <ScrollView style={{backgroundColor: '#fff'}}>

        <View style={styles.container}>



            <View style={{marginTop: '10%', alignItems: 'center',}}>
                <Image source={ require('../../../assets/images/static/04-1.png')} style={styles.image}  />
            </View>

            <View style={{marginTop: '5%'}}>
                <Text style={styles.cabecalho}>BCS Banking</Text>
                <Text style={styles.corpo}>Cria a sua conta no seu BCS Banking</Text>
            </View>
            
            <View style={{flexDirection:'column', flex: 1, maxHeight: '25%', marginTop: '10%'}}>
                
                <BotaoPrimario
                    onPress={()=>{
                        navigation.navigate("Cadastro");
                    }}
                    style={styles.button}
                    titulo={"Criar Uma Conta"}/>

                <BotaoSecundario
                    onPress={()=>{
                        navigation.navigate("Cadastro");
                    }}
                    style={styles.buttonSecundario}
                    titulo={"Acessar Minha Conta"}/>

            </View>                
            


        </View>

        </ScrollView>

    )
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        alignItems: 'stretch',
        backgroundColor: '#FFF'
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
    buttonSecundario:{
        marginTop: '2%',
        marginBottom: '10%',
    },
    image:{
        width: '120%',
        height: 250
    }
});


export default BemVindo;