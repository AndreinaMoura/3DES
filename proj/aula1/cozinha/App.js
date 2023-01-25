import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import Home from '../cozinha/index'
import entregador from '../entregador/index'

const Stack = createNativeStackNavigator();

export default function () {
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='entregador' component={entregador}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
//   const [info, setInfo] = useState("")

//   const salvar = async () => {
//     try {
//       await AsyncStorage.setItem('data', info);
//       await AsyncStorage.setItem('informacoes', JSON.stringify(informacoes));
//       setInfo("");
//     } catch (err) {
//       console.log(err)
//     }
//   }


//   const ler = async () => {
//     try {
//      let data = await AsyncStorage.getItem('informacoes');
//       setLida(data)
//     } catch (err) {
//       console.log(err)
//     }
//   }
  
//   return (
//     <View style={styles.container}>
//       {/* <Image style={styles.img} source={"url('https://cdn.e-konomista.pt/uploads/2020/03/pizza-bimby-.jpg')"}/> */}
//       <Button onPress={() => { salvar() }} />
//       <Button title='Ler' onPress={() => { ler() }} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   img: {
//     height: '80px',
//     width: '80px'
//   }
// });
