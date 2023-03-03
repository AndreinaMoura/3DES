import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

import styles from '../login/style'
// import ButtonConectar from '../../components/btnConectar/index';

export default function Login({ navigation }) {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const flag = false

    function validar(){
        const options = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: `{"email":"${value1}","senha":"${value2}"}`
        };
    
        fetch('http://localhost:3000/usuario/login', options)
            .then(response => response.json())
            .then(response =>{
                if(value1 != undefined && value2 != undefined){
                    if(response.niveis.nivel == 'Gerencial'){
                        localStorage.setItem('user', JSON.stringify(response))
                        navigation.navigate('Home')
                    }
                }
            })
            
    }

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.titulo}>AgroTech</Text>
                <View style={styles.divInputzinho}>
                    <TextInput style={styles.inputzinho} placeholder='Digite o email' value={value1} onChangeText={(val) => { setValue1(val) }} />
                    <TextInput style={styles.inputzinho} value={value2} onChangeText={(val1) => { setValue2(val1) }} placeholder='Digite a senha'  />
                    <TouchableOpacity style={styles.buttonzinho}>
                        <Text style={styles.txtbutton}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

}