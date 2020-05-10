import React, {useState} from 'react';
import { Platform } from 'react-native';

import { Container,
        Background,
        Logo,
        AreaInput,
        Input,
        SubmitButton,
        SubmitText,

        } from '../SignIn/styles';


function SignUp ({ navigation }) {

    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nome, setNome] = useState('');
 
    return (
  
  <Background>
    <Container
    behavior = {Platform.OS === 'ios' ? 'padding': ''}
    enabled
    >
        <Logo source={require('../../../assets/Logo.png')}/>
        <AreaInput>

            <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={nome}
            onChangeText = {(text) => setNome(text) }
            />

        </AreaInput>

        <AreaInput>

            <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText = {(text) => setEmail(text) }
            />

        </AreaInput>

        
        <AreaInput>

            <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText = {(text) => setPassword(text) }
            />

        </AreaInput>

  


        <SubmitButton>
            <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

    
    
    </Container>


  </Background>
  
  
  );
}

export default SignUp;