import React from "react";
import "./Card.css";
import { TodoSearch, TodoSave } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoCounter } from "../TodoCounter";
import TodoItem from "../TodoItem";
import { useLocalStorage } from "../App/useLocalStorage";

const defaultTodos = [
  { text: "Comprar pan", completed: true },
  { text: "Llamar al médico", completed: false },
  { text: "Estudiar JavaScript", completed: true },
  { text: "Ir al gimnasio", completed: false },
  { text: "Enviar correo a Juan", completed: false },
  { text: "Revisar presupuesto", completed: true },
];

function CardSearch(props) {
  return (
    <div className="card">
      <div className="card-header">
        <label>{props.title}</label>
      </div>
      <div className="card-body">
        <TodoSave placeholder={"Nombre de gasto"} id={"newSpending"} />
      </div>
    </div>
  );
}

function CardItems({ className, title }) {
  const [todos, saveTodos] = useLocalStorage('GASTOS_V1', []);

  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((x) => !!x.completed).length;

  const totalTodos = todos.length;

  const todoSearch = todos.filter((x) => {
    return x.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
  });
   

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };

  if (!defaultTodos) return <label>{title}</label>;

  return (
    <div className={className}>
      <div className="card-header">
        <label>{title}</label>
      </div>
      <div className="card-body">
        <TodoSearch
          placeholder={"Buscar..."}
          id={"searchSpending"}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <div className="overflow-y">
          <TodoList>
            {todoSearch.map((item, index) => (
              <TodoItem
                key={index}
                text={item.text}
                completed={item.completed}
                onComplete={() => completeTodo(index)}
                onDelete={() => deleteTodo(index)}
              />
            ))}
          </TodoList>
        </div>
      </div>
    </div>
  );
}

export { CardSearch, CardItems };
