import React from 'react';
import{LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import Reducers from './src/Reducers';

import Preload from './src/screens/Preload';
import Home from './src/screens/Home';
import Conversas from './src/screens/Conversas';

import SignUp from './src/screens/SignUp';
import SignIn from './src/screens/SignIn';

LogBox.ignoreAllLogs();


let store = createStore(Reducers, applyMiddleware(ReduxThunk));


const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Preload" component={Preload}  options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home}  options={{ title: 'Home' }} />
        <Stack.Screen name="Conversas" component={Conversas}  options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp}  options={{ title: 'Cadastrar' }} />
        <Stack.Screen name="SignIn" component={SignIn}  options={{ title: 'Login' }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;