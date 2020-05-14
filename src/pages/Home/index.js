import React, {useContext, useState} from 'react';
import { AuthContext } from '../../contexts/auth';

import { Container, Background, Nome, Saldo, Title, List } from './styles';
import Header from '../../components/Header';
import HistoricoList from '../../components/HistoricoList'
function Home () {
  const {user} = useContext(AuthContext)

  const[historico, setHistorico] = useState([
    {key: '1', tipo: 'receita', valor: 1200 },
    {key: '2', tipo: 'despesa', valor: 200 },
    {key: '3', tipo: 'receita', valor: 1200 },
    {key: '4', tipo: 'despesa', valor: 89.62 },
    {key: '5', tipo: 'despesa', valor: 89.62 },
    {key: '6', tipo: 'despesa', valor: 89.62 },
    {key: '7', tipo: 'despesa', valor: 89.62 },
  ])
  return (
  
  <Background>
    <Header/>
    
      <Container>
        <Nome>{user && user.nome}</Nome>
        <Saldo>R$ 120,00</Saldo>
      </Container>


      <Title>Ultimas movimentações</Title>


    <List
      showsVerticalScrollIndicator={false}
      data={historico}
      keyExtractor={ item => item.key}
      renderItem={({item})=>(<HistoricoList data={item}/>)}
    
    />
    
    </Background>
  
  
  );
}

export default Home;



