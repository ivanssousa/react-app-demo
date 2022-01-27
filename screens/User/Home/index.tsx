import React from 'react'
import { StyleSheet, Text, View , ScrollView} from 'react-native'

import BoxShadowTouchable from '../../GeralComponentes/User/BoxShadowTouchable';
import BoxShadowTouchablePrimary from '../../GeralComponentes/User/BoxShadowTouchablePrimary';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header, Icon} from 'react-native-elements';

import MinhaContas from './MinhasConta';

function iconRight()
{
    return (
        <Icon
            type={'ionicon'}
            name={"home"}
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

    
    return (
        <ScrollView style={{height: '100%', maxHeight: '100%', paddingHorizontal: '0%', paddingTop: '0%', backgroundColor: '#fff',}}>
            <Header
                leftComponent={iconLeft()}
                centerComponent={{text:'BCS Banking', style: {color: '#fff', fontSize: 20}}}
                rightComponent={iconRight()}

                barStyle="light-content"
                backgroundColor='#B39659'
                containerStyle={{
                    backgroundColor: '#B39659',
                    height:80
                }}
            /> 
            <View style={{flex:1, paddingHorizontal: '3%', marginTop: '3%'}}>
                <View style={{flex:1,}}>
                    
                    <ScrollView nestedScrollEnabled={true} style={{width: '100%', }}>
                        <View style={{flexDirection: 'row'}}>
                            <MinhaContas/>
                        </View>
                    </ScrollView>

                    <View>
                        <Text style={styles.title}>Créditos</Text>
                        <BoxShadowTouchablePrimary 
                            onPress={()=>{
                                navigation.navigate('ExecutarProvaVida');
                            }}
                            style={{height: 100, maxHeight: 100, marginHorizontal: '0%', marginTop: '1%', paddingVertical: '3%',}}>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={[styles.textItemProvaVida, {color: '#fff'}]}>{ new Date().toLocaleDateString()} - { new Date().toLocaleTimeString()} </Text>
                            </View>
                            
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: '1%',}}>
                                <Text style={[styles.textItemProvaVida, {fontSize: 16, color:'#fff'}]}>Valor </Text>
                                <Text style={[styles.textItemProvaVida, {fontSize: 16, color: '#fff'}]}>5.670.300,00 Kz</Text>
                            </View>
                            <View style={{flexDirection: 'column', marginTop: '1%',}}>
                                <Text style={[styles.textItemProvaVida, {fontSize: 14, textTransform: 'uppercase', color:'#fff'}]}>{ 'Yolanda Lima' } </Text>
                            </View>
                        </BoxShadowTouchablePrimary> 
                    </View>
 

                    <View style={{marginBottom: '10%'}}>
                        <Text style={styles.title}>Débitos</Text>
                        
                        <BoxShadowTouchable style={{height: 100, maxHeight: 100, marginHorizontal: '0%', marginTop: '1%', paddingVertical: '3%',}}>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.textItemProvaVida}>{ new Date().toLocaleDateString()} - { new Date().toLocaleTimeString()} </Text>
                            </View>
                            
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%',}}>
                                <Text style={[styles.textItemProvaVida, {fontSize: 16,}]}>Valor </Text>
                                <Text style={[styles.textItemProvaVida, {fontSize: 16, color: '#B39659'}]}>100.000.00 Kz</Text>
                            </View>
                            <View style={{flexDirection: 'column', marginTop: '1%',}}>
                                <Text style={[styles.textItemProvaVida, {fontSize: 14, textTransform: 'uppercase'}]}>{ 'António Pedro' } </Text>
                            </View>
                        </BoxShadowTouchable>


                        <BoxShadowTouchable style={{height: 100, maxHeight: 100, marginHorizontal: '0%', marginTop: '1%', paddingVertical: '3%',}}>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.textItemProvaVida}>{ new Date().toLocaleDateString()} - { new Date().toLocaleTimeString()} </Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%',}}>
                                <Text style={[styles.textItemProvaVida, {fontSize: 16,}]}>Valor </Text>
                                <Text style={[styles.textItemProvaVida, {fontSize: 16, color: '#B39659'}]}>2.560.700,00 Kz</Text>
                            </View>
                            <View style={{flexDirection: 'column', marginTop: '1%',}}>
                                <Text style={[styles.textItemProvaVida, {fontSize: 14, textTransform: 'uppercase'}]}>{ 'Ivandro de Sousa' } </Text>
                            </View>
                        </BoxShadowTouchable>   
                    </View>


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
