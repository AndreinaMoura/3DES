import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from './src/pages/login/index2'
import entregador from './src/pages/entregador/index'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={login} />
        <Stack.Screen name='entregador' component={entregador} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// import home from './src/pages/entregador/index'
// // import Nova from './src/pages/nova/Nova'
// // import tarefas from './src/pages/tarefas/buttonTarefas'
// // import Aberta from './src/pages/tarefas/Aberta'
// // import Finalizada from './src/pages/tarefas/Finalizada'
// // import Cancelada from './src/pages/tarefas/Cancelada'

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={home} />
//         {/* <Stack.Screen name="Nova" component={Nova} />
//         <Stack.Screen name="tarefas" component={tarefas} />
//         <Stack.Screen name="Aberta" component={Aberta} />
//         <Stack.Screen name="Finalizada" component={Finalizada} />
//         <Stack.Screen name="Cancelada" component={Cancelada} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }