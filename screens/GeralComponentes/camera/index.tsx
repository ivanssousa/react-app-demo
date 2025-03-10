import React, { Component } from "react";
import { 
  TouchableOpacity, 
  View, 
  Image, 
  Platform 
} from "react-native";
import PropTypes from 'prop-types';
import { RNCamera } from 'react-native-camera';

export const Constants = {
  ...RNCamera.Constants
};




type propTypes = {
    cameraType: any,
    flashMode: any,
    autoFocus: any,
    whiteBalance: any,
    ratio: string,
    quality: number,
    imageWidth: number,
    style: object,
    onCapture: PropTypes.func,
    enabledOCR: boolean,
    onClose: PropTypes.func,
    onTextRecognized: PropTypes.func
};

type StateType = {
    cameraType: undefined,
    flashMode: undefined,
    recognizedText: null
};




export default class Camera extends Component<propTypes, StateType> 
{

    camera = null;
    
    constructor(props:any) 
    {
        super(props);    

        props = {
            cameraType: Constants.Type.back,
            flashMode: Constants.FlashMode.off,
            autoFocus: Constants.AutoFocus.on,
            whiteBalance: Constants.WhiteBalance.auto,
            ratio: '4:3',
            quality: 0.5,
            imageWidth: 768,
            style: PropTypes.object,
            onCapture: PropTypes.func,
            enabledOCR: false,
            onClose: PropTypes.func,
        };


        this.state = {
            cameraType: Constants.Type.back,
            flashMode: Constants.FlashMode.off,
            recognizedText: null
        };
    }

  

  

  componentDidMount() {
    this.setState({
      // If enabledOCR is true, then set the cameraType to back only
      cameraType: this.props.enabledOCR ? Constants.Type.back : this.props.cameraType,
      flashMode: this.props.flashMode,
      recognizedText: null
    });
  }


  takePicture = async() => {
    if (this.camera) {
        const options = { 
        quality: this.props.quality, 
        base64: true, 
        width: this.props.imageWidth, 
        doNotSave: true,
        fixOrientation: true,
        pauseAfterCapture: true
      };

      const data = await this.camera.takePictureAsync(options);
      this.props.onCapture && this.props.onCapture(data.base64, this.state.recognizedText); 
    }
  };

  onTextRecognized(data:any) {
    if(this.props.enabledOCR) {
      console.log('onTextRecognized: ', data);
      if(data && data.textBlocks && data.textBlocks.length > 0) {
        this.setState({recognizedText: data})
        console.error("Bloco de Textos: ", data );
      }
    }
  }

  render() {
   
    return(
      <View style={[styles.camera.container, this.props.style]}>
        <RNCamera
          ref={ (ref) => {
            this.camera = ref;
          }}
          
          style={styles.camera.preview}
          type={this.state.cameraType}
          flashMode={this.state.flashMode}
          ratio={this.props.ratio}
          captureAudio={false}
          autoFocus={this.props.autoFocus}
          whiteBalance={this.props.whiteBalance}
          androidCameraPermissionOptions={{
            title: 'Permissão para Usar Camara',
            message: 'Precisamos de Permissão para aceder a Camera',
            buttonPositive: 'Permitir',
            buttonNegative: 'Cancelar'
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel'
          }}
          onTextRecognized={this.props.enabledOCR ? this.props.onTextRecognized : undefined}
        />
        
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity 
            style={styles.camera.capture}
            onPress={_ => {
              switch(this.state.flashMode) {
                case Constants.FlashMode.off:
                  this.setState({flashMode: Constants.FlashMode.auto});
                  break;

                case Constants.FlashMode.auto:
                  this.setState({flashMode: Constants.FlashMode.on});
                  break;

                case Constants.FlashMode.on:
                  this.setState({flashMode: Constants.FlashMode.off});
                  break;
              }
            }}>
            <Image 
              source={
                this.state.flashMode === Constants.FlashMode.auto ?
                require("../../../assets/camera/flashAuto.png"):
                (
                  this.state.flashMode === Constants.FlashMode.on ?
                  require("../../../assets/camera/flashOn.png"):
                  require("../../../assets/camera/flashOff.png")
                )
              } 
              style={{width: 30, height: 30}} resizeMode={'contain'} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.camera.capture}>
            <Image source={require("../../../assets/camera/cameraButton.png")} style={{width: 50, height: 50}} resizeMode={'contain'} />
          </TouchableOpacity>
          {
            // If enabledOCR is true, don't allow user to change camera
            !this.props.enabledOCR ?
            <TouchableOpacity 
                style={styles.camera.capture}
                onPress={_ => {
                if(this.state.cameraType === Constants.Type.back) {
                  this.setState({cameraType: Constants.Type.front});
                }
                else {
                  this.setState({cameraType: Constants.Type.back});
                }
              }}>
              <Image source={require("../../../assets/camera/cameraFlipIcon.png")} style={{width: 40, height: 40}} resizeMode={'contain'} />
            </TouchableOpacity>
            :
            <View style={[styles.camera.capture, {width: 70, height: 70}]}></View>
          }
        </View>
        {
          this.props.onClose && 
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              this.props.onClose && this.props.onClose();
            }}>
          </TouchableOpacity>
        }
      </View>
    );
  }
}


const styles = {
  camera: {
    container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'black'
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
      flex: 0,
      //backgroundColor: '#f00',
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20
    }
  },
  closeButton: {
    position: 'absolute',
    backgroundColor: '#aaaaaab0', 
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    top: Platform.OS === "ios" ? 45 : 10,
    left: 10
  },
  closeButtonIcon: {
    fontSize: Platform.OS === "ios" ? 40 : 40, 
    fontWeight: 'bold', 
    alignSelf: 'center', 
    lineHeight: Platform.OS === "ios" ? 58 : 40
  }
}; 