import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GrUser } from 'react-icons/gr';

import { useSelector } from 'react-redux';

import { Container, Logo, Content, FormTitle, Link } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { IState } from '../../store';
import { useAuth } from '../../hooks/auth';

interface IUserData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const listUser = useSelector<IState, IUserData[]>(state => state.user.users);
  const history = useHistory();
  const { signIn } = useAuth();

  const handleSignIn = useCallback(async (data: IUserData, { reset }) => {
    let userExist = false;
    listUser.forEach(function(user) {
      if (user.email === data.email && user.password === data.password) {
        userExist = true;
      }
    });
    if (userExist) {
      signIn();
      toast.success('Usuário logado com sucesso!!');
      history.push('/dashboard');
    } else {
      toast.error('Combinação Email/Senha inválidos!');
      reset();
    }
  }, []);
  
  return (
    <Container>
      <Logo>
        <GrUser size={40} />
        <FormTitle>Entrar</FormTitle>
      </Logo>
      <Content>
        <Form onSubmit={handleSignIn}>
          <Input 
            name="email" 
            type="email" 
            placeholder="Email" 
            required 
          />
          <Input 
            name="password" 
            type="password" 
            placeholder="Senha" 
            required 
          />
          <Button type="submit">Acessar</Button>
          <Link href="/signup">Cadastre-se</Link>
        </Form>
      </Content>
    </Container>
  );
}

export default SignIn;