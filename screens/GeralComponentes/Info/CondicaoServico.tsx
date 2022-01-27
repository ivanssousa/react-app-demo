import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import BotaoPrimario from '../components/BotaoPrimario';
import BotaoTerceario from '../components/BotaoTerceario';

const imageTop = require('../../../assets/images/static/logo.jpg');


export default function CondicaoServico( props:any ) {
    return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#ccc', height: '100%'}}>
                <View style={styles.container}>
                
                    <View style={{marginTop: '5%', alignItems: 'center',}}>
                        <Image source={ imageTop } style={styles.image}  />
                    </View>

                    <View style={{marginTop: '7%'}}>
                        <Text style={styles.cabecalho}>Bem Vindo Ao BCS Banking</Text>
                        <Text style={styles.corpo}>
                            Ao clicar em prosseguir você concorda com todos os termos e condições impostos pela nossa aplicação e serviçõs. 
                        </Text>
                        <Text style={styles.corpo1} onPress={()=>{
                            alert("Termos e Condições de Serviços");
                        }}>
                            Termos e condições de Serviços
                        </Text>

                    </View>

                    <BotaoPrimario
                        onPress={props.permitir}
                        style={styles.button, {marginTop:'10%',}}
                        titulo={"Aceitar Termos e Condições"}/>

                    <BotaoTerceario
                        onPress={props.recusar}
                        style={styles.button}
                        titulo={"Recusar Termos"}/>

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
        fontSize: 20,
        width: '100%',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: '20%',
    },
    corpo:{
        fontWeight:'900',
        fontSize: 16,
        marginHorizontal:'20%',
        marginTop: '8%',
        textAlign:'center',
        lineHeight: 27
    },
    corpo1:{
        fontWeight:'bold',
        fontSize: 16,
        marginHorizontal:'20%',
        marginTop: '5%',
        textAlign:'center',
        lineHeight: 27,
        textDecorationLine:'underline'
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
        width: '100%',
        height: 250
    }
});
 