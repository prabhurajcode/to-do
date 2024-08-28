import { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";
import PropTypes from "prop-types";

const Taskform = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    description: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => taskData.tags.includes(tag);

  const selectTag = (tag) => {
    if (checkTag(tag)) {
      setTaskData((prev) => ({
        ...prev,
        tags: prev.tags.filter((item) => item !== tag),
      }));
    } else {
      setTaskData((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => [...prev, taskData]);
    setTaskData({
      task: "",
      description: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <header className="app_header">
        <h1 className="todo_heading">My Todo</h1>

      <form onSubmit={handleSubmit}>
        <div className="task_inputs_container">
          <input
            className="task_input"
            type="text"
            name="task"
            placeholder="Todo name"
            value={taskData.task}
            required
            onChange={handleChange}
          />
          <input
            className="task_input"
            type="text"
            name="description"
            placeholder="Todo description"
            value={taskData.description}
            required
            onChange={handleChange}
          />
        </div>

        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="High"
              selectTag={selectTag}
              selected={checkTag("High")}
            />
            <Tag
              tagName="Medium"
              selectTag={selectTag}
              selected={checkTag("Medium")}
            />
            <Tag tagName="Low" selectTag={selectTag} selected={checkTag("Low")} />
          </div>

          <div>
            <select
              className="task_status"
              name="status"
              value={taskData.status}
              required
              onChange={handleChange}
            >
              <option value="todo">Todo / Not completed</option>
              <option value="doing">Doing</option>
              <option value="done">Completed</option>
            </select>
          </div>

          <button className="task_submit" type="submit">
            + Add Todo
          </button>
        </div>
      </form>
    </header>
  );
};

Taskform.propTypes = {
  setTasks: PropTypes.func.isRequired,
};

export default Taskform;
