import TaskCard from "./TaskCard";
import { Task } from "../interfaces/Task.interface";

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
  completeTask: (id: number) => void;
}

function TaskList({ tasks, deleteTask, completeTask }: TaskListProps) {
  return (
    <>
      {tasks.map((task: Task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      ))}
    </>
  );
}

export default TaskList;
