import React, { useState } from "react";
import Button from "../Button";
import { addNewTask } from "../../redux/tasks-reducer";
import { useDispatch } from "react-redux";

const AddTask = () => {    
const dispatch = useDispatch()
const [inputValue, setInputValue] = useState('')    

const handleOnChange = (event) => {
    if(event.target.value.length < 40){
      setInputValue(event.target.value)
    }
}  

const onClickAddButton = () => {
    if(inputValue){
      dispatch(addNewTask(inputValue))
      setInputValue('')
    }
}

  return (
    <div className="addtask__block">
      <div className="addtask__title">Add task</div>
      <div className="addtask__input">
          <input type='text' onChange={handleOnChange} value={inputValue}/>
      </div>
      <Button onClickAddButton={onClickAddButton} />
    </div>
  );
};

export default AddTask;
