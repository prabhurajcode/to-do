import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";
import PropTypes from 'prop-types';

import "./TaskCard.css";

const TaskCard = ({ title, tags, handleDelete, index}) => {
  
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
        {tags.map((tag,index) => (
            <Tag key={index} tagName={tag} selected/>
          ))}
        </div>
        <div className="task_delete" onClick={()=>handleDelete(index)}>
          <img className="delete_icon" src={deleteIcon} alt="" />
        </div>
      </div>
    </article>
  );
};

TaskCard.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  handleDelete: PropTypes.func,
  index: PropTypes.int,

};
export default TaskCard;
