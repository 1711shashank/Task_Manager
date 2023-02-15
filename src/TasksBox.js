import React, { useState } from 'react'
import SubTasksBox from './SubTasksBox'
import './TasksBox.css'

const TasksBox = () => {
    const TasksDataTable = [
        { id: 11, TaskName: 'Task 1', SubTasksFinished : 1, SubTasksTotal:5, SubTasks: [{ id: 1, SubTaskName: "Read Redux", SubTaskStatus: true },{ id: 2, SubTaskName: "SubTask 1", SubTaskStatus: true }] },
        { id: 22, TaskName: 'Task 2', SubTasksFinished : 2, SubTasksTotal:5, SubTasks: [{ id: 1, SubTaskName: "SubTask 1", SubTaskStatus: true },{ id: 2, SubTaskName: "SubTask 1", SubTaskStatus: true }] },
        { id: 33, TaskName: 'Task 3', SubTasksFinished : 3, SubTasksTotal:5, SubTasks: [{ id: 1, SubTaskName: "SubTask 1", SubTaskStatus: true },{ id: 2, SubTaskName: "SubTask 1", SubTaskStatus: true }] },
        { id: 44, TaskName: 'Task 4', SubTasksFinished : 4, SubTasksTotal:5, SubTasks: [{ id: 1, SubTaskName: "SubTask 1", SubTaskStatus: true },{ id: 2, SubTaskName: "SubTask 1", SubTaskStatus: true }] }
    ];

    const [tasks, setTasks] = useState(TasksDataTable);

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