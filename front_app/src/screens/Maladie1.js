import React, { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

const Maladie1 = () => {
    const [patientData, setPatientData] = useState({
        name: '',
        age: '',
        diagnosis: ''
    });

    const handleInputChange = (key, value) => {
        setPatientData({ ...patientData, [key]: value });
    };

    const handleSubmit = () => {
        // Envoyer les données médicales du patient
        console.log(patientData);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={(false)} contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Formulaire de consentement médical</Text>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nom"
                        value={patientData.name}
                        onChangeText={(value) => handleInputChange('name', value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Âge"
                        value={patientData.age}
                        onChangeText={(value) => handleInputChange('age', value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Diagnostic"
                        value={patientData.diagnosis}
                        onChangeText={(value) => handleInputChange('diagnosis', value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Diagnostic"
                        value={patientData.diagnosis}
                        onChangeText={(value) => handleInputChange('diagnosis', value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Diagnostic"
                        value={patientData.diagnosis}
                        onChangeText={(value) => handleInputChange('diagnosis', value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Diagnostic"
                        value={patientData.diagnosis}
                        onChangeText={(value) => handleInputChange('diagnosis', value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Diagnostic"
                        value={patientData.diagnosis}
                        onChangeText={(value) => handleInputChange('diagnosis', value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Diagnostic"
                        value={patientData.diagnosis}
                        onChangeText={(value) => handleInputChange('diagnosis', value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Diagnostic"
                        value={patientData.diagnosis}
                        onChangeText={(value) => handleInputChange('diagnosis', value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Diagnostic"
                        value={patientData.diagnosis}
                        onChangeText={(value) => handleInputChange('diagnosis', value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Diagnostic"
                        value={patientData.diagnosis}
                        onChangeText={(value) => handleInputChange('diagnosis', value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Diagnostic"
                        value={patientData.diagnosis}
                        onChangeText={(value) => handleInputChange('diagnosis', value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Diagnostic"
                        value={patientData.diagnosis}
                        onChangeText={(value) => handleInputChange('diagnosis', value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Diagnostic"
                        value={patientData.diagnosis}
                        onChangeText={(value) => handleInputChange('diagnosis', value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Diagnostic"
                        value={patientData.diagnosis}
                        onChangeText={(value) => handleInputChange('diagnosis', value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Diagnostic"
                        value={patientData.diagnosis}
                        onChangeText={(value) => handleInputChange('diagnosis', value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Diagnostic"
                        value={patientData.diagnosis}
                        onChangeText={(value) => handleInputChange('diagnosis', value)}
                    />
                    
                    <Button title="Enregistrer" onPress={handleSubmit} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        top: 15,
        
    },
    form: {
        width: '80%',
        top: 15,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8
    }
});

export default Maladie1;



