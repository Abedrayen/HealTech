
import React, { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native';

function DiagnosticPage() {
    const [symptomes, setSymptomes] = useState('');
    const [diagnostic, setDiagnostic] = useState('');

    const handleInputChange = (text) => {
        setSymptomes(text);
    };

    const handleSubmit = () => {
        // Effectuer le diagnostic en fonction des symptômes saisis
        // Ici, nous utilisons simplement un diagnostic statique pour l'exemple
        setDiagnostic('Vous pourriez avoir une grippe.');

        // Réinitialiser les symptômes après le diagnostic
        setSymptomes('');
    };

    return (
        <SafeAreaView>
            <Text>Formulaire de diagnostic</Text>
            <TextInput
                placeholder="Symptômes"
                value={symptomes}
                onChangeText={handleInputChange}
            />
            <Button title="Obtenir un diagnostic" onPress={handleSubmit} />
            {diagnostic && <Text>Diagnostic : {diagnostic}</Text>}
        </SafeAreaView>
    );
}

export default DiagnosticPage;
