import { ScreenHeight, ScreenWidth } from "@rneui/base";
import React, { useState } from "react";
import { Button, View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from "../constants/estilos";

let heightInput = ScreenHeight*0.08;

export default function InputDate() {
  const [hora, setHora] = useState('Hora');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => { 
    setHora(date.getHours()+ ":" + (date.getMinutes() + ":" +date.getSeconds()));
    console.log(hora)
    hideDatePicker();
  };

return (
  <View style={{alignItems: 'center',}}>
      <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
      />
      <TouchableOpacity style={styles.container} onPress={showDatePicker}>
          <View style={styles.textField_container}>
              <Ionicons name='time-outline' style={styles.inputIcon}></Ionicons>
              <Text style={styles.textInputDate}>{hora}</Text>
          </View>
      </TouchableOpacity>
  </View>
)
}

const styles = StyleSheet.create({
    textField_container: {
        width: '100%',
        height: 54,
    },

    container: {
        top: '15%',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: colors.primary2,
        height: heightInput,
        width: ScreenWidth*0.3,
    },

    textInputDate: {
        color: 'gray',
        width: '50%',
        top: '40%',
        left: '25%',
    },

    inputIcon: {
        width: '50%',
        height: '40%',
        fontSize: 20,
        color: colors.primary2,
        left: '5%',
        top: '40%',
        position: 'absolute',
    },
})



