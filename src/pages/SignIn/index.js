import React from 'react';
import { View, Text } from 'react-native';

import { Container,
        Background,
        Logo,
        AreaInput,
        Input,
        } from './styles';


function SignIn () {
  return (
  
  <Background>
    <Container>
        <Logo source={require('../../../assets/Logo.png')}/>
        <AreaInput>

            <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            />

        </AreaInput>

        <AreaInput>

            <Input
            placeholder="Password"
            autoCorrect={false}
            autoCapitalize="none"
            />

        </AreaInput>
    
    
    
    </Container>


  </Background>
  
  
  );
}

export default SignIn;