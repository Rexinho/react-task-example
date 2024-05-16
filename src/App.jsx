import { TaskForm } from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto">
      <h1>To Do List</h1>
      <TaskForm />
      <TaskList />
      </div>
    </main>
  );
}

export default App;
