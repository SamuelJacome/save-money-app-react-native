import React, {useContext} from 'react';
import { AuthContext } from '../../contexts/auth';

import { Container, Background, Nome, Saldo, Title } from './styles';
import Header from '../../components/Header';
function Home () {
  const {user, signOut} = useContext(AuthContext)
  return (
  
  <Background>
    <Header/>
    
      <Container>
        <Nome>Samuel</Nome>
        <Saldo>R$ 120,00</Saldo>
      </Container>


      <Title>Ultimas movimentações</Title>

    
    </Background>
  
  
  );
}

export default Home;



// <Text>Home</Text>
//     <Text>{user && user.nome}</Text>
//     <Text>{user && user.email}</Text>
//     <Button title="Sair da Conta" onPress={()=> signOut()}/>