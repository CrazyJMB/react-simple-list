import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="Learning react"/>
      <Todo title="Learning components"/>
      <Todo title="Something more"/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
