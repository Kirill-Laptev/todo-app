import './App.css';
import TaskList from './components/TaskList/TaskList';
import AddTask from './components/AddTask/AddTask';

function App() {
  return (
    <div className="wrapper">
        <div className="content">
            <div className="app__wrapper">
                <div className="app__inner">
                    <TaskList />
                    <AddTask />
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
