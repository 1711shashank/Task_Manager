import React, { useState, useContext } from 'react'
import SubTasksBox from './SubTasksBox'
import {DataBase} from '../Context/Context'
import './TasksBox.css'

const TasksBox = () => {

    const data = useContext(DataBase);
    const [TasksDataTable, setTasksDataTable] = useState(data[0]);
    const [tasks, setTasks] = useState(TasksDataTable.TaskSheet);

    const updateDataTable = (subTasks) => { 
        console.log("ChildDate", subTasks);
        
    }

    return (
        <>
            <div className='tasks'>
                {tasks.map((Task) => (
                    <div className='task' key={Task.id}>
                        <div className='task__header'>
                            <p className='task__name'> {Task.TaskName}</p>
                            <p className='task__completed'> {Task.SubTasksFinished}/{Task.SubTasksTotal} </p>
                        </div>
                        <div className='task__subtask'>
                            <SubTasksBox SubTask={Task} changeDataTable={updateDataTable}/>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TasksBox