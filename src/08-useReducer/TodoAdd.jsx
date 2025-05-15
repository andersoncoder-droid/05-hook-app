export const TodoAdd = () => {
  // TodoAdd onNewTodo ( todo )
  // {id: new Date()..., description: '', done: false}

  <form action=''>
    <input
      type='text'
      placeholder='¿Qué hay que hacer?'
      className='form-control'
    />
    <button type='submit' className='btn btn-outline-primary mt-1'>
      Agregar
    </button>
  </form>;

  return <div>TodoAdd</div>;
};
