import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CT;
  color: '#fff';
  background-color: '#3a3a3a';
  padding: 25px;
  height: calc(100vh - 70px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: '#ccc';
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: '#d3d3d3';
    border-radius: 10px;
  }
`;