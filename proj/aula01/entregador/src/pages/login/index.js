// import { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { TextInput } from 'react-native-paper';

// import styles from '../../style/style'

// export default function login({ navigation }): any {
//     const [email, setEmail] = useState("");
//     const [senha, setSenha] = useState("");


//     const autenticar = () => {
//         fetch("", {
//             "method": "POST",
//             "headers": {
//                 "Content-Type": "application/json"
//             },
//             "body": JSON.stringify({
//                 "email": email,
//                 "senha": senha
//             })
//         })
//             .then(response => { return response.json(); })
//             .then(data => {
//                 if (data.lenght > 0) {
//                     navigation.navigate("Home", {
//                         "id": data[0].id,
//                         "nome": data[0].nome,
//                     })
//                 } else {
//                     console.log("Login inválido")
//                 }
//             })
//     }

//     return (
//         // <View>
//         // {
//             // pedidos.map((item, index) => {
//             // return (
//         // <View>
//         // <TextInput  value= (email) onChangeText = {(val)=> { setEmail(val) }}/>
//         // < TextInput value = { senha } onChangeText = {(val)=> { setSenha(val) }} />
//         //         < TouchableOpacity onPress = {()=> (autenticar())}>
//         //             <Text>LOGIN < /Text>
//         //             < /TouchableOpacity>
//         //             < /View> 
    

// }