import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import { ScreenHeight, Button } from '@rneui/base'
import CheckBoxText from '../components/CheckBoxText'
import { buttonContainer, buttonGhostSmall, buttonSmall, orangeGradient } from '../constants/estilos'
import LinearGradient from 'react-native-linear-gradient'
import InputHour from '../components/InputHour'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import InputText from '../components/InputText'
import { colors } from '../constants/estilos'
import { Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'

// Options data must contain 'item' & 'id' keys
const Input = InputText;
const K_OPTIONS = [
  {
    item: 'Juventus',
    id: 'JUVE',
  },
  {
    item: 'Real Madrid',
    id: 'RM',
  },
  {
    item: 'Barcelona',
    id: 'BR',
  },
  {
    item: 'PSG',
    id: 'PSG',
  },
  {
    item: 'FC Bayern Munich',
    id: 'FBM',
  },
  {
    item: 'Manchester United FC',
    id: 'MUN',
  },
  {
    item: 'Manchester City FC',
    id: 'MCI',
  },
  {
    item: 'Everton FC',
    id: 'EVE',
  },
  {
    item: 'Tottenham Hotspur FC',
    id: 'TOT',
  },
  {
    item: 'Chelsea FC',
    id: 'CHE',
  },
  {
    item: 'Liverpool FC',
    id: 'LIV',
  },
  {
    item: 'Arsenal FC',
    id: 'ARS',
  },

  {
    item: 'Leicester City FC',
    id: 'LEI',
  },
]

export default function SecondStep() {
  const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedTeams, setSelectedTeams] = useState([])
  return (
    <View style={styles.container}>
      <Header
              containerStyle={{height: '10%', width: '100%'}}
              leftComponent={
                <TouchableOpacity>
                  <Icon
                    name="close"
                    color={'#1c1c1c'}
                    size={30}
                    style={{left: '10%'}}
                  />
                </TouchableOpacity>
              }
              centerComponent={{
                text: 'Crear Viaje',
                style: {
                  marginTop: '2%',
                  color: '#1c1c1c',
                  fontFamily: 'Nunito',
                  fontWeight: 'bold',
                  fontSize: 20,
                },
              }}
              backgroundColor={'#ffff'}
            />
      <View style={{margin: 30}}>
        <Text style={{fontWeight: 'bold', color: '#1c1c1c', left: '1%', fontSize: 15, marginTop: '5%'}}>Hora y lugar de salida</Text>
        <Text style={{color: '#1c1c1c', fontSize: 12, left: '1%', marginTop: '3%'}}>Especifica desde donde sera la salida de tu viaje, junto a la
        hora</Text>
        <View style={styles.containerTop}>
          <GooglePlacesAutocomplete
            placeholder=""
            query={{
              key: 'AIzaSyBgajLL2mMPl-m8XDxYGb2L3j3twAvAlGU',
              language: 'en', // language of the results
            }}
            onPress={(data, details) => console.log(data, details)}
            textInputProps={{
              InputComp: Input,
              leftIcon: {type: 'font-awesome', name: 'chevron-left'},
              errorStyle: {color: 'red'},
            }}
          />
          <InputHour />
        </View>
        <Text style={{fontWeight: 'bold', color: '#1c1c1c', left: '1%', fontSize: 15, marginTop: '5%'}}>Tipo de alojamiento</Text>
        <View style={styles.containerCheckBox}>
          <CheckBoxText text="Hotel" />
          <CheckBoxText text="Apartamento" />
          <CheckBoxText text="Camping" />
          <CheckBoxText text="Otro" />
        </View>
        <SelectBox
          multiListEmptyLabelStyle={{color: colors.primary2}}
          selectedItemStyle={{color: colors.primary2}}
          label="Categorias"
          inputPlaceholder={'Seleccionar categorias'}
          arrowIconColor={colors.primary2}
          searchIconColor={colors.primary2}
          toggleIconColor={colors.primary2}
          containerStyle={{
            borderWidth: 1.5,
            borderColor: colors.primary2,
            borderRadius: 20,
            padding: 20,
            paddingTop: 20,
            height: ScreenHeight * 0.08,
          }}
          labelStyle={{color: '#1c1c1c', fontSize: 15, fontWeight: 'bold'}}
          multiOptionContainerStyle={{backgroundColor: '#e78618'}}
          options={K_OPTIONS}
          selectedValues={selectedTeams}
          onMultiSelect={onMultiChange()}
          onTapClose={onMultiChange()}
          isMulti
        />
        <SelectBox
          multiListEmptyLabelStyle={{color: colors.primary2}}
          selectedItemStyle={{color: colors.primary2}}
          label="Servicios"
          inputPlaceholder={'Seleccionar servicios'}
          arrowIconColor={colors.primary2}
          searchIconColor={colors.primary2}
          toggleIconColor={colors.primary2}
          containerStyle={{
            borderWidth: 1.5,
            borderColor: colors.primary2,
            borderRadius: 20,
            padding: 20,
            paddingTop: 20,
            height: ScreenHeight * 0.08,
          }}
          labelStyle={{color: '#1c1c1c', fontSize: 15, fontWeight: 'bold'}}
          multiOptionContainerStyle={{backgroundColor: '#e78618'}}
          options={K_OPTIONS}
          selectedValues={selectedTeams}
          onMultiSelect={onMultiChange()}
          onTapClose={onMultiChange()}
          isMulti
        />
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: '10%',
          }}>
            <Button
            title="Atras"
            titleStyle={{color: colors.primary2}}
            containerStyle={buttonSmall}
            buttonStyle={buttonGhostSmall}
            onPress={() => console.log('Cancelar')}
          />
          <Button
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={orangeGradient}
            title="Siguiente"
            containerStyle={buttonSmall}
            buttonStyle={buttonSmall}
            onPress={() => navigate('SecondStep')}
          />
        </View>
      </View>
    </View>
  );

  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
  }

  function onChange() {
    return (val) => setSelectedTeam(val)
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },

  containerTop: {
    flexDirection: 'row'
  },

  containerCheckBox: {
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
});
