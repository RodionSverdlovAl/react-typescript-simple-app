import { ITodo } from "../types/types"

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem:React.FC<TodoItemProps> = ({todo}) =>{
    return(
        <div className="user_item">
            {todo.id}
            <p>{todo.title}</p>
            <input type="checkbox" checked={todo.completed}/>
        </div>
    )
}
 export default TodoItem