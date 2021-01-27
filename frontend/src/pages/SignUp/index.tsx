import React, { useState } from 'react';
import history from '../../services/history';

import { Container, Logo, Form, FormTitle } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function handleCreate() {
    alert('Usuário criado com sucesso!');
    history.push('/');
  }

  return (
    <Container>
      <Logo>
        <h2>SmartBreeder Test</h2>
      </Logo>
      <Form onSubmit={handleCreate}>
        <FormTitle>Cadastrar</FormTitle>
        <Input 
          type="email" 
          placeholder="Email" 
          required 
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
          type="password" 
          placeholder="Senha" 
          required 
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
}

export default SignUp;