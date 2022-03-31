function Todo(props) {
  function deleteHandler() {
      
  }

  return (
    <div class="card">
      <h2>{props.title}</h2>
      <div class="actions">
        <button class="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
