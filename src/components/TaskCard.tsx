import { Task } from "../interfaces/Task.interface";

interface TaskCardProps {
  task: Task;
  deleteTask: (id: number) => void;
  completeTask: (id: number) => void;
}
function TaskCard({ task, deleteTask, completeTask }: TaskCardProps) {
  return (
    <div className="mb-2 card card-body" key={task.id}>
      <h2>{task.title}</h2>
      <p>{task.id}</p>
      <p>{task.description}</p>
      <p>{task.done ? "Completed!" : "Realize task"}</p>
      <div className="column mt-3">
        <button
          className="btn btn-success btn-block mr-2"
          onClick={() => task.id && completeTask(task.id)}
        >
          Complete
        </button>
        <button
          className="btn btn-danger btn-block"
          onClick={() => task.id && deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
