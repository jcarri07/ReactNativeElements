import React, {useState} from 'react';
import {CheckBox, Icon} from '@rneui/themed';
import {StyleSheet, View, Text} from 'react-native';
import { color, ScreenHeight, ScreenWidth } from '@rneui/base';
import Icono from 'react-native-vector-icons/Ionicons';
import { colors } from '../constants/estilos';

// type CheckboxComponentProps = {};

// const CheckboxText: React.FunctionComponent<
//   CheckboxComponentProps
// > = () => {


export default function CheckBoxText (props: Props) {
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  return (
    <View style={styles.container}>
        <CheckBox
          checked={!checked}
          onPress={toggleCheckbox}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checkedColor= {colors.primary2}
          containerStyle={{
            backgroundColor: 'transparent',
            width: 20,
            height: 50,
          }}
        />
        <Text style={{color: '#1c1c1c', top: '12%', marginLeft: '10%'}}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: ScreenHeight*0.05,
    width: '40%',
    flexDirection: 'row',
  },
});