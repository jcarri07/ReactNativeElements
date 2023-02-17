import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Input } from 'react-native-elements';
import { inputText, inputTextContainer } from '../constants/estilos';
import Icon from 'react-native-vector-icons/Ionicons';

export default function InputText() {
  return (
    <View style={styles.container}>
      <Input
        placeholder="Ingrese lugar de salida"
        placeholderTextColor={'gray'}
        inputStyle={inputText}
        inputContainerStyle={inputTextContainer}
        leftIcon={
          <Icon
            name="md-location-sharp"
            color={'orange'}
            size={20}
            style={{left: '25%'}}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 54,
    }
})