import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image, ScrollView } from 'react-native';

import BotaoPrimario from '../GeralComponentes/components/BotaoPrimario';
import BoxShadowTouchable from '../GeralComponentes/Cadastro/BoxShadowTouchable';
import BudgeCircle from '../GeralComponentes/components/BudgeCircle';

import CarregarIdentidade from './CarregarIdentidade';
import ConcluirCadastro from './ConcluirCadastro';
import Ionicons from 'react-native-vector-icons/Ionicons';

type State = {
    index:any,
    carregarIdentidade: any
};

const image = require('../../assets/images/static/05.png');

export default class Cadastrar extends Component<{}, State>
{
    screens = ["default","carregarIdentidade","concluirCadastro"];
    state = {};

    constructor(props:any)
    {
        super(props)

        this.state = {
            index: 0,
            carregarIdentidade: React.createRef(),
        }
    }
    

    _viewDefaul()
    {
        return (
            <ScrollView  style={{backgroundColor: '#fff',}}>
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff',}}>
            <View style={styles.container}>
                
                <View style={{marginTop: '10%', alignItems: 'center',}}>
                    <Image source={ image } style={styles.image}  />
                </View>
    
                <View style={{marginTop: '10%'}}>
                    <Text style={styles.cabecalho}>Identidade</Text>
                    <Text style={styles.corpo}>
                        Capture Fotos do seu Bilhete de Identidade.
                    </Text>
                </View>
                
                <BoxShadowTouchable 
                    style={{maxHeight:120, paddingTop: '3%', marginTop: '5%',}} 
                    onPress={()=>{
                        this.props.navigation.navigate("CarregarIdentidade");
                    }}>
                    <View> 
                        <View style={{flex: 1, flexDirection: 'column',}}>
                            <View>
                                <View>
                                    <BudgeCircle texto={1}/>
                                </View>
                                <View>
                                    <Text style={{fontSize: 15, color: '#000' , fontWeight:'bold', marginLeft: '11%',}}>Bilhete de Identidade</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{marginTop: '9%', marginLeft: '11%', marginRight: '5%',}}>Selecione esta opção e capture fotos do seu bilhete de identidade frente e verso.</Text>
                            </View>
                        </View>
                    </View>
                </BoxShadowTouchable>

                <BoxShadowTouchable 
                    style={{maxHeight:120, paddingTop: '3%', marginTop: '3%',}}
                    onPress={()=>{
                        this.props.navigation.navigate("CarregarIdentidade");
                    }}>
                    <View> 
                        <View style={{flex: 1, flexDirection: 'column',}}>
                            <View>
                                <View>
                                    <BudgeCircle texto={2}/>
                                </View>
                                <View>
                                    <Text style={{fontSize: 15, color: '#000' , fontWeight:'bold', marginLeft: '11%',}}>Passaporte</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{marginTop: '9%', marginLeft: '11%', marginRight: '5%',}}>Selecione esta opção e capture fotos do seu Passaporte, parte com número de identificação.</Text>
                            </View>
                        </View>
                    </View>
                </BoxShadowTouchable>
                
                <BotaoPrimario
                        onPress={()=>{
                            if ( this.screens[ this.state.index ] == "default" )
                            {
                                //return this._viewDefaul();
                            }
                            else if( this.screens[ this.state.index ] == "carregarIdentidade" )
                            {
                                alert("Concluir Cadastr");
                            }
                            else if( this.screens[ this.state.index ] == "concluirCadastro" )
                            {
                                alert("Concluir Cadastr");
                            }
                        }}
                        style={styles.button}
                        titulo={"Verificar"}/>
                </View>
            </SafeAreaView>
            </ScrollView>
        );
    }

    _carregarBilheteIdentidade()
    {
        return <CarregarIdentidade navigation={this.props.navigation}/>;        
    }

    _concluirCadastro()
    {
        return <ConcluirCadastro/>;
    }


    escolherView()
    {
        if ( this.screens[ this.state.index ] == "default" )
        {
            return this._viewDefaul();
        }
        else if( this.screens[ this.state.index ] == "carregarIdentidade" )
        {
            return this._carregarBilheteIdentidade();
        }
        else if( this.screens[ this.state.index ] == "concluirCadastro" )
        {
            return this._concluirCadastro();
        }
    }

    
    render() {
        return  this.escolherView();
    }
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
        marginTop: '5%',
        textAlign:'center',
    },
    button:{
        marginBottom: '10%',
        flex: 1,
        marginTop: '10%',
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
        height: 200
    }
});
