import React, { useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './SubTasks.css'

const SubTask = (props) => {

    // const [subTasks, setSubTasks] = useState(props.SubTask);
    const subTasks = props.SubTask;

    const handleSubmit = (e) => {
        e.preventDefault();
        window.alert("dfkjh");
    }
    

    return (
        <>
            <div className='subtasks'>
                <from className='subtasks__task' onSubmit={handleSubmit}>
                    <input className='subtasks_add' placeholder="Add Task"/>
                </from>
                {subTasks.map((subTask) => (
                    <div className='subtasks__task'>
                        <p>{subTask.SubTaskName}</p>
                        <DeleteOutlineIcon />
                    </div>
                ))}
            </div>
        </>
    )
}

export default SubTask