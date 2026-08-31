import { useTodos } from "../context/TodoContext";

export default function TodoList() {
  const { removeTodo, toggleTodo, visibleTodos } = useTodos();

  if (!visibleTodos.length) return <p>Nenhuma tarefa encontrada.</p>;

  return (
    <ul>
      {visibleTodos.map((todo) => (
        <li key={todo.id}>
          <label>
            <input
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              type="checkbox"
            />
            <span>{todo.text}</span>
          </label>
          <button onClick={() => removeTodo(todo.id)} type="button">
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}
