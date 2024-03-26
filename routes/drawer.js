import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about';
import HomeStack from './homeStack';
import { NavigationContainer } from '@react-navigation/native';
import Header from '../shared/header';

const Drawer = createDrawerNavigator();

export default function DrawerComponent() {
  return (
    <NavigationContainer>

    <Drawer.Navigator initialRouteName='HomeStack' >
    
      <Drawer.Screen name="HomeStack" component={HomeStack} options={{title:'GameZone'}}/>
      <Drawer.Screen name="About" component={About} options={{title:'About'}} />
    </Drawer.Navigator>
        </NavigationContainer>

  
  );
}

 