import React from 'react';
import {Todo} from "../App"
import styled from "styled-components";

type Props = {
    todos: Todo[],
    handleComplete: (id: string) => void,
    handleDelete: (id: string) => void
};

const TodoListWrapper = styled.section `
  background-color: snow;
  border-radius:5px;
  width:300px;
  min-height: 200px;
  padding: 3px;
  h4 {
    text-align: center;
    color: grey;
  }
`;

export const TodoList: React.FC<Props> = ({todos, handleComplete, handleDelete}) => {
  return (
    <TodoListWrapper>
        <h4>未完了のタスク: {todos.length}件</h4>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                {todo.value}
                <button onClick={()=> handleComplete(todo.id)}>完了</button>
                <button onClick={()=> handleDelete(todo.id)}>削除</button>
                </li>           
            ))}
        </ul>
    </TodoListWrapper>
  )
};
