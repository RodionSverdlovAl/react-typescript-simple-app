import React, { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import { ITodo, IUser } from './types/types';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';

function App() {

  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(()=>{
    fetchUsers();
    fetchTodos();
    console.log(todos)
  },[])

  async function fetchUsers(){
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data)
    }catch(e){
      alert(e)
    }
  }

  async function fetchTodos(){
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodos(response.data)
    }catch(e){
      alert(e)
    }
  }


  return (
    <div className="App">
      <List items={users} renderItem={(user: IUser)=> <UserItem key={user.id} user = {user}/>}/>
      <List items={todos} renderItem={(todo: ITodo)=> <TodoItem key={todo.id} todo = {todo}/>}/>
    </div>
  );
}

export default App;
