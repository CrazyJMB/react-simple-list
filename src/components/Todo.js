function Todo(props) {
  return (
    <div class="card">
      <h2>{props.title}</h2>
      <div class="actions">
        <button class="btn">Delete</button>
      </div>
    </div>
  );
}

export default Todo;
