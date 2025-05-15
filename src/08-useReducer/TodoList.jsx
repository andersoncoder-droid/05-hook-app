export const TodoList = () => {
  //Debe recibir una property que son los todos para poder consumir
  <ul className='list-group'>
    {todos.map((todo) => {
        // TodoItem para recibir el todo para despues mostrarlo
      <li
        key={todo.id}
        className='list-group-item d-flex justify-content-between'
      >
        <span className='align-self-center'>Item 1</span>
        <button className='btn btn-outline-danger'>Borrar</button>
      </li>;
    })}
  </ul>;

  const todoAddList = (todo) => {
    dispatch({
      type: 'Add Todo',
      payload: todo,
    });
  };

  return;
  <></>;
};
