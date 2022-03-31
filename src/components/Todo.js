import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    if (!modalIsOpen) {
      setModalIsOpen(true);
    }
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div class="card">
      <h2>{props.title}</h2>
      <div class="actions">
        <button class="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onConfirm={closeModalHandler} onCancel={closeModalHandler}/>}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;
