import React , {useState, useCallback}from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
//Degradado
import LinearGradient from 'react-native-linear-gradient';
//Componenetes principales RNE
import {Header, Input, Avatar} from 'react-native-elements';
//Componenentes RNE
import {
  ThemeProvider,
  createTheme,
  lightColors,
  darkColors,
  Button,
  Card,
} from '@rneui/themed';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

//Funcion para cargar imagenes
// import { loadImageFromGallery } from './src/utils/helpers';
//Iconos
import Icon from 'react-native-vector-icons/Ionicons';
//Medidas de RNE
import {color, ScreenHeight, ScreenWidth} from '@rneui/base';

import {map, multiply, size } from 'lodash';

import {
  colors,
  orangeGradient,
  buttonGhost,
  buttonGhostSmall,
  buttonLarge,
  buttonSmall,
  inputText,
  inputTextContainer,
  formContainer,
  label,
  inputTextArea,
  theme,
  buttonContainer,
  inputTextSmall,
  inputTextContainerSmall,
} from './src/constants/estilos';

import InputDate from './src/components/InputDate';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

const widthScreen = Dimensions.get('window').width;

export default function App(toastRef, setLoading, navigation) {
  const [imagesSelected, setImagesSelected] = useState([]);
  const [imagen, setImage] = useState();
  const [data, setData] = useState([]);

const addData = useCallback((newData) => {
      setData([...data, newData]);
}, [data, setData]);

const removeData = useCallback((index) => {
  setData(data.filter((_, i) => i !== index));
}, [data, setData]);

const loadImageFromGallery = async(array) => {
    
    const options = {
        title: 'Selecionar Imagenes',
        customButtons: [{ name: 'addImage', title: 'añadir Imagenes'}],
        storangeOptions: {
            skipBackup: true,
            path: 'images',
        },
    }
   
    launchImageLibrary(options, response => {
        
        if(response.errorCode) {
            console.log(response.errorMessage);
        } else if(response.didCancel) {
            console.log("El usuario cancelo la seleccion");
        } else {
  
            const path = response.assets[0].uri;
            console.log(path);
            addData(path)
        }
    })
  }

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <ThemeProvider theme={theme}>
        <SafeAreaView>
          <View>
            <View style={formContainer}>
              <Text
                style={{
                  color: '#1c1c1c',
                  fontFamily: 'Roboto-Thin',
                  fontWeight: 'bold',
                  left: '3%',
                }}>
                Titulo
              </Text>
              <Input
                placeholder="Colonia Tovar Full Day"
                placeholderTextColor={'#1c1c1c'}
                inputStyle={inputText}
                inputContainerStyle={inputTextContainer}
              />
              <Text
                style={{
                  color: '#1c1c1c',
                  fontFamily: 'Roboto-Thin',
                  fontWeight: 'bold',
                  left: '3%',
                }}>
                Descripcion
              </Text>
              <Input
                placeholder="Este proximo 6 de febrero disfruta de un dia
                diferente viajando hacia el frio pueblo de la coloniva
                tovar, donde podras conocer la cultura de este
                hermoso pueblo y disfrutar de una dia en familia."
                placeholderTextColor={'gray'}
                multiline={true}
                inputStyle={inputTextArea}
                inputContainerStyle={inputTextContainer}
              />
              <Text
                style={{
                  color: '#1c1c1c',
                  fontFamily: 'Roboto-Thin',
                  fontWeight: 'bold',
                  left: '3%',
                }}>
                Lugar de viaje
              </Text>
              <Input
                placeholder="Colonia Tovar, Aragua, Venezuela"
                placeholderTextColor={'gray'}
                inputStyle={inputText}
                inputContainerStyle={inputTextContainer}
                leftIcon={
                  <Icon
                    name="md-location-sharp"
                    color={'orange'}
                    size={30}
                    style={{left: '25%'}}
                  />
                }
              />
              <Text
                style={{
                  color: '#1c1c1c',
                  fontFamily: 'Roboto-Thin',
                  fontWeight: 'bold',
                  left: '3%',
                }}>
                Lugar de viaje
              </Text>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  width: '100%',
                }}>
                <InputDate />
                <InputDate />
              </View>
              <Text
                style={{
                  color: '#1c1c1c',
                  fontFamily: 'Roboto-Thin',
                  fontWeight: 'bold',
                  left: '3%',
                  top: '1%',
                }}>
                Seleccionar fotos
              </Text>
              <View style={styles.containerImages}>
                <ScrollView horizontal={true}>
                  <TouchableOpacity onPress={loadImageFromGallery}>
                    <View
                      style={{
                        width: 120,
                        height: '70%',
                        borderRadius: 20,
                        top: 10,
                        marginRight: 20,
                      }}>
                      <Image
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: 20,
                        }}
                        source={require('./src/assets/ImageField.png')}
                      />
                    </View>
                  </TouchableOpacity>
                  <View style={{flexDirection: 'row'}}>
                    {data.map((item, index)=> (
                      <View
                      style={{
                        width: 120,
                        height: '70%',
                        borderRadius: 20,
                        top: 10,
                        marginRight: 20,
                      }}>
                      <Image
                        key={index}
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: 20,
                        }}
                        source={{uri: item}}
                      />
                      <TouchableOpacity
                        onPress={()=> removeData(index)}
                        style={{
                          left: '70%',
                          bottom: '35%',
                          borderRadius: 50,
                          backgroundColor: '#1c1c1c',
                          width: '25%',
                          opacity: 0.6,
                        }}>
                        <Icon
                          name="close"
                          style={{color: '#ffff', fontSize: 30}}
                        />
                      </TouchableOpacity>
                    </View>
                    ))}
                  </View>
                </ScrollView>
              </View>
              <View style={buttonContainer}>
                <Button
                  ViewComponent={LinearGradient} // Don't forget this!
                  linearGradientProps={orangeGradient}
                  title="Siguiente"
                  containerStyle={buttonSmall}
                  buttonStyle={buttonSmall}
                  onPress={() => console.log('Siguiente')}
                />
                <Button
                  title="Cancelar"
                  titleStyle={{color: colors.primary2}}
                  containerStyle={buttonSmall}
                  buttonStyle={buttonGhostSmall}
                  onPress={() => console.log('Cancelar')}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ThemeProvider>
    </KeyboardAwareScrollView>
  );
}

// function UploadImage({toastRef, imagesSelected, setImagesSelected}) {

//   return (
//     <>
//       {size(imagesSelected) < 10 && (
//         <TouchableOpacity onPress={ loadImageFromGallery }>
//           <View
//             style={{
//               width: 120,
//               height: '70%',
//               borderRadius: 20,
//               top: 10,
//               marginRight: 20,
//             }}>
//             <Image
//               style={{width: '100%', height: '100%', borderRadius: 20}}
//               source={require('./src/assets/ImageField.png')}
//             />
//           </View>
//         </TouchableOpacity>
//       )}
//       {map(imagesSelected, (image, index) => (
//         <Avatar 
//           key={index}
//           style={styles.miniatureStyle}
//           source = {{uri: image}}
//         />
//       ))}
//     </>
//   );
// }

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: '#ffff',
  },

  containerImages: {
    right: '2%',
    height: '18%',
    width: '110%',
    flexDirection: 'row',
    top: '5%',
  },

  miniatureStyle: {
    width: 70,
    height: 70,
    marginRight: 10,
  }
});
