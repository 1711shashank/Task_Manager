import React, { useEffect, useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './SubTasksBox.css'

const SubTasksBox = (props) => {

    const {id, SubTasks} = props.SubTask;

    const [subTasks, setSubTasks] = useState(SubTasks);
    const [newSubTask, setNewSubTask] = useState('');

    const addNewSubTask = async (e) => {
        e.preventDefault();

        const newEntry = { id: Math.random() * 10, SubTaskName: newSubTask, SubTaskStatus: false };

        setSubTasks([...subTasks, newEntry]);
        setNewSubTask('');
 
    }
    
    const removeSubTask = (id) => {
        const tempArray = subTasks.filter((curEle) => {
            return curEle.id !== id;
        });
        setSubTasks(tempArray);
    }


    useEffect(()=>{
        props.changeDataTable({id, subTasks});
    },[subTasks]);

    return (
        <>
            <div className='subtasks' action='' onSubmit={addNewSubTask}>
                <form className='subtasks__task'>

                    <input
                        className='subtasks_add'
                        placeholder="Add Task"
                        type='text'
                        value={newSubTask}
                        onChange={(e) => setNewSubTask(e.target.value)}
                        required
                    />
                </form>

                {subTasks.map((subTask) => (
                    <div className='subtasks__task' key={subTask.id}>
                        <p>{subTask.SubTaskName}</p>
                        <DeleteOutlineIcon onClick={() => removeSubTask(subTask.id)} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default SubTasksBox