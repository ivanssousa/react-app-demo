import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, TextInput, ScrollView, Image} from 'react-native'

import BotaoPrimario from '../GeralComponentes/components/BotaoPrimario';
import BotaoSecundario from '../GeralComponentes/components/BotaoSecundario';
import BoxShadowContainer from '../GeralComponentes/Cadastro/BoxShadowContainer';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CadastroStackParamList } from '../../types';

const image = require('../../assets/images/static/03.png');

function ObterCodigo( {navigation}: {navigation: any} ) {
    return (
        <ScrollView style={{backgroundColor: '#fff'}}>
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                
                <View style={{marginTop: '10%', alignItems: 'center',}}>
                    <Image source={ image } style={styles.image}  />
                </View>

                <View style={{marginTop: '5%'}}>
                    <Text style={styles.cabecalho}>Registro</Text>
                    <Text style={styles.corpo}>
                        Por Favor Insere O Número De Telefone Para Receber O Código de Registro.
                    </Text>
                </View>
        
                <BoxShadowContainer style={{backgroundColor: '#fff', maxHeight: 180, marginBottom: 10,}}>
                    
                    <View style={{height: 200}}>
                        <TextInput
                            placeholder={"XXX XXX XXX"}
                            style={styles.textInput}/>
                    
                    <BotaoPrimario
                        onPress={()=>{
                            navigation.navigate( "ConfirmarCodigo" );
                        }}
                        style={styles.button}
                        titulo={"Obter Código"}/>

                    </View>
                </BoxShadowContainer>
            </View>
        </SafeAreaView>
        </ScrollView>
    )
}

ObterCodigo.propTypes = {

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
        width: '100%',
        height: 100
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
    },
    image:{
        width: '120%',
        height: 250
    }
});


export default ObterCodigo

  