import { StyleSheet } from 'react-native'
import {Header, Icon} from 'react-native-elements';


function iconRight(icon:string)
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

function iconLeft(icon:string)
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


export default function HeaderPersonalizado()
{
    let iconLeftStr = '';
    let iconRightStr = '';

    return (
        <Header
            leftComponent={iconLeft(iconLeftStr)}
            centerComponent={{text:'Provas de Vida', style: {color: '#fff', fontSize: 20}}}
            rightComponent={iconRight(iconRightStr)}
            barStyle="light-content"
            backgroundColor='#B39659'
            containerStyle={{
                backgroundColor: '#B39659',
                height:80
            }}
        />
    );

}

const styles = StyleSheet.create({})
