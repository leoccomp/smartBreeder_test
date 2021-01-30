import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  background: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  height: 50px;
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
  margin-top: 20px;
`;

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  min-height: 100%;
  padding: 20px;
  margin-top: 20px;
  background: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  overflow-y: scroll;
`;

export const Image = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 120px;
    height: 120px;
    margin-bottom: 5px;
  }
  
  > span {
    margin-left: 20px;
  }
`;