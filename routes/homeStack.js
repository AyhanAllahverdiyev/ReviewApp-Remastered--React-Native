
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReviewDetails from '../screens/reviewDetails';
import Home from '../screens/home';
import Header from '../shared/header';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
       <Stack.Navigator initialRouteName='Home'   >
        <Stack.Screen name="Home" component={Home} options={{headerTitle:()=><Header/>}}/>
        <Stack.Screen name="ReviewDetails" component={ReviewDetails}  />

        </Stack.Navigator>
   );
}

export default HomeStack;