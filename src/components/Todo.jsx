import React from "react";
// react-icons
import { FaTrashAlt } from "react-icons/fa";

const style = {
  li: `bg-slate-200 flex justify-between  my-3`,
  row: ` flex justify-between p-4 grow `,
  context: `grow ml-2 text-xl cursor-pointer`,
  trash: `text-xl p-3`,
  // Completed
  liComplete: `bg-slate-400 flex justify-between  my-3`,
  contextCompleted: `grow ml-2 text-xl line-through cursor-pointer`,
};

const Todo = ({ task, toggleComplete, deleteTask }) => {
  return (
    <li className={task.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(task)}
          type="checkbox"
          checked={task.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(task)}
          className={task.completed ? style.contextCompleted : style.context}
        >
          {task.text}
        </p>
      </div>
      <button onClick={() => deleteTask(task.id)} className={style.trash}>
        <FaTrashAlt />
      </button>
    </li>
  );
};

export default Todo;
