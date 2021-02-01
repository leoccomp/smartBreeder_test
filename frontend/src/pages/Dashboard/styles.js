import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 70px auto;

  grid-template-areas:
  'MH MH'
  'TA IM';

  height: 100vh;

  @media(max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: 70px auto;

    grid-template-areas:
    'MH'
    'TA'
    'IM';
  }
`;

export const Header = styled.div`
  grid-area: MH;
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

export const Table = styled.div`
  grid-area: TA;
  width: 48vw;
  margin-left: 10px;

  @media(max-width: 600px) {
    width: 95%;
    margin-right: 10px;
  }
`;

export const Images = styled.div`
  grid-area: IM;
  width: 48vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  overflow-y: scroll;

  @media(max-width: 600px) {
    width: 95%;
    margin-right: 10px;
  }
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