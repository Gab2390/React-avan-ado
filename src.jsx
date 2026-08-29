import { TodoProvider } from './context/TodoContext';
import { TodoForm } from './components/TodoForm';
import { TodoFilters } from './components/TodoFilters';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <TodoProvider>
      <div className="app-container">
        <header>
          <h1>Lista de Tarefas</h1>
          <p>Organize o que precisa ser feito.</p>
        </header>
        <TodoForm />
        <TodoFilters />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;