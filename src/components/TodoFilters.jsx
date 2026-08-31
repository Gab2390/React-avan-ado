import { useTodos } from "../context/TodoContext";

const filters = [
  { label: "Todas", value: "all" },
  { label: "Ativas", value: "active" },
  { label: "Concluidas", value: "completed" },
];

export default function TodoFilters() {
  const { filter, setFilter } = useTodos();

  return (
    <nav aria-label="Filtrar tarefas">
      {filters.map((item) => (
        <button
          key={item.value}
          aria-pressed={filter === item.value}
          onClick={() => setFilter(item.value)}
          type="button"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
