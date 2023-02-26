import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './SubTasksBox.css'

const SubTasksBox = ({ TaskId, subTasks, fetchData }) => {

    console.log(subTasks);

    const [newSubTask, setNewSubTask] = useState('');


    const addNewSubTask = (e) => {
        e.preventDefault();

        const newEntry = { SubTaskId: (Math.floor(Math.random() * 1e20+7)).toString(), SubTaskName: newSubTask, SubTaskStatus: false };

        axios
        .post(`http://localhost:5000/addSubTask`, { TaskId: TaskId, SubTask:newEntry})
        .then((res) => {
          console.log(res.data);
            fetchData();
        })
        .catch((err) => {
          alert(err);
        });
      
        setNewSubTask('');
    }
    
    const removeSubTask = (TaskId,SubTaskId) => {
        console.log(SubTaskId)


        const subTaskToBeDeleted = {TaskId:TaskId, SubTaskId}

        console.log(subTaskToBeDeleted);

        axios.post(`http://localhost:5000/deleteSubTask`,{subTaskToBeDeleted})
            .then((res) => {
                console.log(res.data);
                fetchData();
            })
            .catch((err) => {
                alert("Server error!");
            });
    }

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
                    <div className='subtasks__task' key={subTask.SubTaskid}>
                        <p>{subTask.SubTaskName}</p>
                        <DeleteOutlineIcon onClick={() => removeSubTask(TaskId, subTask.SubTaskId)} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default SubTasksBox