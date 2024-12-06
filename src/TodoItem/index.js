import React from 'react';
import { FaCheck } from "react-icons/fa";
import "./TodoItem.css";
import { FaXmark } from 'react-icons/fa6';

function TodoItem({ text, completed, onComplete, onDelete}) {
  return (
    <li className={`liItem box-shadow mt-3`}>
      <span 
      className={`Icon Icon-check ${completed ? 'Icon-completed' : 'Icon-done'}`}
      onClick={onComplete}
      >
        <FaCheck size={50} />
      </span>
      <p className={`item-p ${completed ? 'Item-p--completed' : ''}`}>{text}</p>
      <span 
      className="Icon Icon-delete"
      onClick={onDelete}
      ><FaXmark size={15} /></span>
    </li>
  );
}

export default TodoItem;
