import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoList} from "./TodoList";
import TodoItem from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

import React from "react";
const defaultTodos =[
  {text: 'prueba 1', completed:true},
  {text: 'prueba 2', completed:false},
  {text: 'prueba 3', completed:false},
  {text: 'prueba 4', completed:false},
  {text: 'prueba 5', completed:false}
]

function App() {
  return (
    <>

      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed ={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export default App;
