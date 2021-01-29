import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { Input } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import SearchIcon from "@material-ui/icons/Search";
import {
  ChevronLeft,
  ChevronRight,
  FirstPage,
  LastPage,
  ArrowDownward,
} from '@material-ui/icons'

import Button from '../../components/Button';

import api from '../../services/api';

import { Container, Header, Body, Table, Images } from './styles';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState('');
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    setUrls([...urls, url]);
  }, [url]);
  
  async function handleNewImage(newData) {
    const { id } = newData;
    
    const image = await api.get(`photos/${id}`);
    
    const { url } = image.data;
    setUrl(url);
  }

  return (
    <Container>
      <Header>
        <Button type="">Sair</Button>
      </Header>
      <Body>
        <Table>
          <MaterialTable
            columns={[
              {
                title: "Titulo",
                field: "title",
                editComponent: editProps => (
                  <Input
                    autoFocus={true}
                    onChange={e => editProps.onChange(e.target.value)}
                  />
                )
              },
              { title: "idImg", field: "id" },
            ]}
            data={data}
            title="Imagens"
            icons={{
              Add: props => <AddIcon />,
              Edit: props => <EditIcon />,
              Delete: props => <DeleteIcon />,
              Clear: props => <DeleteIcon />,
              Check: props => <CheckIcon />,
              Search: props => <SearchIcon />,
              ResetSearch: props => <DeleteIcon />,
              FirstPage: props => <FirstPage />,
              LastPage: props => <LastPage />,
              NextPage: props => <ChevronRight/>,
              PreviousPage: props => <ChevronLeft/>,
              SortArrow: () => <ArrowDownward />,
            }}
            editable={{
              onRowAdd: newData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    setData([...data, newData]);
                    handleNewImage(newData);
                    resolve();
                  }, 1000);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);

                    resolve();
                  }, 1000);
                }),
              onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataDelete = [...data];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setData([...dataDelete]);

                    resolve();
                  }, 1000);
                })
            }}
          />
        </Table>
        <Images>

        </Images>
      </Body>
    </Container>
  );
}

export default Dashboard;