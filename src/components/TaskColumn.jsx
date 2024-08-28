import TaskCard from "./TaskCard";
import "./TaskColumn.css";
import PropTypes from "prop-types";

const TagColumn = ({ title, icon, tasks, status, handleDelete }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} />
        {title}
      </h2>
      {
        tasks.map((task, index) => task.status === status
          && <TaskCard key={index} title={task.task} description={task.description} tags={task.tags} handleDelete={handleDelete} index={index} />)
      }
    </section>
  );
};

TagColumn.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  tasks: PropTypes.array,
  status: PropTypes.string,
  handleDelete: PropTypes.func,

};

export default TagColumn;
