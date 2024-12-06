import React from "react";
import { CreateTodoButton } from "../CreateTodoButton";

function TodoSave({ placeholder, id, name, type }) {
  return (
    <form>
      <div className="row">
        <input
          placeholder={placeholder}
          id={id}
          name={name}
          typeof={type}
          className="input-search"
        />
        <CreateTodoButton />
      </div>
    </form>
  );
}
function TodoSearch({ placeholder, id, name, type,searchValue, setSearchValue }) {
  return (
    <form>
      <div className="row">
        <input
          placeholder={placeholder}
          id={id}
          name={name}
          typeof={type}
          className="input-search"
          style={{
            width:"13rem"
          }}
          value={searchValue}
          onChange={
            (event) => {
              setSearchValue(event.target.value);
              console.log(event.target.value);

          }}
        />
      </div>
    </form>
  );
}

export { TodoSave, TodoSearch };
