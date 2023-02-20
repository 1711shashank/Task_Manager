import React, { useContext } from 'react'
import './TasksBox.css'
import TaskContext from '../Context/TaskContext'
import SubTasksBox from './SubTasksBox'

const TasksBox = () => {

    const taskCtx = useContext(TaskContext);

    return (
        <>
            {taskCtx.tasks.map((item) => (
                <div className='task' key={item.id}>
                    <div className='task__header'>
                        <p className='task__name'> {item.TaskName}</p>
                    </div>
                    <div className='task__subtask'>
                        <SubTasksBox />
                    </div>
                </div>
            ))}
        </>
    )
}

export default TasksBox;
