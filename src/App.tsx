import React, { useEffect, useState } from 'react';
import './App.scss';
import axios, { Axios } from 'axios';
import UserList from './components/UserList';
import { IUser } from './types/types';

function App() {

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(()=>{
    fetchUsers();
  },[])

  async function fetchUsers(){
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data)
    }catch(e){
      alert(e)
    }
  }


  return (
    <div className="App">
      <UserList users={users}/>
    </div>
  );
}

export default App;
