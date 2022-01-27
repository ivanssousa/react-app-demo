import React from 'react'
import { View, Text } from 'react-native'

export default function BudgeCircle(props:any) {
    return (
    <View style={{height: 22, width: 22, backgroundColor: '#32cd32', alignItems: 'center', borderRadius: 15}}>
        <Text style={{color: '#fff', fontSize: 14, fontWeight:'bold' }}>{props.texto}</Text>
    </View>
    );
}
