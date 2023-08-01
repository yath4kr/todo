import './App.css';
import { Task } from './Task'
import { useState } from 'react';

function App() {


  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("")

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: (toDoList.length === 0) ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    }
    setToDoList([...toDoList, task])
  }

  const completeTask = (id) => {
    setToDoList(toDoList.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      } else {
        return task;
      }
    }))
  }

  const deleteTask = (taskId) => {
    setToDoList(toDoList.filter((task) => {
      return task.id !== taskId;
    }));
  }

  return (
    <>
      <div className='App'>
        <div className='addTask'>
          <input onChange={handleChange}></input>
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className='list'>
          {
            toDoList.map((task) => {
              return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} completed={task.completed} completeTask={completeTask} />
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
