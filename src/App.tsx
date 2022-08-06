import React, { useRef, useState } from 'react';
import './App.css';
import {v4 as uuid} from "uuid";
import { CompleteTodoList } from './components/CompleteTodoList';
import { TodoList } from './components/TodoList';


export type Todo = {
  value: string,
  id: string,
};

function App() {
  const inputRef = useRef<HTMLInputElement>(null!);
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [completeTodos, setCompleteTodos] = useState<Todo[]>([]);

  const handleComplete = (id: string) => {
    const newTodos: Todo[] = todos.filter(state => state.id !== id);
    const newCompleteTodo: Todo|undefined = todos.find(state => state.id === id);
    if(newCompleteTodo === undefined) return;
    setTodos(newTodos);
    setCompleteTodos([newCompleteTodo, ...completeTodos ]);
  }

  const handleDelete = (id: string) => {
    const newTodos: Todo[] = todos.filter(state => state.id !== id);
    setTodos(newTodos);
  }

  const handleBack = (id: string) => {
    const newTodo: Todo|undefined = completeTodos.find(state => state.id === id);
    const newCompleteTodos: Todo[] = completeTodos.filter(state => state.id !== id);
    if(newTodo === undefined) return; 
    setTodos([newTodo, ...todos]);
    setCompleteTodos(newCompleteTodos);
  } 


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      value: inputRef.current.value,
      id: uuid(),
    };
    setTodos([newTodo, ...todos]);
    inputRef.current.value = "";
  }

  return (
    <div className="App">
      <div>
        <h2>TypeScript Todo</h2>
        <form onSubmit={(e)=> handleSubmit(e)}>
          <input type="text" ref={inputRef} className="inputText" required/>
          <input type="submit" value="追加" className="submitButton"/>
        </form>
        <TodoList todos={todos} handleComplete={handleComplete} handleDelete={handleDelete} />
        <CompleteTodoList completeTodos={completeTodos} handleBack={handleBack} />
      </div>
    </div>
  );
}

export default App;
