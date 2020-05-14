import React, {useContext} from 'react';

import {AuthContext} from '../../contexts/auth'

import { Container, Nome, NewLink, NewText, Logout, LogoutText } from './styles';
import Header from '../../components/Header'
export default function Profile ({navigation}) {

    const { user, signOut } = useContext(AuthContext);
  return (
  
  <Container >
      <Header/>
      <Nome>
          {user && user.nome}
      </Nome>

      <NewLink onPress={() => {navigation.navigate('Registrar')}}>
          <NewText>Registrar gastos</NewText>
      </NewLink>

      <Logout onPress={() => signOut()}>
          <LogoutText>Sair</LogoutText>
      </Logout>

  </Container>
  );
}
