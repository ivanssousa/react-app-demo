import {utils} from '@react-native-firebase/app';
import ml from '@react-native-firebase/ml';

export default class ProcessarTexto
{
    processado = null;
    pathFile = '';

    constructor( localPath: string )
    {
        this.processado = new Array();
        this.pathFile = localPath;
    }

    async processarImagem()
    {
        this.processado = await ml().cloudDocumentTextRecognizerProcessImage( this.pathFile);

        console.log("Encontrou Texto Processado ", this.processado.text );

        this.processado.blocks.forEach((bloco)=>{
            console.log("Bloco de Texto:  ", bloco.text);
            console.log("Confidence:  ", bloco.confidence);
            console.log("Idiomas encontrados:  ", bloco.recognizedLanguages);
        });

    }

}