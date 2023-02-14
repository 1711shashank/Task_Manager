import React from 'react'
import SubTasks from './SubTasks'
import './Tasks.css'

const Tasks = () => {
    const Tasks = [
        { id: 1, TaskName: 'Task 1', SubTasksFinished : 1, SubTasksTotal:5, SubTasks: [{ id: 1, SubTaskName: "SubTask 1", SubTaskStatus: true },{ id: 2, SubTaskName: "SubTask 1", SubTaskStatus: true }] },
        { id: 2, TaskName: 'Task 2', SubTasksFinished : 2, SubTasksTotal:5, SubTasks: [{ id: 1, SubTaskName: "SubTask 1", SubTaskStatus: true },{ id: 2, SubTaskName: "SubTask 1", SubTaskStatus: true }] },
        { id: 3, TaskName: 'Task 3', SubTasksFinished : 3, SubTasksTotal:5, SubTasks: [{ id: 1, SubTaskName: "SubTask 1", SubTaskStatus: true },{ id: 2, SubTaskName: "SubTask 1", SubTaskStatus: true }] },
        { id: 4, TaskName: 'Task 4', SubTasksFinished : 4, SubTasksTotal:5, SubTasks: [{ id: 1, SubTaskName: "SubTask 1", SubTaskStatus: true },{ id: 2, SubTaskName: "SubTask 1", SubTaskStatus: true }] }
    ];

    return (
        <>
            <div className='tasks'>
                {Tasks.map((Task) => (
                    <div className='task' key={Task.id}>
                        <div className='task__header'>
                            <p className='task__name'> {Task.TaskName}</p>
                            <p className='task__completed'> {Task.SubTasksFinished}/{Task.SubTasksTotal} </p>
                        </div>
                        <div className='task__subtask'>
                            <SubTasks SubTask={Task.SubTasks}/>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}

export default Tasks