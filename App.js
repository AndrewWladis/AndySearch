import "react-native-url-polyfill/auto";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './Search';
import Results from './Results';
import Web from './Web';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search" >
        <Stack.Screen name="Search" component={Search} options={{headerShown: false}} />
        <Stack.Screen name="Results" component={Results} options={{headerStyle: {backgroundColor: '#1a1a1a'}, headerTintColor: 'white', headerTitleStyle: {fontWeight: 'bold',}}}/>
        <Stack.Screen name="Web" component={Web} options={{headerStyle: {backgroundColor: '#1a1a1a'}, headerTintColor: 'white', headerTitleStyle: {fontWeight: 'bold',}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};