import React from 'react'
import { StyleSheet, Text, View , ScrollView, FlatList} from 'react-native'

import BoxShadowTouchable from '../../GeralComponentes/User/BoxShadowTouchable';
import BoxShadowTouchablePrimary from '../../GeralComponentes/User/BoxShadowTouchablePrimary';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header, Icon} from 'react-native-elements';

function iconRight()
{
    return (
        <Icon
            type={'ionicon'}
            name={"cog-outline"}
            size={30}
            color={'#fff'}
            onPress={()=>{

            }}
        />
    );
}

function iconLeft()
{
    return (
        <Icon
            type={'ionicon'}
            name={"menu"}
            size={30}
            color={'#fff'}
            onPress={()=>{

            }}
        />
    );
}

const index = ( {navigation}: {navigation: any}  ) => {

    const items = [
        {route: 'consultar', title: 'Consultar', icon:'ios-layers-sharp'},
        {route: 'contactos', title: 'Contactos', icon:'people-sharp'},
        {route: 'enviar_dinheiro', title: 'Enviar Dinheiro', icon:'exit'},
        {route: 'pedir_dinheiro', title: 'Pedir Dinheiro', icon:'enter'},
        {route: 'pagar', title: 'Pagar', icon:'cash'},
        {route: 'solicitar_credito', title: 'Solicitar Crédito', icon:'cash'},
    ];

    const renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "86%",
              backgroundColor: "#CED0CE",
            }}
          />
        );
    };


    const renderItem = ( {item, index }) => {
        return (
            <BoxShadowTouchable style={{height: 70, maxHeight: 70, marginHorizontal: '0%', marginTop: '1%', paddingVertical: '3%', borderBottomLeftRadius: 10, margin: 0,}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%',}}>
                    <Text style={[styles.textItemProvaVida, {fontSize: 18, marginTop: '1%'}]}>{ item.title } </Text>
                    <Text style={styles.textItemProvaVida}>
                        <Ionicons name={ item.icon } size={25} color={'#B39659'} />
                    </Text>
                </View>
            </BoxShadowTouchable>
        );
    }




    return (
        <ScrollView style={{height: '100%', maxHeight: '100%', paddingHorizontal: '0%', paddingTop: '0%', backgroundColor: '#fff', }}>
            <Header
                leftComponent={iconLeft()}
                centerComponent={{text:'Definições', style: {color: '#fff', fontSize: 20}}}
                rightComponent={iconRight()}
                barStyle="light-content"
                backgroundColor='#B39659'
                containerStyle={{
                    backgroundColor: '#B39659',
                    height:80
                }}
            />
            <View style={{flex:1, paddingHorizontal: '5%',}}>
 
                <View style={{flex:1, paddingVertical: '5%'}}>

                    <View>
                        <BoxShadowTouchablePrimary style={{height: 150, maxHeight: 150, marginHorizontal: '0%', marginTop: '1%', paddingVertical: '3%'}}>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={[styles.textItemProvaVida, {color: '#fff', fontSize: 18}]}>{ 'Ivandro Andrade de Sousa' } </Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%',}}>
                                <Text style={[styles.textItemProvaVida, {fontSize: 16, color: '#fff'}]}>Saldo Disponível</Text>
                                <Text style={[styles.textItemProvaVida, {fontSize: 16, color: '#fff'}]}>10.000.000 AOA</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: '1%',}}>
                                <Text style={[styles.textItemProvaVida, {fontSize: 16, color: '#fff'}]}>Conta</Text>
                                <Text style={[styles.textItemProvaVida, {fontSize: 16, color: '#fff'}]}>14043.002.34343</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: '1%',}}>
                                <Text style={[styles.textItemProvaVida, {fontSize: 16, color: '#fff'}]}>Iban</Text>
                                <Text style={[styles.textItemProvaVida, {fontSize: 16, color: '#fff'}]}>0004.0000.0000.0000.0000.0</Text>
                            </View>
                            <View style={{flexDirection: 'column', marginTop: '2%',}}>
                                <Text style={[styles.textItemProvaVida, {fontSize: 14, textTransform: 'uppercase', color:'#fff'}]}>{ 'Clique para ver mais detalhes' } </Text>
                            </View>
                        </BoxShadowTouchablePrimary> 
                    </View>
 
                    <FlatList
                        style={{marginTop: '5%', }}
                        data={items}
                        renderItem={renderItem}
                        />

                </View>
            </View>
        </ScrollView>
    )
}

export default index

const styles = StyleSheet.create({
    title: {color: '#B39659', fontWeight: 'bold', fontSize: 18, marginBottom: '3%', marginTop: '5%',},
    itemProvaEfectuada: {height: 100, maxHeight: 100, marginTop: '2%', marginHorizontal: '0%',},
    textItemProvaVida: {color: '#B39659', fontWeight: 'bold'},
    itemMenu: {height: 100, maxHeight: 90, marginTop: '2%', marginHorizontal: '1%', maxWidth: 130, width: 130},
    textItemMenu: {color: '#fff', justifyContent: 'flex-end', marginTop: '45%', fontWeight: 'bold'},
})
