import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  margin: 7px 0;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  color: #fff;
  background-color: #080;
  transition: opacity .3s;
  
  &:hover {
    opacity: .7;
  }
`;