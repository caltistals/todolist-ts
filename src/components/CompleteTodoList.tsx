import React from 'react';
import {Todo} from "../App";

type Props = {
    completeTodos: Todo[],
    handleBack: (id: string) => void
};

export const CompleteTodoList: React.FC<Props> = ({completeTodos, handleBack}) => {
  return (
    <>
        <h4>完了したタスク: {completeTodos.length}個</h4>
        <ul>
          {completeTodos.map((completeTodo) => (
            <li key={completeTodo.id}>
              {completeTodo.value}
              <button onClick={()=> handleBack(completeTodo.id)}>戻す</button>
            </li>           
          ))}
        </ul>
    </>
  )
};

