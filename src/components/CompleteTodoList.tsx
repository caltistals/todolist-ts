import React from 'react';
import {Todo} from "../App";
import styled from "styled-components";

type Props = {
    completeTodos: Todo[],
    handleBack: (id: string) => void
};

const TodoListWrapper = styled.section `
  background-color: pink;
  border-radius:5px;
  width:300px;
  min-height: 200px;
  padding: 3px;
  h4 {
    text-align: center;
    color: grey;
  }
`;

export const CompleteTodoList: React.FC<Props> = ({completeTodos, handleBack}) => {
  return (
    <TodoListWrapper>
        <h4>完了したタスク: {completeTodos.length}件</h4>
        <ul>
          {completeTodos.map((completeTodo) => (
            <li key={completeTodo.id}>
              {completeTodo.value}
              <button onClick={()=> handleBack(completeTodo.id)}>戻す</button>
            </li>           
          ))}
        </ul>
    </TodoListWrapper>
  );
};

