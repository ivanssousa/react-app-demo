import React, {Component} from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

type Props = {
    style: object,
};

type State = {
    showCamera: boolean,
    image: any
};


import Camera, { Constants } from '../camera';
import RNFS from 'react-native-fs';


export default class IdentidadeContainer extends Component< Props, State> {


    constructor(props:any) {
      super(props);
      
     
    }

    /*
    componentDidMount()
    {
        let path = RNFS.DocumentDirectoryPath + '/image.png';
        RNFS.exists( path )
        .then((existe)=>{
            console.log("Arquivo Existe", existe);
            if( existe )
            {
                RNFS.readFile( path, "base64")
                .then((buffer)=>{
                    console.log("Arquivo Lido.");
                    this.setState({image:{
                        uri: 'data:image/png;base64,'+buffer
                    }});
                })
                .catch((error)=>{
                    console.log("Não foi possível ler o arquivo ", error );
                });
            }
        })
        .catch((error)=>{
            console.log("Não Existe", error);
        });
    }

    saveImage(data:any) {

        this.setState({showCamera:false});

        let path = RNFS.DocumentDirectoryPath+"image.png";

        //String of the data: url prefix to get just the base64-encode bytes
        var imageData = data.replace(/^data:image\/\w+;base64,/,"");

        //write the file
        RNFS.writeFile( path, imageData, "base64")
        .then( _ => {
            this.setState({
                image: {
                    uri: 'data:image/png;base64,'+imageData
                }
            });
        })
        .catch ((error)=>{
            console.log(error.message);
        });
    }
    */
    showCamera()
    {
        //if ( !this.state.showCamera )
        {
            return this.props.children;
        }
        /*
        else {
            return (
                <Camera
                    cameraType={Constants.Type.back}
                    flashMode={Constants.FlashMode.off}
                    autoFocus={Constants.AutoFocus.on}
                    whiteBalance={Constants.WhiteBalance.auto}
                    ratio={'1:1'}
                    quality={0.5}
                    imageWidth={800}
                    onCapture={ (data:any) => { this.saveImage(data) }}
                    onClose={ (_:any) => {
                        this.setState({showCamera: false})
                    }}
                    enabledOCR={false}
                    style={{}}
                />
            )
        }
        */
    }

    render() {
        return (
            <View style={[this.props.style]}>
            <TouchableOpacity 
                style={{height: '100%', width: '100%'}} 
                onPress={()=>{
                    //this.setState({showCamera: !this.state.showCamera});
                }}>
                <View>
                    { this.showCamera() }
                </View>
            </TouchableOpacity>
        </View>
        )
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
        marginTop: '10%',
        textAlign:'center',
    },
    button:{
        marginTop: '10%',
    },
    textInput:{
        marginTop: '10%',
        borderWidth: 1,
        borderColor: '#dddf',
        width: '100%',
        height: 50,
        borderRadius: 10,        
        paddingRight: 20,
        paddingLeft: 20,
        fontSize: 20,
        textAlign: 'center',
    },
    buttonSecundario:{
        marginTop: '2%',
    }
});
