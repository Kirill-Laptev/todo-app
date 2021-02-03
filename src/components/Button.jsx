import React from 'react'

const Button = ({onClickAddButton}) => {

    return (
        <div className="addtask__button" onClick={onClickAddButton}>
          <button>Add</button>
        </div>
    )
}

export default Button
