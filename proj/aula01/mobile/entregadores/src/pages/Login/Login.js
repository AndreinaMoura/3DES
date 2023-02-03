import { Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "../../styles/style";

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");  
  
      const autenticar = () => {
          fetch("", {
              "method": "POST",
              "headers": {
                  "Content-Type": "application/json"
              },
              "body": JSON.stringify({
                  "email": email,
                  "senha": senha
              })
          })
              .then(response => { return response.json(); })
              .then(data => {
                  if (data.lenght > 0) {
                      navigation.navigate("Home", {
                          "id": data[0].id,
                          "nome": data[0].nome,
                      })
                  } else {
                      console.log("Login inválido")
                  }
              })
      }
  
export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>login do entregador</Text>
      </View>
      <TextInput style={styles.input} placeholder='Informe o email' value={value1} onChangeText={(val) => { setValue1(val) }} />
      <TextInput style={styles.input} secureTextEntry={true} placeholder='Informe sua senha' value={value2} onChangeText={(val2) => { setValue2(val2) }} />
      <TouchableOpacity style={styles.button} onPress = {()=> (autenticar())}>
        <Text style={styles.txtButton}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}