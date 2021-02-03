import { createStore, combineReducers } from 'redux'
import tasks from './tasks-reducer';

const rootReducer = combineReducers({
    tasks
})

const store = createStore(rootReducer);


window.store = store;

export default store;