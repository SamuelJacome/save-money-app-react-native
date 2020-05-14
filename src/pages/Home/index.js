import React, {useContext, useState} from 'react';
import { AuthContext } from '../../contexts/auth';

import { Container, Background, Nome, Saldo, Title, List } from './styles';
import Header from '../../components/Header';
import HistoricoList from '../../components/HistoricoList'
function Home () {
  const {user, signOut} = useContext(AuthContext)

  const[historico, setHistorico] = useState([
    {key: '1', tipo: 'receita', valor: 1200 },
    {key: '2', tipo: 'despesa', valor: 200 },
    {key: '3', tipo: 'receita', valor: 1200 },
    {key: '4', tipo: 'receita', valor: 89.62 },
  ])
  return (
  
  <Background>
    <Header/>
    
      <Container>
        <Nome>Samuel</Nome>
        <Saldo>R$ 120,00</Saldo>
      </Container>


      <Title>Ultimas movimentações</Title>


    <List
      showVerticalScrollIndicator={false}
      data={historico}
      keyExtractor={ item => item.key}
      renderItem={(item)=>(<HistoricoList/>)}
    
    />
    
    </Background>
  
  
  );
}

export default Home;



