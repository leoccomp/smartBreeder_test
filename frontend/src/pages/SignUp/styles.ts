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
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export const Content = styled.div`
  width: 300px;
  height: 250px;
  padding: 30px;
  border-radius: 10px;
  background-color: #dcdcdc;
`;

export const FormTitle = styled.h1`
  margin-bottom: 20px;
  margin-top: 10px;
  
  &:after {
    content: '';
    display: block;
    width: 55px;
    border-bottom: 10px solid #080;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  float: right;
  font-size: 14px;
  margin-top: 10px;
`;
