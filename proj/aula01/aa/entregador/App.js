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