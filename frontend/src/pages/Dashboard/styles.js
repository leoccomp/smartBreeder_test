import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  background: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;

  > button {
    width: 100px;
    margin-right: 15px;
  }
`;

export const Body = styled.body`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const Table = styled.div`
  width: 48%;
  padding: 20px;
  margin-top: 10px;
`;

export const Images = styled.div`
  width: 48%;
  padding: 20px;
  margin-top: 10px;
  background: #ccc;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
`;