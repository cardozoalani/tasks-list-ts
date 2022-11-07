import { ChangeEvent, FormEvent, useState, useRef } from "react";
import { Task } from "../interfaces/Task.interface";

interface TaskFormProps {
  onAdd: (task: Task) => void;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initalState = {
  title: "",
  description: "",
};

function TaskForm({ onAdd }: TaskFormProps) {
  const [task, setTask] = useState<Task>(initalState);
  const titleInput = useRef<HTMLInputElement>(null);
  const handleInputChange = ({ target: { name, value } }: HandleInputChange) =>
    setTask({ ...task, [name]: value });
  const handleSend = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd(task);
    setTask(initalState);
    titleInput.current?.focus();
  };
  return (
    <div className="p-4 border rounded-0 bg-center">
      <form
        className="justify-content-center align-items-center"
        onSubmit={handleSend}
      >
        <input
          type="text"
          className="mb-3"
          name="title"
          placeholder="Write title task"
          onChange={handleInputChange}
          value={task.title}
          autoFocus
          ref={titleInput}
        />
        <textarea
          placeholder="Witre description task border"
          name="description"
          onChange={handleInputChange}
          value={task.description}
        />
        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
