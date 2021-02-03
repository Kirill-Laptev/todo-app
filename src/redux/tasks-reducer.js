const ADD_NEW_TASK = 'ADD_NEW_TASK';
const DELETE_TASK = 'DELETE_TASK';

const initialState = {
    allTasks: [
       {id: 0, text: 'Watch new video about ReactJS'},
       {id: 1, text: 'Buy ticket to Saint-Petersburg'},
       {id: 2, text: 'Create dream-board'}
    ]
}

const tasks = (state = initialState, action) => {
    switch(action.type){
        case ADD_NEW_TASK: 

        const newTask = {id: state.allTasks.length, text: action.value}

            return{
                ...state,
                allTasks: [...state.allTasks, newTask]
            }


        case DELETE_TASK:

        const copyArr = [...state.allTasks]
        copyArr.forEach((obj, index) => {
            if(obj.id === action.id){
                copyArr.splice(index, 1)
            }
        })
        
            return {
                ...state,
                allTasks: copyArr
            }    

        default:
            return state;
    }
}

export const addNewTask = (value) => {
    return {type: ADD_NEW_TASK, value}
}

export const deleteTask = (id) => {
    return {type: DELETE_TASK, id}
}

export default tasks;