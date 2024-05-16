import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addNewTask } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
        title: title,
        description: description,
    }
    addNewTask(newTask);
    setTitle("")
    setDescription("")
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-400 p-10 mb-4" onSubmit={handleSubmit}>
      <h1 className="text-2xl">Add a new task</h1>
      <input
        className="bg-slate-300 p-3 w-full mb-2"
        type="text"
        name="title"
        placeholder="Enter task title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea name="description" placeholder="Enter description" 
      onChange={(e) => setDescription(e.target.value)}
      className="bg-slate-300 p-3 w-full mb-2"
      value={description}></textarea>

      <button
      className="bg-indigo-500 px-3 py-1 text-white" type="submit">Add Task</button>
    </form>
    </div>
  );
}
