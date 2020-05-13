import React, {useContext} from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../contexts/auth';

// import { Container } from './styles';

function Home () {
  const {user, signOut} = useContext(AuthContext)
  return (
  
  <View>
    <Text>Home</Text>
    <Text>{user && user.nome}</Text>
    <Text>{user && user.email}</Text>
    <Button title="Sair da Conta" onPress={()=> signOut()}/>
  </View>
  
  
  );
}

export default Home;