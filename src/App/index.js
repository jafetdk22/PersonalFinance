import React from "react";

import { CardSearch, CardItems } from "../Card";

function App() {
  return (
    <div className="app">
      <CardSearch title={'Nuevo Gasto'}/>
      <CardItems title="Ultimos Gastos" className="card px-2"/>
      {/* <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed ={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton /> */}

    </div>
  );
}

export default App;
 