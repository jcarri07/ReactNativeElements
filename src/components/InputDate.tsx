import { ScreenHeight } from "@rneui/base";
import React, { useState } from "react";
import { Button, View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from "../constants/estilos";

let heightInput = ScreenHeight*0.08;

export default function InputDate() {
    const [fecha, setFecha] = useState('Fecha');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => { 
      setFecha(date.getDate()+ "-" + (date.getMonth() + 1) + "-" +date.getFullYear())
      console.log(fecha)
      hideDatePicker();
    };
  
  return (
    <View style={{alignItems: 'center',}}>
        <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
        />
        <TouchableOpacity style={styles.container} onPress={showDatePicker}>
            <View style={styles.textField_container}>
                <Ionicons name='calendar' style={styles.inputIcon}></Ionicons>
                <Text style={styles.textInputDate}>{fecha}</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    textField_container: {
        width: 180,
        height: heightInput,
    },

    container: {
        top: '8%',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: colors.primary2,
        height: heightInput,
        width: '90%',
    },

    textInputDate: {
        color: 'gray',
        width: '50%',
        top: '30%',
        left: '25%',
    },

    inputIcon: {
        width: '50%',
        height: '40%',
        fontSize: 20,
        color: colors.primary2,
        left: '5%',
        top: '30%',
        position: 'absolute',
    },
})



