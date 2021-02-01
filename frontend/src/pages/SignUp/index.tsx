import React, { useCallback } from 'react';
import { toast } from 'react-toastify';
import { Form } from '@unform/web';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GrUserAdd } from 'react-icons/gr';

import { Container, Content, Logo, FormTitle, Link } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { addUser } from '../../store/modules/user/actions';
import { IState } from '../../store';

interface IUserData {
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const listUser = useSelector<IState, IUserData[]>(state => state.user.users);
  const history = useHistory();

  const handleCreate = useCallback((data: IUserData, { reset }) => {
    let userExist = false;
    listUser.forEach(function(user) {
      if (user.email === data.email) {
        toast.error('Email já existe!');
        userExist = true;
        reset();
      }
    });
    if (!userExist) {
      dispatch(addUser(data));
      toast.success('Usuário criado com sucesso!');
      history.push('/');
    }
  }, [dispatch]);

  return (
    <Container>
      <Logo>
        <GrUserAdd size={40} color={"#383838"} />
        <FormTitle>Cadastrar</FormTitle>
      </Logo>
      <Content>
        <Form onSubmit={handleCreate}>
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

export default SignUp;