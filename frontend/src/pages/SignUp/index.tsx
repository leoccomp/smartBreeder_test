import React, { useState } from 'react';
import history from '../../services/history';

import { Container, Form, Logo, FormTitle, Link } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  function handleCreate() {
    alert('Usuário criado com sucesso!');
    history.push('/');
  };

  return (
    <Container>
      <Logo>
        <h2>SmartBreeder Test</h2>
      </Logo>
      <Form onSubmit={() => handleCreate()}>
        <FormTitle>Cadastrar</FormTitle>
        <Input 
          name="email"
          type="email" 
          placeholder="Email" 
          required 
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
          name="password"
          type="password" 
          placeholder="Senha" 
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Cadastrar</Button>
        <Link href="/">Já tenho cadastro</Link>
      </Form>
    </Container>
  );
}

export default SignUp;