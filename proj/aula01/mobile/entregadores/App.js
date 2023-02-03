import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import home from "./src/pages/Home/Home";
import login from "./src/pages/Login/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='login' component={login}/>
      <Stack.Screen name='home' component={home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}