import React, { useState } from "react";
import { View, 
        Text, 
        TextInput, 
        Vibration, 
        SafeAreaView, 
        TouchableOpacity, 
        Pressable, 
        Keyboard } from "react-native";

import styles from './style'

export default function PasswordGenerator() {  

    const [lenght, setLeght] = useState(null)
    const [password, setPassword] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    
    function generatePassword() {
        var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~^.?@#$%&*/-_()'
        var password = ''

        for (var i = 0; i <= lenght; i++){
                var randomGenerator = Math.floor(Math.random() * characters.length)
                password += characters.substring(randomGenerator, randomGenerator +2)
            }
        setPassword(password)
        setLeght(null)
    }

    function validation(){
        if (lenght == null){
            setErrorMessage('This field is required')
            setPassword(null)
            Vibration.vibrate()
        } else {
            generatePassword()
            setErrorMessage(null)
        }
    }

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            <SafeAreaView>
                <View style={styles.Title}>
                    <View style={styles.LineHead_2}/>
                    <View style={styles.LineHead_1}/>
                        <Text style={styles.TitleText}>Password Generator</Text>
                    <View style={styles.LineHead_1}/>
                    <View style={styles.LineHead_2}/>
                </View>
                <View style={styles.FormContainer}>
                    <Text style={styles.Label}>Insert the length here:</Text>
                    <Text style={styles.ErrorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.Input}
                        keyboardType="numeric"
                        value={lenght}
                        onChangeText={(lenght) => {
                            setLeght(lenght)
                        }}
                        placeholder='Example: 16'
                        placeholderTextColor={'#7B0708'}
                    />
                    <TouchableOpacity
                        style={styles.Button}
                        onPress={() => {
                            validation()
                        }}
                    >
                        <Text style={styles.ButtonText}>Generate</Text>
                    </TouchableOpacity>
                    <View style={styles.ResultBox}>
                        <Text
                            style={styles.ResultText}
                            selectable={true}
                        >{password}</Text>
                    </View>
                </View>
            </SafeAreaView>
        </Pressable>
    )

}