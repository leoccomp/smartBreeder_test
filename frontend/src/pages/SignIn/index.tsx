import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container, Logo, Content, FormTitle, Link } from './styles';

import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Users } from '../../store/modules/users/types';
import { ApplicationState } from '../../store';

const SignIn: React.FC = () => {
  const user = useSelector<ApplicationState>(state => state.user.data);
  const { signIn } = useAuth();

  console.log(user);

  const handleSignIn = useCallback(async (data: Users) => {
    try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email é obrigatório!')
            .email('Digite um email válido!'),
          password: Yup.string()
            .min(6, 'Senha deve conter no minimo 6 digitos!'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
    } catch (err) {
      console.log(err);
    }
    
    signIn(data.email, data.password);
    alert('Login efetuado com sucesso!');
    // history.push('/dashboard');
  }, [signIn]);
  
  return (
    <Container>
      <Logo>
        <h2>SmartBreeder Test</h2>
      </Logo>
       <Content>
        <Form onSubmit={handleSignIn}>
          <FormTitle>Entrar</FormTitle>
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