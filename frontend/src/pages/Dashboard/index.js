import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';

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

import { Container, Header, Table, Images, Image } from './styles';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState({
    id: 0,
    title: '',
    url: '',
  });
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    if (url.url !== '') {
      setUrls([...urls, url]);
      setUrl({
        id: 0,
        title: '',
        url: '',
      });
    }
  }, [url]);

  async function handleNewImage(newData) {
    const { id, title } = newData;

    try {
      const image = await api.get(`photos/${id}`);

      const { url } = image.data;
      setUrl({
        id,
        title,
        url,
      });
      toast.success('Imagem adicionada com sucesso!');
      return true;
    } catch (err) {
      toast.error('Imagem não disponivel!');
      return false;
    }
  }

  function handleRemoveImage(indexDelete) {
    const data = urls.filter(obj => obj.id !== indexDelete);
    setUrls(data);
    toast.success('Imagem excluída com sucesso!');
  }
  
  function handleChangeImage(newData, oldData) {
    let data = urls.slice();
    const index = urls.findIndex(element => element.id === oldData.id )

    data[index] = {
      ...data[index], 
      title: newData.title,
    }
    setUrls(data);
    toast.success('Título da imagem alterado com sucesso!');
  }

  return (
    <Container>
      <Header>
        <Button type="">Sair</Button>
      </Header>
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
            { title: "idImg", field: "id", editable: "onAdd" },
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
                setTimeout(async () => {
                  const addOk = await handleNewImage(newData);
                  if (addOk) {
                    setData([...data, newData]);
                  }
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
                  handleChangeImage(newData, oldData);
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
                  handleRemoveImage(oldData.id);
                  resolve();
                }, 1000);
              })
          }}
        />
      </Table>
      <Images>
      {urls.map((url) => (
        <Image key={url.id}>
          <img src={url.url} alt='imagem' />
          <span>{url.title}</span>
        </Image>
      ))}
      </Images>
    </Container>
  );
}

export default Dashboard;