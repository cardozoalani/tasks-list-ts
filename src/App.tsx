import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Task } from "./interfaces/Task.interface";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const generateId = () => new Date().getTime();
  const handleAddTask = (task: Task) =>
    setTasks([...tasks, { ...task, id: generateId(), done: false }]);
  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task: Task) => task.id !== id));
  };
  const handleDoneTask = (id: number) => {
    setTasks(
      tasks.map((task: Task) =>
        task.id === id ? { ...task, done: true } : task
      )
    );
  };
  return (
    <div className="container mx-auto px-4 mt-4" style={{ height: "100vh" }}>
      <div className="row">
        <div className="col-md-4">
          <TaskForm onAdd={handleAddTask} />
        </div>
        <div className="col-md-8">
          <div className="row">
            <TaskList
              tasks={tasks}
              deleteTask={handleDeleteTask}
              completeTask={handleDoneTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
