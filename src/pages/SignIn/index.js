import React, {useState, useContext} from 'react';
import { Platform, ActivityIndicator} from 'react-native';
// import { useNavigation } from '@react-navigation/native'
import {AuthContext } from '../../contexts/auth';


import { Container,
        Background,
        Logo,
        AreaInput,
        Input,
        SubmitButton,
        SubmitText,
        Link,
        LinkText
        } from './styles';


function SignIn ({ navigation }) {
    // const navigation = useNavigation();

    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn, loadingAuth } = useContext(AuthContext)

    function handleLogin(){
        signIn(email, password);
    }
 
    return (
  
  <Background>
    <Container
    behavior = {Platform.OS === 'ios' ? 'padding': ''}
    enabled
    >
        <Logo source={require('../../../assets/Logo.png')}/>
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
            placeholder="Password"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            value={password}
            onChangeText = {(text) => setPassword(text) }
            />

        </AreaInput>


        <SubmitButton onPress={handleLogin}>
            {
                loadingAuth ?(
                    <ActivityIndicator size={20} color="FFF"/>
                ) : (
                    <SubmitText>Acessar</SubmitText>
                )
            }
           
        </SubmitButton>
    

        <Link onPress={()=> navigation.navigate('SignUp')}>
            <LinkText>Criar uma Conta</LinkText>
        </Link>
    
    
    </Container>


  </Background>
  
  
  );
}

export default SignIn;