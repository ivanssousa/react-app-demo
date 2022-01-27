import React from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image } from 'react-native'

import BotaoPrimario from '../../GeralComponentes/components/BotaoPrimario';
import BoxShadowTouchable from '../../GeralComponentes/Cadastro/BoxShadowTouchable';

import Ionicons from 'react-native-vector-icons/Ionicons';

const index = (  {navigation}: {navigation: any}  ) => {
    return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>

            <View style={{marginTop: '5%', alignItems: 'center',}}>
                <Image source={ require('../../../assets/images/static/03.png')} style={styles.image}  />
            </View>

            <View style={{marginTop: '5%'}}>
                <Text style={styles.cabecalho}>Fale Conosco</Text>
                <Text style={styles.corpo}>
                    Comece o vídeo e fale sobre como tem se sentido ultimamente.
                </Text>
            </View>

            <BoxShadowTouchable 
                style={{maxHeight:100, paddingTop: '3%', marginTop: '10%',}}
                onPress={()=>{

                }}>
                <View> 
                    <View style={{flex: 1, flexDirection: 'column',}}>
                        <View>
                            <View>
                                <Text style={{fontSize: 17, color: '#000' , fontWeight:'bold', marginLeft: '0%',}}>Começar o Video</Text>
                            </View>
         
                        </View>
                        <View>
                            <Text style={{marginTop: '11%', marginLeft: '0%', marginRight: '5%',}}>O BNA preocupa-se com o bem estar de todos os seus funcionários.</Text>
                        </View>
                    </View>
                </View>
            </BoxShadowTouchable>

            <BotaoPrimario
                    onPress={()=>{
                        //navigation.navigate('Info');
                    }}
                    style={styles.button}
                    titulo={"Terminei Minha Prova De Vida"}/>
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
        paddingVertical: '5%'
    },
    cabecalho:{
        fontSize: 20,
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
        marginBottom: '0%',
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
    },
    image:{
        width: '120%',
        height: 250
    }
});

export default index;
