import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'


import BotaoPrimario from '../components/BotaoPrimario';
import BotaoTerceario from '../components/BotaoTerceario';

const imageTop = require('../../../assets/images/icon.png');

export default function ImpressaoDigital( props:any ) {
    return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#ccc', height: '100%'}}>
                <View style={styles.container}>
                
                    <View style={{marginTop: '10%', alignItems: 'center',}}>
                        <Image source={ require('../../../assets/images/icon.png')} style={styles.image}  />
                    </View>

                    <View style={{marginTop: '5%'}}>
                        <Text style={styles.cabecalho}>Identidade</Text>
                        <Text style={styles.corpo}>
                            Inserir impressão digital.
                        </Text>
                    </View>

                    <View style={{marginTop: '5%', alignItems: 'center',}}>
                        <Image source={ require('../../../assets/images/icon.png')} style={styles.image}  />
                    </View>


                    <BotaoPrimario
                        onPress={props.permitir}
                        style={styles.button, {marginTop: '10%',}}
                        titulo={"Continuar"}/>

                    <BotaoTerceario
                        onPress={props.recusar}
                        style={styles.button, {marginTop: '2%',}}
                        titulo={"Agora Não"}/>

                </View>
            </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        alignItems: 'stretch',
        backgroundColor: '#FFF',
        paddingBottom: '10%',
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
        marginTop: '3%',
        textAlign:'center',
    },
    button:{
        marginBottom: '0%',
        flex: 1,
        marginTop: '5%',
        justifyContent: 'flex-end',
        width: '100%',
    },
    textInput:{
        marginTop: '10%',
        marginLeft: '2.1%',
        borderBottomWidth: 1,
        borderColor: '#dddf',
        height: 50,
        borderRadius: 10,        
        paddingRight: 15,
        paddingLeft: 15,
        fontSize: 20,
        textAlign: 'center',
    },
    buttonSecundario:{
        marginTop: '2%',
    },
    image:{
        width: 200,
        height: 200
    }
});
