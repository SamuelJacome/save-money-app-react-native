import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import firebase from './src/services/firebase';
import { StatusBar } from 'react-native';
import Routes from './src/routes/index'
// import { Container } from './styles';

function App ()  {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#131313" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  
  );
}

export default App;