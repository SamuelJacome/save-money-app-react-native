import React, {useState} from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Header from '../../components/Header'
import {  Background, Input, SubmitButton, SubmitText } from './styles';

const New = () => {

  const[valor, setValor] = useState('');
  const[tipo, setTipo] = useState(null);
  return (
  <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
  <Background >
      <Header/>

      <SafeAreaView style={{alignItems: 'center'}}>
        <Input 
        placeholder="Valor Desejado" 
        keyboardType="numeric" 
        returnKeyType="next"
        onSubmitEditing = { ()=> Keyboard.dismiss() }
        />
      
        <SubmitButton>
          <SubmitText>Registrar</SubmitText>
        </SubmitButton>
      
      </SafeAreaView>

  </Background>

  </TouchableWithoutFeedback>
  );
}

export default New;