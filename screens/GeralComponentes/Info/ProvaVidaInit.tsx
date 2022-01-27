import React from 'react'
import { Text, StyleSheet, View, SafeAreaView, TextInput } from 'react-native'

import BotaoPrimario from '../components/BotaoPrimario';
import BoxShadowTouchable from '../Cadastro/BoxShadowTouchable';

import Ionicons from 'react-native-vector-icons/Ionicons';

const ProvaVidaInit = (  {navigation}: {navigation: any}  ) => {
    return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
            <View style={{marginTop: '25%'}}>
                <Text style={styles.cabecalho}>BNA Prova De Vida</Text>
                <Text style={styles.corpo}>
                    Imagem de Verificação aqui
                </Text>
            </View>

            <View style={{marginTop: '15%'}}>
                <Text style={styles.cabecalho}>Identidade</Text>
                <Text style={styles.corpo}>
                    Capture Fotos do seu Bilhete de Identidade.
                </Text>
            </View>
            


            <BoxShadowTouchable 
                style={{maxHeight:120, paddingTop: '3%', marginTop: '3%',}}
                onPress={()=>{

                }}>
                <View> 
                    <View style={{flex: 1, flexDirection: 'column',}}>
                        <View>
                            <View>
                                <View style={{height: 22, width: 22, backgroundColor: '#32cd32', alignItems: 'center', borderRadius: 15}}>
                                    <Text style={{color: '#fff', fontSize: 14, fontWeight:'bold' }}>1</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{fontSize: 15, color: '#000' , fontWeight:'bold', marginLeft: '11%',}}>Bilhete de Identidade</Text>
                            </View>
                            <View>
                                <Ionicons style={{justifyContent:'flex-end', marginLeft: '90%',}} size={22} color={"#32cd32"} name={"ios-checkmark-circle"}/>  
                            </View>
                        </View>
                        <View>
                            <Text style={{marginTop: '11%', marginLeft: '11%', marginRight: '5%',}}>Selecione esta opção e capture fotos do seu bilhete de identidade frente e verso.</Text>
                        </View>
                    </View>
                </View>
            </BoxShadowTouchable>


            <BoxShadowTouchable 
                style={{maxHeight:120, paddingTop: '3%', marginTop: '3%',}}
                onPress={()=>{

                }}>
                <View> 
                    <View style={{flex: 1, flexDirection: 'column',}}>
                        <View>
                            <View>
                                <View style={{height: 22, width: 22, backgroundColor: '#32cd32', alignItems: 'center', borderRadius: 15}}>
                                    <Text style={{color: '#fff', fontSize: 14, fontWeight:'bold' }}>1</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{fontSize: 15, color: '#000' , fontWeight:'bold', marginLeft: '11%',}}>Bilhete de Identidade</Text>
                            </View>
                            <View>
                                <Ionicons style={{justifyContent:'flex-end', marginLeft: '90%',}} size={22} color={"#32cd32"} name={"ios-checkmark-circle"}/>  
                            </View>
                        </View>
                        <View>
                            <Text style={{marginTop: '11%', marginLeft: '11%', marginRight: '5%',}}>Selecione esta opção e capture fotos do seu bilhete de identidade frente e verso.</Text>
                        </View>
                    </View>
                </View>
            </BoxShadowTouchable>



            <BotaoPrimario
                    onPress={()=>{
                        //navigation.navigate('Info');
                    }}
                    style={styles.button}
                    titulo={"Prosseguir"}/>
            </View>
        </SafeAreaView>
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
        marginBottom: '10%',
        flex: 1,
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
    }
});

export default ProvaVidaInit;
