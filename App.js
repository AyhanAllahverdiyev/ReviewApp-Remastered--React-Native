import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import ReviewDetails from './screens/reviewDetails';
import HomeStack from './routes/homeStack';
import DrawerComponent from './routes/drawer';

const Stack = createNativeStackNavigator();

function App() {
  return(
         <DrawerComponent/>
     
);
}

export default App;