import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks.js";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function addNewTask(task) {
    task = {
      id: tasks.length === 0 ? 1 : parseInt(tasks[tasks.length - 1].id) + 1,
      ...task,
    };
    console.log(`adding new task: ${task.id} - ${task.title}`);
    setTasks([...tasks, task]);
  }

  const deleteTask = (taskId) => {
    console.log(`deleting task ${taskId}`);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addNewTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
