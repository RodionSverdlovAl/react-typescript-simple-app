import { IUser } from "../types/types"

interface UserItemProps {
    user: IUser;
    onClick: (user:IUser) => void;
}

const UserItem:React.FC<UserItemProps> = ({user, onClick}) =>{
    return(
        <div onClick={()=>onClick(user)} className="user_item">
            {user.id} {user.name}
            <p>Live in {user.address.city}</p>
             <p>Street: {user.address.street}</p>
        </div>
    )
}
 export default UserItem