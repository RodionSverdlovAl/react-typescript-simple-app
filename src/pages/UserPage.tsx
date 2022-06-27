import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { IUser } from "../types/types";
import List from "../components/List";
import UserItem from "../components/UserItem";
import { useNavigate } from "react-router-dom";


const UserPage:React.FC =() =>{
    const [users, setUsers] = useState<IUser[]>([]);
    const navigate = useNavigate();
    useEffect(()=>{
      fetchUsers();
    },[])
  
    async function fetchUsers(){
      try{
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data)
      }catch(e){
        alert(e)
      }
    }
  
    return(
        <div>
             <List items={users} renderItem={(user: IUser)=> <UserItem onClick={()=>navigate('/users/'+user.id)} key={user.id} user = {user}/>}/>
        </div>
    )
}

export {UserPage}