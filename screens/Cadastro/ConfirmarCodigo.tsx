import React from 'react'
import { View, StyleSheet, Text, TextInput, ScrollView, Image} from 'react-native'

import BotaoPrimario from '../GeralComponentes/components/BotaoPrimario';
import BoxShadowContainer from '../GeralComponentes/Cadastro/BoxShadowContainer';
import { SafeAreaView } from 'react-native-safe-area-context';

const image = require('../../assets/images/static/01.png');

export default function ConfirmarCodigo( {navigation}: {navigation: any} ) {
    return (
        <ScrollView style={{backgroundColor: '#fff'}}>
        <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>

            <View style={{marginTop: '10%', alignItems: 'center',}}>
                <Image source={ image } style={styles.image}  />
            </View>

            <View style={{marginTop: '5%'}}>
                <Text style={styles.cabecalho}>Verificação</Text>
                <Text style={styles.corpo}>
                    Digite o Código de Registro Que Você Recebeu Para Prosseguir
                </Text>
            </View>
            
            <BoxShadowContainer style={{maxHeight: 200, height: 200, marginBottom: '5%',}}>
                
                <View style={{flex: 1, flexDirection: "row", backgroundColor: '#fff',}}> 

                    <TextInput
                        placeholder={"_"}
                        style={styles.textInput}/>
                    <TextInput
                        placeholder={"_"}
                        style={styles.textInput}/>

                    <TextInput
                        placeholder={"_"}
                        style={styles.textInput}/>

                    <TextInput
                        placeholder={"_"}
                        style={styles.textInput}/>

                    <TextInput
                        placeholder={"_"}
                        style={styles.textInput}/>


                </View>
                <View style={{maxHeight: 100, height: 100, marginBottom: 30}}>
                    <BotaoPrimario
                        onPress={()=>{
                            navigation.navigate("Cadastrar");
                        }}
                        style={styles.button}
                        titulo={"Verificar"}/>
                </View>
            </BoxShadowContainer>
            </View>
        </SafeAreaView>
    </ScrollView>
    );
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
        marginTop: '20%',
        marginBottom: '10%',
        width: '100%',
    },
    textInput:{
        marginTop: '10%',
        fontSize: 30,
        borderBottomWidth: 1,
        borderColor: '#dddf',
        height: 50,
        width: '20%',
        borderRadius: 10,        
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
