import { IUser } from "../types/types"

interface UserItemProps {
    user: IUser;
}

const UserItem:React.FC<UserItemProps> = ({user}) =>{
    return(
        <div className="user_item">
            {user.id} {user.name}
            <p>Live in {user.address.city}</p>
             <p>Street: {user.address.street}</p>
        </div>
    )
}
 export default UserItem