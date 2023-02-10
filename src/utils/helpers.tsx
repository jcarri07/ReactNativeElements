import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';

export const loadImageFromGallery = async(array) => {
    
    const options = {
        title: 'Seleciones una imagen',
        storangeOptions: {
            skipBackup: true,
            path: 'images',
        }
    }
    
    launchImageLibrary(options, response => {
        if(response.errorCode) {
            console.log(response.errorMessage);
        } else if(response.didCancel) {
            console.log("El usuario cancelo la seleccion");
        } else {

            const path = response.assets[0].uri;
            // console.log(path);
            return path;

        }
    })
}