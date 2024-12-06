function CreateTodoButton() {
  return (
    <button type="button"
      className="btn btn-primary" 
      onClick={
        (event) =>{
          console.log("click")
          console.log(event)
          console.log(event.target)
        }
      }
    >Crear</button>
  );
}
export { CreateTodoButton };
