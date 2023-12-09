// // AdminPage.js
// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';

// const AdminPage = () => {
//   const [patients, setPatients] = useState([]);
//   const [doctors, setDoctors] = useState([]);

//   const addPatient = () => {
//     // Logique pour ajouter un patient
//   };

//   const removePatient = (patientId) => {
//     // Logique pour supprimer un patient
//   };

//   const addDoctor = () => {
//     // Logique pour ajouter un docteur
//   };

//   const removeDoctor = (doctorId) => {
//     // Logique pour supprimer un docteur
//   };

//   return (
//     <View>
//       <Text>Admin Page</Text>
//       <Button title="Ajouter Patient" onPress={addPatient} />
//       <Button title="Supprimer Patient" onPress={() => removePatient(patientId)} />
//       <Button title="Ajouter Docteur" onPress={addDoctor} />
//       <Button title="Supprimer Docteur" onPress={() => removeDoctor(doctorId)} />
//     </View>
//   );
// };

// export default AdminPage;



import React from 'react';
import { View, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native';

const MyListComponent = () => {
  const data = [
    'An item',
    'A second item',
    'A third item',
    'A fourth item',
    'And a fifth one',
  ];

  const renderItem = ({ item }) => (
    <SafeAreaView
      style={{
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      }}
    >
      <TouchableOpacity style={{padding:20}}>
      <Text>{item}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default MyListComponent;

