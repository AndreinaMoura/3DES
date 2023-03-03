import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

// import styles from '../styles/styleGeral'

export default function Home({ navigation }) {
    const [operacoes, setOperacoes] = useState([])

    var usuario = localStorage.getItem('user')
    

    useEffect(() => {
        setInterval(() => {
            console.log('Atualizando lista')
            listarOperacoes()
        }, 5000)
    }, [])


    const listarOperacoes = () => {
        fetch('http://localhost:3000/operacoes')
            .then(res => { return res.json() })
            .then(data => {
                setOperacoes(data)
            })
    }

    console.log(operacoes)
    

        const concluir = (id, veiculo, motorista) => {
            listarOperacoes(),
            console.log(id, veiculo, motorista)

            const options = {
                method: 'PUT',
                headers: {
                  Authorization: 'Bearer ' + usuario.token
                }
              };
              
              fetch(`http://localhost:3000/operacoes/${id}/${veiculo}/${motorista}`, options)
                .then(response => response.status)
                .then(response => {
                    if(response === 200){
                        console.log('ok')
                    }
                })
        }

    return (
        <View>
            <View>
                <View>
                    <TouchableOpacity><Text>Relátorios</Text></TouchableOpacity>
                    <TouchableOpacity><Text>Manutenções</Text></TouchableOpacity>
                </View>
            </View>

            <View>
                <Text>Operações em andamento</Text>
                <View>
                    {
                        operacoes.map((o, index) => {
                            return (
                                <ScrollView key={index}>
                                    <Text>Id: {o.id}</Text>
                                    <Text>Veiculo: {o.veiculo}</Text>
                                    <Text>Motorista: {o.motorista}</Text>
                                    <Text>Data_saida: {o.data_saida}</Text>
                                    <Text>Descrição: {o.descricao}</Text>
                                    <Text>Data Retorno: {o.data_retorno}</Text>
                                    <TouchableOpacity onPress={() => {
                                        concluir(o.id, o.veiculo, o.motorista)
                                    }}><Text>Concluir</Text></TouchableOpacity>
                                </ScrollView>
                            )
                        })
                    }

                </View>
            </View>
        </View>
    )

}