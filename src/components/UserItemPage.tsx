import { useState } from "react";
import { useEffect } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { useParams  } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const UserItemPage:React.FC = () =>{

    const [user, setUser] = useState<IUser| null>(null);
    const params = useParams();
    const navigate = useNavigate();
  
    useEffect(()=>{
      fetchUser();
    },[])
  
    async function fetchUser(){
      try{
        const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
        setUser(response.data)
      }catch(e){
        alert(e)
      }
    }

    return(
        <div>
            <button onClick={()=>navigate('/users')}>Back</button>
            <h3>Page of user {user?.name}</h3>
            <div>{user?.email}</div>
            <div>{user?.address.city} {user?.address.street}</div>
        </div>
    )
}

export {UserItemPage}