import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Formulaire() {
  const [selectedDisease, setSelectedDisease] = useState('');

  const handleDiseaseSelection = (disease) => {
    setSelectedDisease(disease);
  };
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Sélectionnez le type de maladie :</Text>
      <TouchableOpacity
        style={{
          backgroundColor: selectedDisease === 'Maladie1' ? 'green' : 'gray',
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        onPress={() => handleDiseaseSelection('Maladie1')}
      >
        <Text style={{ color: 'white' }}>Maladie 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: selectedDisease === 'Maladie2' ? 'green' : 'gray',
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        onPress={() => handleDiseaseSelection('Maladie2')}
      >
        <Text style={{ color: 'white' }}>Maladie 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
  style={{
    backgroundColor: selectedDisease === 'Maladie3' ? 'green' : 'gray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  }}
  onPress={() => {
    handleDiseaseSelection('Maladie3');
    navigation.navigate('maladie1');
  }}
>
  <Text style={{ color: 'white' }}>Maladie 3</Text>
</TouchableOpacity>
      <Text style={{ fontSize: 18, marginTop: 20 }}>
        Maladie sélectionnée : {selectedDisease}
      </Text>
    </View>
  );
}

      
                
  