import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";

// import Home from '../cozinha/index'
import entregador from '../entregador/index'

// const Stack = createNativeStackNavigator();

export default function () {
  const [pedidos, setPedidos] = useState([]);

  useEffect(()=>{
    setInterval(()=>{
      console.log("Atualizar lista")
      listarPedidos();
    },1500);
//   fetch('')
//   .then(response =>{return response.json()})
//   .then(data=>{
//     setPedidos(data);
// })
},[])
{
pedidos.map((cada,index)=>{
  return(
    <View>
      <View>
      <Text>Cozinha</Text>
      </View>
      <Text>Em Execução</Text>
      <View>
      <ScrollView>
      <View>
        <Text>id: {cada.id}</Text>
        <Text>Cliente: {cada.cliente}</Text>
        <Text>Produto: {cada.produto}</Text>
        <Text>endereço: {cada.endereco}</Text>
        <Text>data: {cada.data}</Text>
        <Text>horário; {cada.horario}</Text>
        <TouchableOpacity onPress={() =>{}}>
          <Text>Enviar Entrega</Text>
        </TouchableOpacity>
      </View> 
      </ScrollView>
      </View>
    </View> 
    });
  }