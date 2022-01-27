import React from 'react'
import { StyleSheet, Text, View , ScrollView, TextInput} from 'react-native'
import {CheckBox} from 'react-native-elements';

import BoxShadowTouchable from '../../GeralComponentes/User/BoxShadowTouchable';
import BoxShadowTouchablePrimary from '../../GeralComponentes/User/BoxShadowTouchablePrimary';
import BotaoPrimario from '../../GeralComponentes/components/BotaoPrimario';

import DropDownPicker from 'react-native-dropdown-picker';

import IconFeather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header, Icon, Input} from 'react-native-elements';


function iconRight()
{
    return (
        <Icon
            type={'ionicon'}
            name={"folder"}
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

    const [transferirPara, setTransferirPara] = React.useState('mb');
    const [contacto, setContacto] = React.useState('');
    const [ibanText, setIbanText] = React.useState('AO06.');

    return (
        <ScrollView style={{height: '100%', maxHeight: '100%', paddingHorizontal: '0%', paddingTop: '0%', backgroundColor: '#fff',}}>
            <Header
                leftComponent={iconLeft()}
                centerComponent={{text:'Transferência', style: {color: '#fff', fontSize: 20}}}
                rightComponent={iconRight()}
                barStyle="light-content"
                backgroundColor='#B39659'
                containerStyle={{
                    backgroundColor: '#B39659',
                    height:80,
                }}
            />
            <View style={{flex:1, paddingHorizontal: '5%',}}>
       
                    <ScrollView style={{height: '100%', maxHeight: '100%', marginHorizontal: '0%', marginTop: '5%', paddingVertical: '0%', paddingHorizontal: '3%', paddingBottom: '5%',}}>
             
                            <Text style={styles.title}>Transferir Para</Text>
                            <DropDownPicker
                                items={[
                                    {label: 'USA', value: 'usa', icon: () => <IconFeather name="flag" size={18} color="#900" />, hidden: true},
                                    {label: 'Mesmo Banco', value: 'mb', icon: () => <IconFeather name="flag" size={18} color="#900" />},
                                    {label: 'Bancos Diferentes', value: 'bd', icon: () => <IconFeather name="flag" size={18} color="#900" />},
                                ]}
                                defaultValue={transferirPara}
                                containerStyle={{height: 50, marginBottom: '0%'}}
                                style={{backgroundColor: '#fff'}}
                                itemStyle={{
                                    justifyContent: 'flex-start',
                                    backgroundColor: '#fff',
                                    height: 40,
                                }}
                                dropDownStyle={{backgroundColor: '#fff'}}
                                onChangeItem={item => setTransferirPara(item.value) }
                            />
                            { transferirPara == 'mb' ?                             
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={styles.title}>Contactos</Text>
                                    <DropDownPicker
                                        items={[
                                            {label: 'USA', value: 'usa', icon: () => <IconFeather name="flag" size={18} color="#900" />, hidden: true},
                                            {label: 'Mesmo Banco', value: 'mb', icon: () => <IconFeather name="flag" size={18} color="#900" />},
                                            {label: 'Bancos Diferentes', value: 'bd', icon: () => <IconFeather name="flag" size={18} color="#900" />},
                                        ]}
                                        defaultValue={contacto}
                                        containerStyle={{height: 50, marginBottom: '0%'}}
                                        style={{backgroundColor: '#fff'}}
                                        itemStyle={{
                                            justifyContent: 'flex-start',
                                            backgroundColor: '#fff',
                                            height: 40,
                                        }}
                                        dropDownStyle={{backgroundColor: '#fff'}}
                                        onChangeItem={item => setContacto(item.value) }
                                    />
                                </View>
                            : <></> 
                            }

                            { transferirPara == 'bd' ? 
                            
                            <View style={{flexDirection: 'column'}}>
                                <Text style={[styles.title,{marginBottom: 0}]}>Nome Destinatário</Text>
                                <TextInput
                                    keyboardType={'default'}
                                    style={{borderWidth: 1, padding: '2%', fontSize: 18, borderRadius: 5, borderColor: '#ccc'}}
                                    />
                            </View>
             
                            : <></> }

                            
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={[styles.title,{marginBottom: 0}]}>Iban</Text>
                                    <TextInput
                                        keyboardType={'numeric'}
                                        value={ibanText}
                                        editable={ transferirPara == 'mb' ? false : true }
                                        onChangeText={(value)=>{
                                            setIbanText( value );
                                        }}
                                        style={{borderWidth: 1, padding: '2%', fontSize: 18, borderRadius: 5, borderColor: '#ccc'}}
                                        />
                                </View>
               

                            <View style={{flexDirection: 'column'}}>
                                <Text style={[styles.title,{marginBottom: 0}]}>Valor a Transferir</Text>
                                <TextInput
                                    placeholder={'Ex. 12.345,67'}
                                    keyboardType={'numeric'}
                                    style={{borderWidth: 1, padding: '2%', fontSize: 18, borderRadius: 5, borderColor: '#ccc'}}
                                    />
                            </View> 

                            <View style={{flexDirection: 'column'}}>
                                <Text style={[styles.title,{marginBottom: 0}]}>Tipo de Transferência</Text>
                                <DropDownPicker
                                    items={[
                                        {label: 'USA', value: 'usa', icon: () => <IconFeather name="flag" size={18} color="#900" />, hidden: true},
                                        {label: 'Mesmo Banco', value: 'mb', icon: () => <IconFeather name="flag" size={18} color="#900" />},
                                        {label: 'Bancos Diferentes', value: 'bd', icon: () => <IconFeather name="flag" size={18} color="#900" />},
                                    ]}
                                    defaultValue={contacto}
                                    containerStyle={{height: 50, marginBottom: '0%'}}
                                    style={{backgroundColor: '#fff'}}
                                    itemStyle={{
                                        justifyContent: 'flex-start',
                                        backgroundColor: '#fff',
                                        height: 40,
                                    }}
                                    dropDownStyle={{backgroundColor: '#fff'}}
                                    onChangeItem={item => setContacto(item.value) }
                                />
                            </View>

                            <View style={{flexDirection: 'column'}}>
                                <Text style={[styles.title,{marginBottom: 0}]}>Descrição</Text>
                                <TextInput
                                    placeholder={'Ex. Descrição da Transferência'}
                                    keyboardType={'default'}
                                    style={{borderWidth: 1, padding: '2%', fontSize: 16, borderRadius: 5, borderColor: '#ccc'}}
                                    />
                            </View>


                            

                            <View style={{flexDirection: 'column', marginTop: '10%', marginBottom: '10%'}}>
                                <BotaoPrimario
                                    onPress={()=>{
                                        navigation.navigate('');
                                    }}
                                    icon={'exit-outline'}
                                    buttonProps={{borderRadius: 10, marginHorizontal: '0%',}}
                                    style={styles.button}
                                    titulo={"Efectuar Transferência"}/>
                            </View>
                    </ScrollView>


                </View>
 
        </ScrollView>
    )
}

export default index



const styles = StyleSheet.create({
    title: {color: '#B39659', fontSize: 18, marginBottom: '3%', marginTop: '5%',},
    button:{ marginTop: '1%', width: '100%'},
    itemProvaEfectuada: {height: 100, maxHeight: 100, marginTop: '2%', marginHorizontal: '0%',},
    textItemProvaVida: {color: '#B39659', fontWeight: 'bold'},
    itemMenu: {height: 100, maxHeight: 90, marginTop: '2%', marginHorizontal: '1%', maxWidth: 130, width: 130},
    textItemMenu: {color: '#fff', justifyContent: 'flex-end', marginTop: '45%', fontWeight: 'bold'},
})
