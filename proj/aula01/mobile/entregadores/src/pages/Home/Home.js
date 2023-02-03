import { Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "../../styles/style";

export default function Home({route}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>login do entregador</Text>
      </View>
      <TextInput placeholder="Digite o email" style={styles.input}></TextInput>
      <TextInput placeholder="Digite a senha" style={styles.input}></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.txtButton}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}