import React, { useState } from 'react';

import { Container, Logo, Form, FormTitle, Link } from './styles';

import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { signIn } = useAuth();
  
  return (
    <Container>
      <Logo>
        <h2>SmartBreeder test</h2>
      </Logo>
      <Form onSubmit={() => signIn(email, password)}>
        <FormTitle>Entrar</FormTitle>
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
        <Button type="submit">Acessar</Button>
        <Link href="/signup">Cadastre-se</Link>
      </Form>
    </Container>
  );
}

export default SignIn;