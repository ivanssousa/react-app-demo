import React, { Component} from 'react'
import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity, Platform, PermissionsAndroid, ScrollView, Image} from 'react-native'


import BotaoPrimario from '../GeralComponentes/components/BotaoPrimario';
import BotaoSecundario from '../GeralComponentes/components/BotaoSecundario';
import BudgeCircle from '../GeralComponentes/components/BudgeCircle';

import IdentidadeContainer from '../GeralComponentes/Cadastro/IdentidadeContainer';

import Camera, { Constants } from '../GeralComponentes/camera';
import { DebugInstructions } from 'react-native/Libraries/NewAppScreen';

import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';

import ProcessarTexto from './ProcessarTexto';

const image = require('../../assets/images/icon.png');


export default class CarregarIdentidade extends Component {

    state = {
        refIdentidadeFrente: React.createRef(),
        refIdentidadeTras: React.createRef(),
        showCamera: false,
        image: require('../../assets/images/icon.png'),
        imageFrente: null,
        imageTras: null,
        imageFrentePath: null,
        imageTrasPath: null,
        showCameraFrente: false,
        showCameraTras: false,
        recognizedText: null
    };

    processarTexto: ProcessarTexto;

    constructor(props:any) {
        super(props)
    }
    

    componentDidMount()
    {
        this._loadImage('imageFrente.png', 'frente');
        this._loadImage('imageTras.png', 'tras');
    }

    _loadImage( image, lado )
    {
        let path = RNFS.ExternalStorageDirectoryPath + '/'+image;
        RNFS.exists( path )
        .then((existe)=>{
            console.log("Arquivo Existe", existe);
            if( existe )
            {
                RNFS.readFile( path, "base64")
                .then((buffer)=>{
                    console.log("Arquivo Lido.");
                    if( lado == 'frente' )
                    {
                        this.setState({
                            image:{
                                uri: 'data:image/png;base64,'+buffer
                            },
                            imageFrente:{
                                uri: 'data:image/png;base64,'+buffer
                            },
                            imageFrentePath: path
                        });    
                    }
                    else if ( lado == 'tras' )
                    {
                        this.setState({
                            image:{
                                uri: 'data:image/png;base64,'+buffer
                            },
                            imageTras:{
                                uri: 'data:image/png;base64,'+buffer
                            },
                            imageTrasPath: path
                        });    
                    }
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


    async saveFromBase64( data, path )
    {
        if ( this.state.showCameraFrente )
        {
            path = path + "imageFrente1.png";            
        }
        else if ( this.state.showCameraTras )
        {
            path = path + "imageTras1.png";            
        }
        else {
            path = path + "image.png";
        }

        RNFetchBlob.fs.writeFile( path, data, 'base64' )
        .then((result)=>{
            if ( this.state.showCameraFrente ) {
                this.setState({
                    image: {
                        uri: 'data:image/png;base64,'+data
                    },
                    imageFrente: {
                        uri: 'data:image/png;base64,'+data
                    },
                });    
            }
            else if ( this.state.showCameraTras ) {
                this.setState({
                    image: {
                        uri: 'data:image/png;base64,'+data
                    },
                    imageTras: {
                        uri: 'data:image/png;base64,'+data
                    },
                });   
            }
        })
        .catch((error)=>{
            console.log(error.message);
        });
        
        this.setState({showCamera:false});
        
        this.processarTexto = new ProcessarTexto( path );
        await this.processarTexto.processarImagem();
    }

    async saveImage(data:any) 
    {
        const dirs = RNFetchBlob.fs.dirs;
        
        let base = dirs.PictureDir;
        let path = base+'/cinapse.aposentadoria.dir/';

        let result = await RNFetchBlob.fs.exists( path );


        if ( !result )
        {
            if (Platform.OS === 'android') {
                try {
                  const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                      title: 'Permissions for write access',
                      message: 'Give permission to your storage to write a file',
                      buttonPositive: 'ok',
                    },
                  );
                  if (granted === PermissionsAndroid.RESULTS.GRANTED) 
                  {
                    await RNFetchBlob.fs.mkdir( path );
                    await this.saveFromBase64( data, path);
                  } 
                  else {
                    console.log('permission denied');
                    return;
                  }
                } catch (err) {
                  console.warn(err);
                  return;
                }
            }
        }
        else {
            await this.saveFromBase64( data, path );
        }

    }

    async processarTextEmImage( localPath )
    {

    }

    onTextRecognized(data:any) 
    {
        console.log('Reconhecimento de Texto: ', data);
        if(data && data.textBlocks && data.textBlocks.length > 0) {
        this.setState({recognizedText: data})
        console.error("Bloco de Textos: ", data );
        }
    }

    showCamera()
    {
        if ( !this.state.showCamera )
        {
            return this.props.children;
        }
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
                    onCapture={ (data:any) => { 
                        this.saveImage(data);
                    }}
                    onClose={ (_:any) => {
                        this.setState({showCamera: false})
                    }}
                    enabledOCR={false}
                    style={{}}
                    onTextRecognized={this.onTextRecognized}
                />
            )
        }
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#fff'}}>
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>

                <View style={{marginTop: '0%', marginBottom: '1%'}}>
                    <Text style={styles.corpo}>
                        Capture Fotos do seu Bilhete de Identidade.
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={()=>{
                        this.setState({showCamera: true, showCameraFrente: true, showCameraTras: false});
                    }}
                    style={[ styles.containerButton ,{maxHeight:200, height: 200, paddingTop: '3%',}]} >
                    <IdentidadeContainer
                        style={{maxHeight:'30%', paddingTop: '3%', maxWidth: '100%'}}>

                        <View> 
                            <View style={{flex: 1, flexDirection: 'column',}}>
                                <View>
                                    <View>
                                        <BudgeCircle texto={1}/>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 15, color: '#000' , fontWeight:'bold', marginLeft: '11%',}}>Bilhete de Identidade Frente</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{marginTop: '9%', marginLeft: '11%', marginRight: '5%',}}>Selecione esta opção e capture uma foto do teu bilhet de identidade da parte traseira.</Text>
                                </View>
                            </View>
                        </View>
                        
