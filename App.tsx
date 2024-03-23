import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import CookingScreen from './src/screens/CookingScreen';
import HomeScreen from './src/screens/HomeScreen';
import ResturantsScreen from './src/screens/ResturantsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screen} from 'react-native-screens';
import SatisfyScreen from './src/screens/SatisfyScreen';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Satisfy Craving" component={SatisfyScreen} />
        <Stack.Screen name="Tab" component={TabNavigator}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Restaurants" component={ResturantsScreen} />
      <Tab.Screen name="Cooking" component={CookingScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  textInput: {
    fontSize: 20,
    marginLeft: 10,
    width: '90%',
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 21,
    padding: 6,
    backgroundColor: '#F5F5F5',
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 16,
    shadowRadius: 3.84,
  },
  iconView: {
    justifyContent: 'center',
  },
  touchStyle: {
    justifyContent: 'center',
  },
});

export default App;
