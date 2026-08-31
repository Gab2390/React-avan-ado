import { useState } from "react";
import { useTodos } from "../context/TodoContext";

export default function TodoForm() {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  function handleSubmit(event) {
    event.preventDefault();
    addTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo-text">Nova tarefa</label>
      <input
        id="todo-text"
        onChange={(event) => setText(event.target.value)}
        placeholder="Digite uma tarefa"
        value={text}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
