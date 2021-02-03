import React from "react";
import TaskItem from "./TaskItem";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasks-reducer";

const TaskList = () => {

const dispatch = useDispatch()    
const taskItems = useSelector(({tasks}) => tasks.allTasks)

const onDeleteIconClick = (id) => {
    dispatch(deleteTask(id))
}

  return (
    <div className="tasks__block">
      <div className="tasks__title">To-do List</div>
      {taskItems.length > 0 ? taskItems.map((item) => {
          return <TaskItem 
          key={item.id} 
          text={item.text} 
          id={item.id}
          onDeleteIconClick={onDeleteIconClick}/>
      }) : <div className='tasks__empty'>Write some text in field and click "Add" button</div>}
    </div>
  );
};

export default TaskList;
