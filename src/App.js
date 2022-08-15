import React, {useEffect, useState} from 'react';
import { Button, Card, Container, Spinner } from 'reactstrap';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserCard from './UserCard';

const API_URL = 'https://randomuser.me/api/';

const App = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    fetchRandomUser();
  }, []);

  const Loader = () => <>
        <Spinner
          color="primary"
          type="grow"
        >
          Loading...
        </Spinner>
        <Spinner
          color="secondary"
          type="grow"
        >
          Loading...
        </Spinner>
        <Spinner
          color="success"
          type="grow"
        >
          Loading...
        </Spinner>
        <Spinner
          color="danger"
          type="grow"
        >
          Loading...
        </Spinner>
        <Spinner
          color="warning"
          type="grow"
        >
          Loading...
        </Spinner>
        <Spinner
          color="info"
          type="grow"
        >
          Loading...
        </Spinner>
        <Spinner
          color="light"
          type="grow"
        >
          Loading...
        </Spinner>
        <Spinner
          color="dark"
          type="grow"
        >
          Loading...
        </Spinner>
      </>;

  const fetchRandomUser = () => {
      axios.get(API_URL).then((response) => {
        if(response && response.status === 200){
          setUser(response.data.results[0]);
          setIsLoading(false);
        }
      })
  };

  return (
    <Container fluid className='p-5 bg-info app-container'>
      <Button></Button>
     {isLoading ?<Card><Loader /></Card>  :<UserCard user={user} />}
    </Container>
  );
}

export default App;
