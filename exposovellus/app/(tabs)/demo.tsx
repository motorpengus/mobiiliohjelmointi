import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function DemoScreen() {

    const [name, setName] = useState("Anonymous");

    return (
        <View style={
            {
                borderColor: "red",
                borderWidth: 5,
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }
        }>
            <Text style={{ color: "black" }}>
                Hello {name}👋 🌍!
            </Text>
            <TextInput value={name}
                onChangeText={ setName }
                style={{
                borderColor: "red",
                borderWidth: 2,
                width: 150,
                padding: 5
            }} />
            <Button title="Ok" />
        </View>
    );
}