                    </IdentidadeContainer>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={()=>{
                        this.setState({showCamera: true, showCameraTras: true, showCameraFrente: false});
                    }}
                    style={[ styles.containerButton ,{maxHeight:200, height: 200, paddingTop: '3%', marginTop: '5%',}]} >
                 
                    <IdentidadeContainer 
                        style={{maxHeight:'30%', paddingTop: '3%'}} 
                        onPress={()=>{
                        }}
                        ref={(ref)=>{
                            this.state.refIdentidadeTras = ref;
                        }}
                        image={null}>

                        <View> 
                            <View style={{flex: 1, flexDirection: 'column',}}>
                                <View>
                                    <View>
                                        <BudgeCircle texto={2}/>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 15, color: '#000' , fontWeight:'bold', marginLeft: '11%',}}>Bilhete de Identidade Verso</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{marginTop: '9%', marginLeft: '11%', marginRight: '5%',}}>Selecione esta opção e capture uma foto do teu bilhet de identidade da parte traseira.</Text>
                                </View>
                            </View>
                        </View>

                    </IdentidadeContainer>
                </TouchableOpacity>

                <View style={{maxHeight: '25%', height: '100%' }}>
                    <BotaoSecundario
                        onPress={()=>{

                        }}
                        style={{marginTop: '9%', marginBottom: '3%',}}
                        titulo={"Validar Bilhete de Identidade"}/>
                    
                    <BotaoPrimario
                            onPress={()=>{
                                this.props.navigation.navigate('ConcluirCadastro');
                            }}
                            style={{marginTop: '0%', marginBottom: '10%',}}
                            titulo={"Verificar"}/>
                </View>

                </View>

                {this.showCamera()}
                
            </SafeAreaView>
            </ScrollView>

        )
    }
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        alignItems: 'stretch',
        backgroundColor: '#FFF',
        paddingTop: '5%',
        height: '100%',
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
        flex: 1,
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
    containerButton:{
        flexDirection:'column', 
        flex: 1, 
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        maxHeight: '25%', 
        marginTop: '10%',
        marginHorizontal: '8%',
        paddingHorizontal: '5%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    image:{
        width: 200,
        height: 200
    }
});