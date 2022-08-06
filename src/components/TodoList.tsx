import React from 'react';
import {Todo} from "../App"

type Props = {
    todos: Todo[],
    handleComplete: (id: string) => void,
    handleDelete: (id: string) => void
};

export const TodoList: React.FC<Props> = ({todos, handleComplete, handleDelete}) => {
  return (
    <>
        <h4>未完了のタスク: {todos.length}個</h4>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                {todo.value}
                <button onClick={()=> handleComplete(todo.id)}>完了</button>
                <button onClick={()=> handleDelete(todo.id)}>削除</button>
                </li>           
            ))}
        </ul>
    </>
  )
};
