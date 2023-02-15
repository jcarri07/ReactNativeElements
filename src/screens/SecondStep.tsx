import React, { useState } from 'react'
import { Text, View } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import { colors } from 'react-native-elements'
import { ScreenHeight } from '@rneui/base'

// Options data must contain 'item' & 'id' keys

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
    <View style={{ margin: 30 }}>
      <SelectBox
        multiListEmptyLabelStyle={{color: 'orange'}}
        selectedItemStyle={{color: 'orange'}}
        label="Categorias"
        inputPlaceholder={'Seleccionar categorias'}
        
        arrowIconColor={'orange'}
        searchIconColor={'orange'}
        toggleIconColor={'orange'}

        containerStyle={{borderWidth: 1.5, borderColor: 'orange', borderRadius: 20, padding: 20, paddingTop: 15, height: ScreenHeight*0.08}} 
        labelStyle={{color: '#1c1c1c', fontSize: 15, fontWeight: 'bold'}}
        multiOptionContainerStyle={{backgroundColor: '#e78618'}}

        options={K_OPTIONS}
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
      />

<SelectBox
        multiListEmptyLabelStyle={{color: 'orange'}}
        selectedItemStyle={{color: 'orange'}}
        label="Servicios"
        inputPlaceholder={'Seleccionar servicios'}
        
        arrowIconColor={'orange'}
        searchIconColor={'orange'}
        toggleIconColor={'orange'}

        containerStyle={{borderWidth: 1.5, borderColor: 'orange', borderRadius: 20, padding: 20, paddingTop: 15, height: ScreenHeight*0.08}} 
        labelStyle={{color: '#1c1c1c', fontSize: 15, fontWeight: 'bold'}}
        multiOptionContainerStyle={{backgroundColor: '#e78618'}}

        options={K_OPTIONS}
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
      />
    </View>
  )

  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
  }

  function onChange() {
    return (val) => setSelectedTeam(val)
  }
  
}

