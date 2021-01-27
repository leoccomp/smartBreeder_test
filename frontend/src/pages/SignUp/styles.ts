import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: '#3a3a3a';
  
  height: 100vh;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  
  > h2 {
    color: #3a3a3a;
    margin-left: 7px;
  }
`;

export const Form = styled.form`
  width: 300px;
  height: 300px;
  padding: 30px;
  border-radius: 10px;
  background-color: #dcdcdc;
`;

export const FormTitle = styled.h2`
  color: #3a3a3a;
  margin-bottom: 20px;
  
  &:after {
    content: '';
    display: block;
    width: 55px;
    border-bottom: 10px solid #080;
  }
`;
