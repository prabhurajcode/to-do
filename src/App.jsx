import "./App.css";
import Taskform from "./components/Taskform";
import TagColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";
import { useState, useEffect } from "react";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleEdit = (taskIndex) => {
    const taskToEdit = tasks[taskIndex];
    setEditingTask({ ...taskToEdit, index: taskIndex });
  };

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };
  return (
    <div className="app">
      <Taskform
        setTasks={setTasks}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />
      <main className="app_main">
        <TagColumn
          title="Todo / Not Completed"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        <TagColumn
          title="Doing"
          icon={doingIcon}
          tasks={tasks}
          status="doing"
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        <TagColumn
          title="Completed"
          icon={doneIcon}
          tasks={tasks}
          status="done"
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
