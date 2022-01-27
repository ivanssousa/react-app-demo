import React, { Component} from 'react'
import { Text, StyleSheet, View, SafeAreaView, TextInput, ScrollView} from 'react-native'

import BotaoPrimario from '../GeralComponentes/components/BotaoPrimario';

import ProcessarTexto from './ProcessarTexto';

export default class ConcluirCadastro extends Component {

    state = {
        refIdentidadeFrente: React.createRef(),
        refIdentidadeTras: React.createRef(),
        showCamera: false,
        image: require('../../assets/images/icon.png'),
        imageFrente: null,
        imageTras: null,
        imageFrentePath: null,
        imageTrasPath: null,
        showCameraFrente: false,
        showCameraTras: false,
        recognizedText: null
    };

    processarTexto: ProcessarTexto;

    constructor(props:any) {
        super(props)
    }
    

    componentDidMount()
    {

    }


 
    render() {
        return (
            <ScrollView style={{backgroundColor: '#fff',}}>
            <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>

                <View style={{marginTop: '1%', marginBottom: '1%'}}>
                    <Text style={styles.corpo}>
                        Preencha os Dados Corretamente
                    </Text>
                </View>

                <View style={styles.containerShadow}>
                    <View style={styles.containerInput}>
                        <Text style={styles.label}>Bilhete de Identidade</Text>
                        <TextInput
                        placeholder={"Nº Bilhete de Identidade"}
                        style={styles.textInput}/>
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.label}>Nome Completo</Text>
                        <TextInput
                            placeholder={"Nome Completo"}
                            style={styles.textInput}/>
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.label}>Palavra-Passe</Text>
                        <TextInput
                            placeholder={"Palavra-Passe"}
                            style={styles.textInput}/>
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.label}>Confirmar Palavra-Passe</Text>
                        <TextInput
                            placeholder={"Repetir Palavra-Passe"}
                            style={styles.textInput}/>
                    </View>
                </View>

                <BotaoPrimario
                        onPress={()=>{
                            this.props.navigation.navigate('IdentidadeCriada');
                        }}
                        style={styles.button}
                        titulo={"Concluir Cadastro"}/>
                </View>
            </SafeAreaView>
            </ScrollView>
        )
    }
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        alignItems: 'stretch',
        backgroundColor: '#FFF',
        paddingTop: '1%',
        height: '100%',
    },
    cabecalho:{
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    corpo:{
        fontWeight:'400',
        fontSize: 19,
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '10%',
        textAlign:'center',
        color:'#999'
    },
    button:{
        marginTop: '10%',
        marginBottom: '10%',
        flex: 1,
        justifyContent: 'flex-end',
        width: '100%',
    },
    label:{
        fontSize: 17,
        color: '#000',
        fontWeight:'bold',
        marginBottom: '2%',
    },
    textInput:{
        borderWidth: 1,
        borderColor: '#dddf',
        height: 50,
        borderRadius: 10,    
        paddingHorizontal: 15,
        fontSize: 16,
        textAlign: 'left',
        color: '#B39659',
    },
    buttonSecundario: {
        marginTop: '2%',
    },
    containerInput: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: '5%',
        paddingVertical: '2%',
    },
    containerShadow:{
        flexDirection:'column', 
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        height: '65%',
        marginTop: '10%',
        marginHorizontal: '5%',
        paddingHorizontal: '0%',
        paddingVertical: '15%',
        shadowColor: '#000',
        paddingTop: '10%',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 1.20,
        shadowRadius: 2.41,
        elevation: 5,
    },
});