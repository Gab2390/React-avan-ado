import { TodoProvider } from "./context/TodoContext";
import TodoFilters from "./components/TodoFilters";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    return (
        <TodoProvider>
            <h1>Lista de Tarefas</h1>
            <TodoForm />
            <TodoFilters />
            <TodoList />
        </TodoProvider>
    );
}

export default App;
