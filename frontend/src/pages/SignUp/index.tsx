import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import history from '../../services/history';
import { Form } from '@unform/web';

import { Container, Content, Logo, FormTitle, Link } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { createUser } from '../../store/modules/users/actions';
import { Users } from '../../store/modules/users/types';
import { ApplicationState } from '../../store';

const SignUp: React.FC = () => {
  const user = useSelector<ApplicationState>(state => state.user.data);
  const dispatch = useDispatch();

  const handleCreate = useCallback((data: Users) => {
    dispatch(createUser(data));  
    alert('Usuário criado com sucesso!');
    console.log(user);
    history.push('/');
  }, [dispatch]);

  return (
    <Container>
      <Logo>
        <h2>SmartBreeder Test</h2>
      </Logo>
       <Content>
        <Form onSubmit={handleCreate}>
          <FormTitle>Cadastrar</FormTitle>
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
          <Button type="submit">Cadastrar</Button>
          <Link href="/">Já tenho cadastro</Link>
        </Form>
      </Content> 
    </Container>
  );
}

export default connect(null)(SignUp);