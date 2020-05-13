import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../../contexts/auth';

// import { Container } from './styles';

function Home () {
  const {user} = useContext(AuthContext)
  return (
  
  <View>
    <Text>Home</Text>
    <Text>{user && user.nome}</Text>
    <Text>{user && user.email}</Text>
  </View>
  
  
  );
}

export default Home;