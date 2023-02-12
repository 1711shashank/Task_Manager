import React from 'react'
import SubTasks from './SubTasks'
import './Tasks.css'

// const task = [{Task:{SubTasks:"SubTask 1",SubTaskStatus:true}},{Task:{SubTasks:"SubTask 1",SubTaskStatus:true}}]




const Tasks = () => {
    const Tasks = [
        { TaskName: 'Task 1', SubTasks: [{ SubTaskName: "SubTask 1", SubTaskStatus: true },{ SubTaskName: "SubTask 1", SubTaskStatus: true }] },
        { TaskName: 'Task 2', SubTasks: [{ SubTaskName: "SubTask 1", SubTaskStatus: true },{ SubTaskName: "SubTask 1", SubTaskStatus: true }] },
        { TaskName: 'Task 3', SubTasks: [{ SubTaskName: "SubTask 1", SubTaskStatus: true },{ SubTaskName: "SubTask 1", SubTaskStatus: true }] },
        { TaskName: 'Task 4', SubTasks: [{ SubTaskName: "SubTask 1", SubTaskStatus: true },{ SubTaskName: "SubTask 1", SubTaskStatus: true }] }
    ];
    return (
        <>
            <div className='tasks'>
                {Tasks.map((Task) => (
                    <div className='task'>
                        <div className='task__header'>
                            <p className='task__name'> {Task.TaskName}</p>
                            <p className='task__completed'> 2/3 </p>
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