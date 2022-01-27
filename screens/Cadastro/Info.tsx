import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

import ImpressaoDigital from '../GeralComponentes/Info/ImpressaoDigital';
import CondicaoServico from '../GeralComponentes/Info/CondicaoServico';


interface State {

}

interface Props {

}

export default class Info extends Component 
{
    constructor(props:any)
    {
        super(props)
    }
    
    render() {
        return (
            <ScrollView style={{backgroundColor: '#fff'}} >
                <CondicaoServico
                    permitir={() => {
                        this.props.navigation.navigate("User");
                    }}
                    recusar = { ()=>{
                            alert("asdasd");
                        }
                    }
                />
            </ScrollView>
        );
    }
}
