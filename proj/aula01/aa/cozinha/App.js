import { useEffect, useState } from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      console.log("Atualizar lista")
      listarPedidos();
    }, 1500);
  }, [])


  const listarPedidos = () => {
    fetch('')
      .then(response => { return response.json() })
      .then(data => {
        setPedidos(data);
      })
  }

  const enviarPedido = (id_pedido) => {
    fetch('' + id_pedido,
      {
        "method": "PUT"
      })
      .then(response => {
        if (response.status === 200) {
          console.log("Pedido enviado");
          listarPedidos();
        } else {
          console.log(response.status);
        }
      })
  }

  {
    pedidos.map((cada, index) => {
      return (
        <View style={style.container}>
          <View>
            <Text>Cozinha</Text>
          </View>
          <Text>Em Execução</Text>
          <View>
            <ScrollView>
              <View key={index}>
                <Text>Id: {cada.id}</Text>
                <Text>Cliente: {cada.cliente}</Text>
                <Text>Produto: {cada.produto}</Text>
                <Text>Endereço: {cada.endereco}</Text>
                <Text>Data: {cada.data}</Text>
                <Text>Horário: {cada.hora_pedido}</Text>
                <TouchableOpacity onPress={() => { enviarPedido(cada.id_pedido) }}>
                  <Text>Enviar Entrega</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      );
    })
  }
}