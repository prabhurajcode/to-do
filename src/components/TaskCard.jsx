import Tag from "./Tag";
import PropTypes from 'prop-types';

import "./TaskCard.css";

const TaskCard = ({ title, description, tags,handleEdit, handleDelete, index}) => {
  
  return (
    <article className="task_card">
      <p className="task_text">Name: {title}</p>
      <p className="task_text">Description : {description}</p>


      <div className="task_card_bottom_line">
        <div className="task_card_tags">
        {tags.map((tag,index) => (
            <Tag key={index} tagName={tag} selected/>
          ))}
        </div>
        <div className="task_card_buttons">
          <button className="edit_button" onClick={() => handleEdit(index)}>
            Edit
          </button>
          <button className="delete_button" onClick={() => handleDelete(index)}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

TaskCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
  index: PropTypes.int,

};
export default TaskCard;
