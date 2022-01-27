import React from 'react'
import { StyleSheet, Text, View , ScrollView} from 'react-native'

import BoxShadowTouchable from '../../GeralComponentes/User/BoxShadowTouchable';
import BoxShadowTouchablePrimary from '../../GeralComponentes/User/BoxShadowTouchablePrimary';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header, Icon} from 'react-native-elements';

function iconRight()
{
    return (
        <Icon
            type={'ionicon'}
            name={"albums-sharp"}
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
                centerComponent={{text:'Provas de Vida', style: {color: '#fff', fontSize: 20}}}
                rightComponent={iconRight()}
                barStyle="light-content"
                backgroundColor='#B39659'
                containerStyle={{
                    backgroundColor: '#B39659',
                    height:80
                }}
            />
            <View style={{flex:1, paddingHorizontal: '5%',}}>
                <View style={{flex:1,}}>

                    <View>
                        <Text style={styles.title}>Próxima Prova de Vida</Text>
                        <BoxShadowTouchablePrimary style={{height: 100, maxHeight: 100, marginHorizontal: '0%', marginTop: '1%', paddingVertical: '3%',}}>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={[styles.textItemProvaVida, {color: '#fff'}]}>{ new Date().toLocaleDateString()} - { new Date().toLocaleTimeString()} </Text>
                            </View>
                            
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%',}}>
                                <Text style={[styles.textItemProvaVida, {fontSize: 16, color:'#fff'}]}>Estado </Text>
                                <Text style={[styles.textItemProvaVida, {fontSize: 16, color: '#fff'}]}>Próxima Prova de vida</Text>
                            </View>
                            <View style={{flexDirection: 'column', marginTop: '2%',}}>
                                <Text style={[styles.textItemProvaVida, {fontSize: 14, textTransform: 'uppercase', color:'#fff'}]}>{ 'Clique para ver mais detalhes' } </Text>
                            </View>
                        </BoxShadowTouchablePrimary> 
                    </View>
 

                    <View>
                        <Text style={styles.title}>Provas Efectuadas</Text>
                        <BoxShadowTouchable style={{height: 100, maxHeight: 100, marginHorizontal: '0%', marginTop: '1%', paddingVertical: '3%',}}>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.textItemProvaVida}>{ new Date().toLocaleDateString()} - { new Date().toLocaleTimeString()} </Text>
                            </View>
                            
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%',}}>
                                <Text style={[styles.textItemProvaVida, {fontSize: 16}]}>Estado </Text>
                                <Text style={[styles.textItemProvaVida, {fontSize: 16, color: '#0f0'}]}>Validado</Text>
                                <Text style={styles.textItemProvaVida}>
                                    <Ionicons name={'checkmark-circle'} size={25} color={'#0f0'} />
                                </Text>
                            </View>
                            <View style={{flexDirection: 'column', marginTop: '1%',}}>
                                <Text style={[styles.textItemProvaVida, {fontSize: 14, textTransform: 'uppercase'}]}>{ 'Clique para ver mais detalhes' } </Text>
                            </View>
                        </BoxShadowTouchable>
                        <BoxShadowTouchable style={{height: 100, maxHeight: 100, marginHorizontal: '0%', marginTop: '1%', paddingVertical: '3%',}}>
                                                        
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.textItemProvaVida}>{ new Date().toLocaleDateString()} - { new Date().toLocaleTimeString()} </Text>
                            </View>
                            
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%',}}>
                                <Text style={[styles.textItemProvaVida, {fontSize: 16}]}>Estado </Text>
                                <Text style={[styles.textItemProvaVida, {fontSize: 16, color: '#ffbf00'}]}>Em Analíse</Text>
                                <Text style={styles.textItemProvaVida}>
                                    <Ionicons name={'md-time'} size={25} color={'#ffbf00'} />
                                </Text>
                            </View>
                            <View style={{flexDirection: 'column', marginTop: '1%',}}>
                                <Text style={[styles.textItemProvaVida, {fontSize: 14, textTransform: 'uppercase'}]}>{ 'Clique para ver mais detalhes' } </Text>
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
