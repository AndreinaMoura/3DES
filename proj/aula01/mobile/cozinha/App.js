import * as React from "react";

import { useState, useEffect } from "react";
import { View, Text } from "react-native";

import styles from "./styles/style";

import ButtonFinish from "./components/ButtonFinish";

export default function App() {

  const [pedido, setPedido] = useState([]);

  useEffect(() => {
    setInterval(() => {
      lista();
    }, 1500);
  }, [])

  const lista = () => {
    fetch("http://localhost:3000/pedidosapreparar")
      .then((response) => { return response.json() })
      .then((data) => {
        setPedido(data);
      })
  }

  const close = (client) => {
    const data = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Cliente: client }),
    }

    fetch("http://localhost:3000/atualizarpedidopronto", data)
      .then((response) => response.status)
      .then((resp) => {
        if (resp === 200) {
          lista();
        } else {
          console.log(resp.status);
        }
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Pedidos a Preparar</Text>
      </View>

      {pedido.map((pedido, index) => {
        return (
          <View style={styles.boxOrder} key={index}>
            <Text style={styles.orderData}>{'Pedido nº: '+ pedido.ID_Pedido}</Text>
            <Text style={styles.orderData}>{'Cliente: '+ pedido.Cliente}</Text>
            <Text style={styles.orderData}>{'Endereço: '+ pedido.Endereco}</Text>
            <Text style={styles.orderData}>{'Produto: '+ pedido.Produto}</Text>
            <Text style={styles.orderData}>{'Data: '+ pedido.data}</Text>
            <Text style={styles.orderData}>{'Hora do Pedido: '+ pedido.Hora_pedido}</Text>
            <Text style={styles.orderData}>{'Entregador: '+pedido.nome}</Text>
            <ButtonFinish
              value="ENTREGAR"
              onPress={() => {
                close(pedido.Cliente);
              }}
            ></ButtonFinish>
          </View>
        );
      })}
    </View>
  );
}



